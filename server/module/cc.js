exports.subscribe = function(io) {
	var interval = 5000;
	var request = require('request');
	var btc = null;
	var bch = null;
	var xem = null;
	var xrp = null;
	var eth = null;
	
	var getter = function(){
		
		console.log('coincheck','calling');
		request({
			url: 'https://coincheck.com/api/rate/btc_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				btc = response.body;
				io.emit('cc_btc', response.body);
			}
		})
		
		request({
			url: 'https://coincheck.com/api/rate/bch_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				bch = response.body;
				io.emit('cc_bch', response.body);
			}
		})
		
		request({
			url: 'https://coincheck.com/api/rate/eth_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				eth = response.body;
				io.emit('cc_eth', response.body);
			}
		})
		
		request({
			url: 'https://coincheck.com/api/rate/xrp_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				xrp = response.body;
				io.emit('cc_xrp', response.body);
			}
		})
		
		request({
			url: 'https://coincheck.com/api/rate/xem_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				xem = response.body;
				io.emit('cc_xem', response.body);
			}
		})
	};
	
	//requestしてemitする
	var requestLoop = setInterval(function() {
		getter();
	}, interval);
	
	getter();
	
	//Socket接続
	io.on('connection', (socket) => {
		
		console.log('init cc');
		
		io.emit('cc_btc', btc);
		io.emit('cc_bch', bch);
		io.emit('cc_eth', eth);
		io.emit('cc_xrp', xrp);
		io.emit('cc_xem', xem);
	});
};