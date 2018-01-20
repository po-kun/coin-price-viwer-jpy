exports.subscribe = function(io) {
	
	var requestUrl = "https://api.coinmarketcap.com/v1/ticker/?convert=JPY";
	var interval = 10000;
	var request = require('request');
	var current = 0;
	
	var getter = function(){
		
		console.log('coinmarketcap','calling');
		
		request({
			url: requestUrl,
			method: "GET",
			timeout: 10000,
			followRedirect: true,
			maxRedirects: 10
		}, function(error, response, body) {
			if (!error && response.statusCode == 200) {
				current = response.body;
				io.emit('coinmarketcap', response.body);
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
		console.log('connected');
		io.emit('coinmarketcap', current);
	});
};