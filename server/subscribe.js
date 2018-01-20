const cc = require('./module/cc');
const bf = require('./module/bf');
const marcetcap = require('./module/ccm');

exports.subscribe = function(io) {
	marcetcap.subscribe(io);
	cc.subscribe(io);
	bf.subscribe(io);
};