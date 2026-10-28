import { mainWindow } from './view'

export function startup() {
	if (typeof ui !== 'undefined') {
		ui.registerMenuItem('Style Manager', () => {
			mainWindow.open()
		})
	}
}
