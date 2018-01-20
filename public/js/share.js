var pv = {
	//ms 更新間隔
	interval : 5000,
	//API
	api : {
		zaif : {
			btc : 'wss://ws.zaif.jp:8888/stream?currency_pair=btc_jpy',
			xem : 'wss://ws.zaif.jp:8888/stream?currency_pair=xem_jpy',
			mona : 'wss://ws.zaif.jp:8888/stream?currency_pair=mona_jpy',
			bch : 'wss://ws.zaif.jp:8888/stream?currency_pair=bch_jpy',
			eth : 'wss://ws.zaif.jp:8888/stream?currency_pair=eth_jpy'
		},
		cc : 'php/cc.php',
		bf : {
			btc : 'php/bf.php',
			mona: 'php/bf_mona.php'
		}
	},
	
	//Utility
	util : {
		round : function (num){
		  return Math.round(num * 1000) / 1000;  
		},
		toNumeric : function (num){
		  return Math.round(num);  
		},
		format : function (nStr){
			nStr += '';
			var x = nStr.split('.');
			var x1 = x[0];
			var x2 = x.length > 1 ? '.' + x[1] : '';
			var rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ',' + '$2');
			}
			return x1 + x2;
		},
		set : function ($el,val,side){
			var text = $el.text();
			var formated = pv.util.format(val);
			
			if(text != formated) {
				$el.text(formated).fadeOut(100).fadeIn(100);
			}
		}
	}
};

$(function(){
	function update() {
  $('#clock').html(moment().format('YYYY/MM/DD H:mm:ss'));
}

setInterval(update, 1000);
});