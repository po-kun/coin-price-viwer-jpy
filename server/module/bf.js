exports.subscribe = function(io) {
	var requestUrl = "https://api.bitflyer.jp/v1/getticker/?product_code=BTC_JPY";
	var interval = 5000;
	var request = require('request');
	var bf = null;
	
	var getter = function(){
		
		console.log('bf','calling');
		
		request({
			url: requestUrl,
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				bf = response.body;
				io.emit('bf', response.body);
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
		io.emit('bf', bf);
	});
};