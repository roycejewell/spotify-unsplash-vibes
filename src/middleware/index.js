import { Router } from 'express';

export default ({ config, db }) => {
	let routes = Router();

	// add middleware here
	// auth, rerouting, errors, etc

	return routes;
}
