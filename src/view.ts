import {
	box,
	button,
	checkbox,
	compute,
	dropdown,
	label,
	vertical,
	window,
} from 'openrct2-flexui'

import { setAndPersistStyleState, styleStore } from './state'
import { STYLE_PRESETS, executeApplyStyle, getRides } from './styles'

export const styleWindow = window({
	title: 'Style Manager (v0.1.0-beta)',
	width: { value: 280, min: 280, max: 280 },
	height: { value: 340, min: 340, max: 340 },
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
			text: 'Components to Apply',
			content: vertical({
				content: [
					checkbox({
						text: 'Track colors (3-tier)',
						isChecked: compute(styleStore, (st) => st.applyTrack),
						onChange: (val) => setAndPersistStyleState({ applyTrack: val }),
					}),
					checkbox({
						text: 'Vehicle colors (Body/Trim/Tertiary)',
						isChecked: compute(styleStore, (st) => st.applyVehicle),
						onChange: (val) => setAndPersistStyleState({ applyVehicle: val }),
					}),
					checkbox({
						text: 'Station entrance style',
						isChecked: compute(styleStore, (st) => st.applyStation),
						onChange: (val) => setAndPersistStyleState({ applyStation: val }),
					}),
					checkbox({
						text: 'Guest accessories (T-shirt/Hat/Balloon)',
						isChecked: compute(styleStore, (st) => st.applyGuests),
						onChange: (val) => setAndPersistStyleState({ applyGuests: val }),
					}),
				],
			}),
		}),
		box({
			text: 'Target Scope',
			content: vertical({
				content: [
					dropdown({
						items: compute(styleStore, () => getRides().map((r) => r.name)),
						selectedIndex: compute(styleStore, (st) => st.targetRideIndex),
						disabled: compute(styleStore, (st) => st.targetAllRides),
						onChange: (idx) => setAndPersistStyleState({ targetRideIndex: idx }),
					}),
					checkbox({
						text: 'Apply to ALL rides in park',
						isChecked: compute(styleStore, (st) => st.targetAllRides),
						onChange: (val) => setAndPersistStyleState({ targetAllRides: val }),
					}),
					button({
						text: 'Apply Selected Styles',
						height: '28px',
						onClick: () => {
							const st = styleStore.get()
							const preset = STYLE_PRESETS.find((p) => p.id === st.activePresetId) ?? STYLE_PRESETS[0]
							executeApplyStyle({
								preset,
								applyTrack: st.applyTrack,
								applyVehicle: st.applyVehicle,
								applyStation: st.applyStation,
								applyGuests: st.applyGuests,
								targetAllRides: st.targetAllRides,
								targetRideIndex: st.targetRideIndex,
							})
						},
					}),
				],
			}),
		}),
	],
})
