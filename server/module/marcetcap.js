var requestUrl = "https://api.coinmarketcap.com/v1/ticker/?convert=JPY";
var interval = 30000;
var request = require('request');

exports.subscribe = function(io) {
	
	var getter = function(){
		request({
			url: requestUrl,
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				io.emit('coinmarketcap', response.body);
			}
		})
	};
	
	//requestしてemitする
	var requestLoop = setInterval(function() {
		getter();
	}, interval);
	
	getter();
};