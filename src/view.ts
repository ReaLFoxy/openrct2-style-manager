import {
	box,
	button,
	compute,
	dropdown,
	label,
	vertical,
	window,
} from 'openrct2-flexui'

import { setAndPersistStyleState, styleStore } from './state'
import { DEFAULT_PRESETS, applyStyleToRide, getAllRides } from './styles'

export const mainWindow = window({
	title: 'Style Manager (v0.1.0-beta)',
	width: { value: 260, min: 260, max: 260 },
	height: { value: 230, min: 230, max: 230 },
	content: [
		box({
			text: 'Style Presets',
			content: vertical({
				content: [
					label({ text: 'Preset Palette:' }),
					dropdown({
						items: DEFAULT_PRESETS.map((p) => p.name),
						selectedIndex: compute(styleStore, (st) => {
							const idx = DEFAULT_PRESETS.findIndex((p) => p.id === st.activePreset)
							return idx >= 0 ? idx : 0
						}),
						onChange: (idx) => {
							const selected = DEFAULT_PRESETS[idx]
							if (selected) {
								setAndPersistStyleState({ activePreset: selected.id })
							}
						},
					}),
					label({
						text: compute(styleStore, (st) => {
							const preset = DEFAULT_PRESETS.find((p) => p.id === st.activePreset)
							return preset?.description ?? ''
						}),
					}),
				],
			}),
		}),
		box({
			text: 'Apply Palette',
			content: vertical({
				content: [
					dropdown({
						items: compute(styleStore, () => getAllRides().map((r) => r.name)),
						selectedIndex: compute(styleStore, (st) => st.targetRideIndex),
						onChange: (idx) => setAndPersistStyleState({ targetRideIndex: idx }),
					}),
					button({
						text: 'Apply Style to Ride',
						height: '28px',
						onClick: () => {
							const rides = getAllRides()
							const st = styleStore.get()
							const ride = rides[st.targetRideIndex]
							const preset = DEFAULT_PRESETS.find((p) => p.id === st.activePreset) ?? DEFAULT_PRESETS[0]
							if (ride && preset) {
								applyStyleToRide(ride, preset)
							}
						},
					}),
				],
			}),
		}),
	],
})
