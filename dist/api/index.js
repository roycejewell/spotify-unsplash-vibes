'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _package = require('../../package.json');

var _express = require('express');

var _spotifyNodeApplescript = require('spotify-node-applescript');

var _spotifyNodeApplescript2 = _interopRequireDefault(_spotifyNodeApplescript);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
	var config = _ref.config,
	    db = _ref.db;

	var api = (0, _express.Router)();

	api.get('/play', function (req, res) {
		_spotifyNodeApplescript2.default.playTrack('spotify:track:6PgVDY8GTkxF3GmhVGPzoB', function () {
			res.json({ song: 'Hold on, Im Comin', artist: 'Sam & Dave' });
		});
	});

	return api;
};
//# sourceMappingURL=index.js.map