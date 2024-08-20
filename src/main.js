import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import CollectingStarsScene from './scenes/CollectingStarsScene';

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 1920,
	height: 1080,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [CollectingStarsScene],
}

export default new Phaser.Game(config)
