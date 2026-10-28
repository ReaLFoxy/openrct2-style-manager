import { styleWindow } from './view'

export function startup() {
	if (typeof ui !== 'undefined') {
		ui.registerMenuItem('Style Manager', () => {
			styleWindow.open()
		})
	}
}
