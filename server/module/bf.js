var requestUrl = "https://api.bitflyer.jp/v1/getticker/?product_code=BTC_JPY";
var interval = 8000;
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
				io.emit('bf', response.body);
			}
		})
	};
	
	//requestしてemitする
	var requestLoop = setInterval(function() {
		getter();
	}, interval);
	
	getter();
};