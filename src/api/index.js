import { version } from '../../package.json';
import { Router } from 'express';
import spotify from 'spotify-node-applescript';

export default ({ config, db }) => {
	let api = Router();

	api.get('/play', (req, res) => {
		spotify.playTrack('spotify:track:6PgVDY8GTkxF3GmhVGPzoB', () => {
			res.json({song: 'Hold on, Im Comin', artist: 'Sam & Dave'});
		})
	});

	return api;
}
