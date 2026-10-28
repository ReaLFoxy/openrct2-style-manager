/// <reference path="../lib/openrct2.d.ts" />

import { startup } from './startup'

registerPlugin({
	name: 'StyleManager',
	version: '0.1.0',
	authors: ['ReaLFoxy', 'Google Gemini 3.8 Flash (High)'],
	type: 'local',
	licence: 'MIT',
	targetApiVersion: 111,
	main: startup,
})
