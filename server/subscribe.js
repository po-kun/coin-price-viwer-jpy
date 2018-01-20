const cc = require('./module/cc');
const bf = require('./module/bf');
const marcetcap = require('./module/marcetcap');

exports.subscribe = function(io) {
	marcetcap.subscribe(io);
	cc.subscribe(io);
	bf.subscribe(io);
};