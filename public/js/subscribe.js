/* global socket , $ ,pv */

socket.on('coinmarketcap', function(data) {
	var data = JSON.parse(data);
	//marcetcap
	$.each(data, function() {
		var cl = '.' + this.symbol.toLowerCase() + "_cm";
		var bidAsk = this.percent_change_24h > 0 ? 'bid' : 'ask';
		$(cl).removeClass('bid ask').addClass(bidAsk).text(this.percent_change_24h + '%');
	});
});

socket.on('cc_btc', function(data) {
	var data = JSON.parse(data);
	var $el = $('#btc_cc');
	pv.util.set($el,pv.util.toNumeric(data.rate));
});
socket.on('cc_eth', function(data) {
	var data = JSON.parse(data);
	var $el = $('#eth_cc');
	pv.util.set($el,pv.util.toNumeric(data.rate));
});
socket.on('cc_bch', function(data) {
	var data = JSON.parse(data);
	var $el = $('#bch_cc');
	pv.util.set($el,pv.util.toNumeric(data.rate));
});
socket.on('cc_mona', function(data) {
	var data = JSON.parse(data);
	var $el = $('#mona_cc');
	pv.util.set($el,pv.util.round(data.rate));
});
socket.on('cc_xem', function(data) {
	var data = JSON.parse(data);
	var $el = $('#xem_cc');
	pv.util.set($el,pv.util.round(data.rate));
});
socket.on('cc_xrp', function(data) {
	var data = JSON.parse(data);
	var $el = $('#xrp_cc');
	pv.util.set($el,pv.util.round(data.rate));
});


socket.on('bf', function(data) {
	var data = JSON.parse(data);
	var $el = $('#btc_bf');
	pv.util.set($el,pv.util.round(data.ltp));
});