var interval = 8000;
var request = require('request');
exports.subscribe = function(io) {
	
	var getter = function(){
		request({
			url: 'https://coincheck.com/api/rate/btc_jpy',
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
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
				io.emit('cc_xem', response.body);
			}
		})
	};
	
	//requestしてemitする
	var requestLoop = setInterval(function() {
		getter();
	}, interval);
	
	getter();
};