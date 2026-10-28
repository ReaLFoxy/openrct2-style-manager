import { store, type WritableStore } from 'openrct2-flexui'

const STYLE_STATE_NAMESPACE = 'styleManager.values'

export interface StyleManagerState {
	activePresetId: string
	targetRideIndex: number
	applyTrack: boolean
	applyVehicle: boolean
	applyStation: boolean
	applyGuests: boolean
	targetAllRides: boolean
}

export const styleStore: WritableStore<StyleManagerState> = store({
	activePresetId: 'cyber_neon',
	targetRideIndex: 0,
	applyTrack: true,
	applyVehicle: true,
	applyStation: false,
	applyGuests: true,
	targetAllRides: false,
	...context.getParkStorage().get<Partial<StyleManagerState>>(STYLE_STATE_NAMESPACE),
})

export function setAndPersistStyleState(patch: Partial<StyleManagerState>) {
	const current = styleStore.get()
	const updated = { ...current, ...patch }
	styleStore.set(updated)
	context.getParkStorage().set(STYLE_STATE_NAMESPACE, {
		activePresetId: updated.activePresetId,
		targetRideIndex: updated.targetRideIndex,
		applyTrack: updated.applyTrack,
		applyVehicle: updated.applyVehicle,
		applyStation: updated.applyStation,
		applyGuests: updated.applyGuests,
		targetAllRides: updated.targetAllRides,
	})
}
