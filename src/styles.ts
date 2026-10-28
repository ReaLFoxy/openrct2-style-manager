export interface ColourTriple {
	main: number
	additional: number
	supports: number
}

export interface VehicleColourTriple {
	body: number
	trim: number
	tertiary: number
}

export interface GuestColourSet {
	tshirt: number
	hat: number
	balloon: number
	umbrella: number
}

export interface StylePreset {
	id: string
	name: string
	description: string
	track: ColourTriple
	vehicle: VehicleColourTriple
	stationStyle: number
	guest: GuestColourSet
}

export interface CustomSlot {
	name: string
	main: number
	add: number
	sup: number
}

export const OPENRCT2_COLORS = [
	{ id: 0, name: 'Black' },
	{ id: 1, name: 'Grey' },
	{ id: 2, name: 'White' },
	{ id: 3, name: 'Dark Purple' },
	{ id: 4, name: 'Light Purple' },
	{ id: 5, name: 'Bright Purple' },
	{ id: 6, name: 'Dark Blue' },
	{ id: 7, name: 'Light Blue' },
	{ id: 8, name: 'Icy Blue' },
	{ id: 9, name: 'Teal / Dark Water' },
	{ id: 10, name: 'Aquamarine / Light Water' },
	{ id: 11, name: 'Saturated Green' },
	{ id: 12, name: 'Dark Green' },
	{ id: 13, name: 'Moss Green' },
	{ id: 14, name: 'Bright Green' },
	{ id: 15, name: 'Olive Green' },
	{ id: 16, name: 'Dark Olive Green' },
	{ id: 17, name: 'Bright Yellow' },
	{ id: 18, name: 'Yellow' },
	{ id: 19, name: 'Dark Yellow' },
	{ id: 20, name: 'Light Orange' },
	{ id: 21, name: 'Dark Orange' },
	{ id: 22, name: 'Light Brown' },
	{ id: 23, name: 'Saturated Brown' },
	{ id: 24, name: 'Dark Brown' },
	{ id: 25, name: 'Salmon Pink' },
	{ id: 26, name: 'Bordeaux Red' },
	{ id: 27, name: 'Saturated Red' },
	{ id: 28, name: 'Bright Red' },
	{ id: 29, name: 'Dark Pink' },
	{ id: 30, name: 'Bright Pink' },
	{ id: 31, name: 'Light Pink' },
]

export const COLOR_NAMES = OPENRCT2_COLORS.map((c) => `${c.id}: ${c.name}`)

export const STYLE_PRESETS: StylePreset[] = [
	{
		id: 'cyber_neon',
		name: 'Cyber Neon (Electric Violet & Cyan)',
		description: 'Vibrant violet track with cyan rails and stealth black supports',
		track: { main: 5, additional: 7, supports: 0 },
		vehicle: { body: 7, trim: 5, tertiary: 0 },
		stationStyle: 0,
		guest: { tshirt: 5, hat: 7, balloon: 5, umbrella: 7 },
	},
	{
		id: 'classic_crimson',
		name: 'Classic Crimson (Ruby Red & Gold)',
		description: 'Bold red track with dark wine ties, white trim and gold accents',
		track: { main: 28, additional: 26, supports: 0 },
		vehicle: { body: 28, trim: 2, tertiary: 18 },
		stationStyle: 0,
		guest: { tshirt: 28, hat: 26, balloon: 28, umbrella: 2 },
	},
	{
		id: 'ocean_marine',
		name: 'Ocean Marine (Deep Blue & Aqua)',
		description: 'Deep navy track with bright aqua rails and crisp white supports',
		track: { main: 6, additional: 8, supports: 2 },
		vehicle: { body: 8, trim: 6, tertiary: 2 },
		stationStyle: 0,
		guest: { tshirt: 6, hat: 8, balloon: 8, umbrella: 6 },
	},
	{
		id: 'forest_timber',
		name: 'Forest Timber (Emerald & Wood)',
		description: 'Forest green track with moss ties and dark timber supports',
		track: { main: 12, additional: 13, supports: 24 },
		vehicle: { body: 22, trim: 12, tertiary: 18 },
		stationStyle: 0,
		guest: { tshirt: 12, hat: 22, balloon: 13, umbrella: 12 },
	},
	{
		id: 'sunset_orange',
		name: 'Sunset Sunrise (Amber & Coral)',
		description: 'Radiant dark orange track with sunny yellow rails and crimson supports',
		track: { main: 21, additional: 18, supports: 27 },
		vehicle: { body: 18, trim: 20, tertiary: 28 },
		stationStyle: 0,
		guest: { tshirt: 20, hat: 21, balloon: 18, umbrella: 20 },
	},
	{
		id: 'monochrome_stealth',
		name: 'Monochrome Stealth (Black & Silver)',
		description: 'Matte black track with graphite rails and industrial grey supports',
		track: { main: 0, additional: 1, supports: 1 },
		vehicle: { body: 0, trim: 2, tertiary: 1 },
		stationStyle: 0,
		guest: { tshirt: 0, hat: 1, balloon: 2, umbrella: 0 },
	},
]

export const DEFAULT_SLOTS: CustomSlot[] = [
	{ name: 'Slot 1: Crimson Flame', main: 28, add: 18, sup: 0 },
	{ name: 'Slot 2: Ocean Deep', main: 6, add: 8, sup: 2 },
	{ name: 'Slot 3: Forest Emerald', main: 12, add: 14, sup: 24 },
	{ name: 'Slot 4: Electric Night', main: 5, add: 7, sup: 1 },
	{ name: 'Slot 5: Desert Sunset', main: 21, add: 19, sup: 27 },
	{ name: 'Slot 6: Custom 6', main: 1, add: 2, sup: 0 },
]

export function getRides(): Ride[] {
	try {
		if (typeof map !== 'undefined' && map.rides) {
			return map.rides.filter((r) => r.classification === 'ride')
		}
	} catch (e) {}
	return []
}

export function applyTrackColours(ride: Ride, palette: { track: { main: number; add: number; sup: number } }): void {
	context.executeAction('ridesetappearance', {
		ride: ride.id,
		type: 0,
		value: palette.track.main,
		index: 0,
	}, () => {})
	context.executeAction('ridesetappearance', {
		ride: ride.id,
		type: 1,
		value: palette.track.add,
		index: 0,
	}, () => {})
	context.executeAction('ridesetappearance', {
		ride: ride.id,
		type: 2,
		value: palette.track.sup,
		index: 0,
	}, () => {})
}

export function applyVehicleColours(ride: Ride, palette: { vehicle: { body: number; trim: number; tert: number } }): void {
	const numSchemes = ride.vehicleColours && ride.vehicleColours.length > 0 ? ride.vehicleColours.length : 1
	for (let v = 0; v < numSchemes; v++) {
		context.executeAction('ridesetappearance', {
			ride: ride.id,
			type: 3,
			value: palette.vehicle.body,
			index: v,
		}, () => {})
		context.executeAction('ridesetappearance', {
			ride: ride.id,
			type: 4,
			value: palette.vehicle.trim,
			index: v,
		}, () => {})
		context.executeAction('ridesetappearance', {
			ride: ride.id,
			type: 5,
			value: palette.vehicle.tert,
			index: v,
		}, () => {})
	}
}

export function applyStationStyle(ride: Ride, _palette: any): void {
	context.executeAction('ridesetappearance', {
		ride: ride.id,
		type: 7,
		value: 0,
		index: 0,
	}, () => {})
}
