import { version } from '../../package.json';
import { Router } from 'express';
import spotify from 'spotify-node-applescript';

export default ({ config, db }) => {
	let api = Router();

	api.get('/play', (req, res) => {
		spotify.playTrack('spotify:track:47nvHdLEk5UkT8q7nvfPS6', () => {
			res.send('Playing Spotify!');
		});
	});

	return api;
}
