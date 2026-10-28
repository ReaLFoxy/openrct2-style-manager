import { store, type WritableStore } from 'openrct2-flexui'

const STYLE_STATE_NAMESPACE = 'styleManager.values'

export interface StylePreset {
	id: string
	name: string
	description?: string
	trackColourMain?: number
	trackColourAdditional?: number
	trackColourSupports?: number
	vehicleColourBody?: number
	vehicleColourTrim?: number
	vehicleColourTertiary?: number
}

export interface StyleManagerState {
	selectedTab: number
	activePreset: string
	targetRideIndex: number
	autoApplyNewRides: boolean
}

export const styleStore: WritableStore<StyleManagerState> = store({
	selectedTab: 0,
	activePreset: 'default',
	targetRideIndex: 0,
	autoApplyNewRides: false,
	...context.getParkStorage().get<Partial<StyleManagerState>>(STYLE_STATE_NAMESPACE),
})

export function setAndPersistStyleState(newData: Partial<StyleManagerState>) {
	const updated = {
		...styleStore.get(),
		...newData,
	}
	styleStore.set(updated)
	context.getParkStorage().set(STYLE_STATE_NAMESPACE, updated)
}
