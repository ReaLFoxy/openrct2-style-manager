import type { StylePreset } from './state'

export const DEFAULT_PRESETS: StylePreset[] = [
	{
		id: 'classic_crimson',
		name: 'Classic Crimson',
		description: 'Bold red track with dark iron supports',
		trackColourMain: 14,
		trackColourAdditional: 13,
		trackColourSupports: 2,
		vehicleColourBody: 14,
		vehicleColourTrim: 0,
		vehicleColourTertiary: 1,
	},
	{
		id: 'ocean_breeze',
		name: 'Ocean Breeze',
		description: 'Soothing marine blue with crisp white trim',
		trackColourMain: 22,
		trackColourAdditional: 24,
		trackColourSupports: 0,
		vehicleColourBody: 22,
		vehicleColourTrim: 26,
		vehicleColourTertiary: 0,
	},
	{
		id: 'forest_timber',
		name: 'Forest Timber',
		description: 'Natural woodland greens and warm wood tones',
		trackColourMain: 9,
		trackColourAdditional: 8,
		trackColourSupports: 4,
		vehicleColourBody: 9,
		vehicleColourTrim: 6,
		vehicleColourTertiary: 4,
	},
	{
		id: 'cyber_neon',
		name: 'Cyber Neon',
		description: 'Vibrant neon purple with electric highlights',
		trackColourMain: 30,
		trackColourAdditional: 28,
		trackColourSupports: 1,
		vehicleColourBody: 30,
		vehicleColourTrim: 18,
		vehicleColourTertiary: 1,
	},
]

export function getAllRides(): Ride[] {
	return map.rides.filter((r) => r.classification === 'ride')
}

export function applyStyleToRide(ride: Ride, preset: StylePreset): void {
	if (!ride) return

	if (preset.trackColourMain !== undefined) {
		context.executeAction(
			'ridesetappearance',
			{
				ride: ride.id,
				type: 0,
				value: preset.trackColourMain,
				index: 0,
			},
			() => {},
		)
	}

	park.postMessage({
		type: 'attraction',
		text: `Style '${preset.name}' applied to ${ride.name}!`,
		subject: ride.id,
	})
}
