/* for Zaif */
/* global $,pv,socket */

$(function(){
	
	//btc_jpy
	const btc_jpy = new WebSocket(pv.api.zaif.btc);
	btc_jpy.addEventListener('message', function (event) {
		var $el = $('#btc_zaif');
		var data = JSON.parse(event.data);
		pv.util.set($el,pv.util.round(data.last_price.price));
	});
	
	//btc_jpy
	const mona = new WebSocket(pv.api.zaif.mona);
	mona.addEventListener('message', function (event) {
		var $el = $('#mona_zaif');
		var data = JSON.parse(event.data);
		pv.util.set($el,pv.util.round(data.last_price.price));
	});
	
	//xem
	const xem = new WebSocket(pv.api.zaif.xem);
	xem.addEventListener('message', function (event) {
		var $el = $('#xem_zaif');
		var data = JSON.parse(event.data);
		pv.util.set($el,pv.util.round(data.last_price.price));
	});
	
	//BCH
	const bch = new WebSocket(pv.api.zaif.bch);
	bch.addEventListener('message', function (event) {
		var $el = $('#bch_zaif');
		var data = JSON.parse(event.data);
		pv.util.set($el,pv.util.round(data.last_price.price));
	});
	
	//ETH
	const eth = new WebSocket(pv.api.zaif.eth);
	eth.addEventListener('message', function (event) {
		var $el = $('#eth_zaif');
		var data = JSON.parse(event.data);
		pv.util.set($el,pv.util.round(data.last_price.price));
	});
});