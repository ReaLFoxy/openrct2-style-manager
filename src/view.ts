import {
	box,
	button,
	checkbox,
	compute,
	dropdown,
	horizontal,
	label,
	vertical,
	window,
} from 'openrct2-flexui'

import { setAndPersistStyleState, styleStore } from './state'
import {
	COLOR_NAMES,
	DEFAULT_SLOTS,
	OPENRCT2_COLORS,
	STYLE_PRESETS,
	applyStationStyle,
	applyTrackColours,
	applyVehicleColours,
	getRides,
} from './styles'

function getActivePreset() {
	const st = styleStore.get()
	return STYLE_PRESETS.find((p) => p.id === st.activePresetId) ?? STYLE_PRESETS[0]
}

function getActivePalette() {
	const st = styleStore.get()
	if (st.useCustomPalette) {
		const mainName = (OPENRCT2_COLORS[st.customMain] || OPENRCT2_COLORS[0]).name
		const addName = (OPENRCT2_COLORS[st.customAdd] || OPENRCT2_COLORS[0]).name
		return {
			name: `Custom (${mainName} / ${addName})`,
			track: { main: st.customMain, add: st.customAdd, sup: st.customSup },
			vehicle: { body: st.customMain, trim: st.customAdd, tert: st.customSup },
			guest: { tshirt: st.customMain, hat: st.customAdd, balloon: st.customMain, umbrella: st.customAdd },
			stationStyle: 0,
		}
	}
	const p = getActivePreset()
	return {
		name: p.name,
		track: { main: p.track.main, add: p.track.additional, sup: p.track.supports },
		vehicle: { body: p.vehicle.body, trim: p.vehicle.trim, tert: p.vehicle.tertiary },
		guest: p.guest,
		stationStyle: p.stationStyle,
	}
}

function executeApplyParkWide() {
	const st = styleStore.get()
	const palette = getActivePalette()
	const rides = getRides()
	let ridesModified = 0
	let guestsModified = 0

	rides.forEach((ride) => {
		ridesModified++
		if (st.globalTrack) applyTrackColours(ride, palette)
		if (st.globalVehicle) applyVehicleColours(ride, palette)
		if (st.globalStation) applyStationStyle(ride, palette)
	})

	if (st.globalGuests && palette.guest) {
		try {
			const guests = map.getAllEntities('guest')
			guests.forEach((g) => {
				guestsModified++
				g.tshirtColour = palette.guest.tshirt
				g.hatColour = palette.guest.hat
				g.balloonColour = palette.guest.balloon
				g.umbrellaColour = palette.guest.umbrella
			})
		} catch (e) {}

		try {
			const stalls = map.rides.filter((r) => r.classification === 'stall')
			stalls.forEach((s) => {
				context.executeAction('ridesetappearance', {
					ride: s.id,
					type: 0,
					value: palette.guest.tshirt,
					index: 0,
				}, () => {})
			})
		} catch (e) {}
	}

	try {
		park.postMessage({
			type: 'attraction',
			text: `Applied '${palette.name}' across park (${ridesModified} rides, ${guestsModified} guests)!`,
			subject: rides[0] ? rides[0].id : 0,
		})
	} catch (e) {}
}

function executeApplySingleRide() {
	const st = styleStore.get()
	const palette = getActivePalette()
	const rides = getRides()
	const ride = st.targetRideIndex >= 0 && st.targetRideIndex < rides.length ? rides[st.targetRideIndex] : rides[0]
	if (!ride) return

	if (st.singleTrack) applyTrackColours(ride, palette)
	if (st.singleVehicle) applyVehicleColours(ride, palette)

	try {
		park.postMessage({
			type: 'attraction',
			text: `Applied '${palette.name}' to ${ride.name}!`,
			subject: ride.id,
		})
	} catch (e) {}
}

function saveCurrentToSlot() {
	const st = styleStore.get()
	const slots = (st.customSlots || DEFAULT_SLOTS).slice()
	const idx = st.selectedSlotIndex >= 0 && st.selectedSlotIndex < slots.length ? st.selectedSlotIndex : 0
	const mainName = (OPENRCT2_COLORS[st.customMain] || OPENRCT2_COLORS[0]).name
	const addName = (OPENRCT2_COLORS[st.customAdd] || OPENRCT2_COLORS[0]).name

	slots[idx] = {
		name: `Slot ${idx + 1}: ${mainName} / ${addName}`,
		main: st.customMain,
		add: st.customAdd,
		sup: st.customSup,
	}

	setAndPersistStyleState({ customSlots: slots })

	try {
		park.postMessage({
			type: 'attraction',
			text: `Saved custom palette to Slot ${idx + 1} (${mainName} / ${addName})!`,
			subject: 0,
		})
	} catch (e) {}
}

export const styleWindow = window({
	title: 'Style Manager (v0.1.0-beta)',
	width: { value: 300, min: 300, max: 300 },
	height: { value: 510, min: 510, max: 510 },
	onOpen: () => {
		const rList = getRides()
		const curIdx = styleStore.get().targetRideIndex
		const newIdx = curIdx >= 0 && curIdx < rList.length ? curIdx : (rList.length > 0 ? 0 : -1)
		setAndPersistStyleState({
			rides: rList,
			targetRideIndex: newIdx,
		})
	},
	content: [
		box({
			text: 'Style Presets',
			content: vertical({
				content: [
					label({ text: 'Preset Palette:' }),
					dropdown({
						items: STYLE_PRESETS.map((p) => p.name),
						selectedIndex: compute(styleStore, (st) => {
							const idx = STYLE_PRESETS.findIndex((p) => p.id === st.activePresetId)
							return idx >= 0 ? idx : 0
						}),
						disabled: compute(styleStore, (st) => !!st.useCustomPalette),
						onChange: (idx) => {
							if (idx >= 0 && idx < STYLE_PRESETS.length) {
								setAndPersistStyleState({ activePresetId: STYLE_PRESETS[idx].id })
							}
						},
					}),
					label({
						text: compute(styleStore, (st) => {
							if (st.useCustomPalette) return '(Custom Palette Active)'
							const p = STYLE_PRESETS.find((item) => item.id === st.activePresetId) ?? STYLE_PRESETS[0]
							return p.description
						}),
					}),
					checkbox({
						text: 'Use Custom Palette (3-Color)',
						isChecked: compute(styleStore, (st) => st.useCustomPalette),
						onChange: (val) => setAndPersistStyleState({ useCustomPalette: val }),
					}),
					label({ text: 'Custom Palette Slot (Max 6):' }),
					dropdown({
						items: compute(styleStore, (st) => {
							const slots = st.customSlots || DEFAULT_SLOTS
							return slots.map((s) => s.name)
						}),
						selectedIndex: compute(styleStore, (st) => st.selectedSlotIndex),
						disabled: compute(styleStore, (st) => !st.useCustomPalette),
						onChange: (idx) => {
							const st = styleStore.get()
							const slots = st.customSlots || DEFAULT_SLOTS
							if (idx >= 0 && idx < slots.length) {
								const s = slots[idx]
								setAndPersistStyleState({
									selectedSlotIndex: idx,
									customMain: s.main,
									customAdd: s.add,
									customSup: s.sup,
								})
							}
						},
					}),
					horizontal({
						content: [
							label({ text: 'Main (Track/Body):', width: '45%' }),
							dropdown({
								items: COLOR_NAMES,
								width: '55%',
								selectedIndex: compute(styleStore, (st) => st.customMain),
								disabled: compute(styleStore, (st) => !st.useCustomPalette),
								onChange: (val) => setAndPersistStyleState({ customMain: val }),
							}),
						],
					}),
					horizontal({
						content: [
							label({ text: 'Sub (Rails/Trim):', width: '45%' }),
							dropdown({
								items: COLOR_NAMES,
								width: '55%',
								selectedIndex: compute(styleStore, (st) => st.customAdd),
								disabled: compute(styleStore, (st) => !st.useCustomPalette),
								onChange: (val) => setAndPersistStyleState({ customAdd: val }),
							}),
						],
					}),
					horizontal({
						content: [
							label({ text: 'Support (Pillars):', width: '45%' }),
							dropdown({
								items: COLOR_NAMES,
								width: '55%',
								selectedIndex: compute(styleStore, (st) => st.customSup),
								disabled: compute(styleStore, (st) => !st.useCustomPalette),
								onChange: (val) => setAndPersistStyleState({ customSup: val }),
							}),
						],
					}),
					button({
						text: 'Save Current Colors to Slot',
						height: '24px',
						disabled: compute(styleStore, (st) => !st.useCustomPalette),
						onClick: saveCurrentToSlot,
					}),
				],
			}),
		}),
		box({
			text: 'Park-Wide Batch Styling',
			content: vertical({
				content: [
					checkbox({
						text: 'All tracks (3-tier)',
						isChecked: compute(styleStore, (st) => st.globalTrack),
						onChange: (val) => setAndPersistStyleState({ globalTrack: val }),
					}),
					checkbox({
						text: 'All vehicles (Body/Trim/Tertiary)',
						isChecked: compute(styleStore, (st) => st.globalVehicle),
						onChange: (val) => setAndPersistStyleState({ globalVehicle: val }),
					}),
					checkbox({
						text: 'All station entrance styles',
						isChecked: compute(styleStore, (st) => st.globalStation),
						onChange: (val) => setAndPersistStyleState({ globalStation: val }),
					}),
					checkbox({
						text: 'All guests & stalls (T-shirt/Hat/Balloon)',
						isChecked: compute(styleStore, (st) => st.globalGuests),
						onChange: (val) => setAndPersistStyleState({ globalGuests: val }),
					}),
					button({
						text: 'Apply to Entire Park',
						height: '26px',
						onClick: executeApplyParkWide,
					}),
				],
			}),
		}),
		box({
			text: 'Individual Ride Styling',
			content: vertical({
				content: [
					dropdown({
						items: compute(styleStore, (st) => {
							const rList = st.rides && st.rides.length > 0 ? st.rides : getRides()
							return rList.map((r) => r.name)
						}),
						selectedIndex: compute(styleStore, (st) => st.targetRideIndex),
						onChange: (idx) => setAndPersistStyleState({ targetRideIndex: idx }),
					}),
					horizontal({
						content: [
							checkbox({
								text: 'Track Color',
								width: '50%',
								isChecked: compute(styleStore, (st) => st.singleTrack),
								onChange: (val) => setAndPersistStyleState({ singleTrack: val }),
							}),
							checkbox({
								text: 'Vehicle Color',
								width: '50%',
								isChecked: compute(styleStore, (st) => st.singleVehicle),
								onChange: (val) => setAndPersistStyleState({ singleVehicle: val }),
							}),
						],
					}),
					button({
						text: 'Apply to Selected Ride',
						height: '26px',
						onClick: executeApplySingleRide,
					}),
				],
			}),
		}),
	],
})
