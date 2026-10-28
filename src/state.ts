import { store, type WritableStore } from 'openrct2-flexui'

const STYLE_STATE_NAMESPACE = 'styleManager.values'

export interface StyleManagerState {
	activePresetId: string
	rides: Ride[]
	targetRideIndex: number
	// Park-Wide Batch Settings
	globalTrack: boolean
	globalVehicle: boolean
	globalStation: boolean
	globalGuests: boolean
	// Individual Ride Settings
	singleTrack: boolean
	singleVehicle: boolean
}

export const styleStore: WritableStore<StyleManagerState> = store({
	activePresetId: 'cyber_neon',
	rides: [],
	targetRideIndex: 0,
	globalTrack: true,
	globalVehicle: true,
	globalStation: false,
	globalGuests: true,
	singleTrack: true,
	singleVehicle: true,
	...context.getParkStorage().get<Partial<StyleManagerState>>(STYLE_STATE_NAMESPACE),
})

export function setAndPersistStyleState(patch: Partial<StyleManagerState>) {
	const current = styleStore.get()
	const updated = { ...current, ...patch }
	styleStore.set(updated)
	try {
		if (typeof context !== 'undefined' && context.getParkStorage) {
			context.getParkStorage().set(STYLE_STATE_NAMESPACE, {
				activePresetId: updated.activePresetId,
				targetRideIndex: updated.targetRideIndex,
				globalTrack: updated.globalTrack,
				globalVehicle: updated.globalVehicle,
				globalStation: updated.globalStation,
				globalGuests: updated.globalGuests,
				singleTrack: updated.singleTrack,
				singleVehicle: updated.singleVehicle,
			})
		}
	} catch (e) {}
}
