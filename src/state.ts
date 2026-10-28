import { store, type WritableStore } from 'openrct2-flexui'
import { DEFAULT_SLOTS, type CustomSlot } from './styles'

const STYLE_STATE_NAMESPACE = 'styleManager.values'

export interface StyleManagerState {
	activePresetId: string
	rides: Ride[]
	targetRideIndex: number
	// Custom Palette Mode Settings
	useCustomPalette: boolean
	selectedSlotIndex: number
	customSlots: CustomSlot[]
	customMain: number
	customAdd: number
	customSup: number
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
	useCustomPalette: false,
	selectedSlotIndex: 0,
	customSlots: DEFAULT_SLOTS,
	customMain: 28,
	customAdd: 18,
	customSup: 0,
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
				useCustomPalette: updated.useCustomPalette,
				selectedSlotIndex: updated.selectedSlotIndex,
				customSlots: updated.customSlots,
				customMain: updated.customMain,
				customAdd: updated.customAdd,
				customSup: updated.customSup,
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
