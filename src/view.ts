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

function executeApplyParkWide() {
	const st = styleStore.get()
	const preset = getActivePreset()
	const rides = getRides()
	let ridesModified = 0
	let guestsModified = 0

	rides.forEach((ride) => {
		ridesModified++
		if (st.globalTrack) applyTrackColours(ride, preset)
		if (st.globalVehicle) applyVehicleColours(ride, preset)
		if (st.globalStation) applyStationStyle(ride, preset)
	})

	if (st.globalGuests && preset.guest) {
		try {
			const guests = map.getAllEntities('guest')
			guests.forEach((g) => {
				guestsModified++
				g.tshirtColour = preset.guest.tshirt
				g.hatColour = preset.guest.hat
				g.balloonColour = preset.guest.balloon
				g.umbrellaColour = preset.guest.umbrella
			})
		} catch (e) {}

		try {
			const stalls = map.rides.filter((r) => r.classification === 'stall')
			stalls.forEach((s) => {
				context.executeAction('ridesetappearance', {
					ride: s.id,
					type: 0,
					value: preset.guest.tshirt,
					index: 0,
				}, () => {})
			})
		} catch (e) {}
	}

	try {
		park.postMessage({
			type: 'attraction',
			text: `Applied '${preset.name}' across park (${ridesModified} rides, ${guestsModified} guests)!`,
			subject: rides[0] ? rides[0].id : 0,
		})
	} catch (e) {}
}

function executeApplySingleRide() {
	const st = styleStore.get()
	const preset = getActivePreset()
	const rides = getRides()
	const ride = st.targetRideIndex >= 0 && st.targetRideIndex < rides.length ? rides[st.targetRideIndex] : rides[0]
	if (!ride) return

	if (st.singleTrack) applyTrackColours(ride, preset)
	if (st.singleVehicle) applyVehicleColours(ride, preset)

	try {
		park.postMessage({
			type: 'attraction',
			text: `Applied '${preset.name}' to ${ride.name}!`,
			subject: ride.id,
		})
	} catch (e) {}
}

export const styleWindow = window({
	title: 'Style Manager (v0.1.0-beta)',
	width: { value: 290, min: 290, max: 290 },
	height: { value: 385, min: 385, max: 385 },
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
						onChange: (idx) => {
							if (idx >= 0 && idx < STYLE_PRESETS.length) {
								setAndPersistStyleState({ activePresetId: STYLE_PRESETS[idx].id })
							}
						},
					}),
					label({
						text: compute(styleStore, (st) => {
							const p = STYLE_PRESETS.find((item) => item.id === st.activePresetId) ?? STYLE_PRESETS[0]
							return p.description
						}),
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
