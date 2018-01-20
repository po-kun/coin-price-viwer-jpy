/* global PubNub , pubnub , $ */

function publish() {
   
	pubnub = new PubNub({
		publishKey : 'demo',
		subscribeKey : 'sub-c-e12e9174-dd60-11e6-806b-02ee2ddab7fe'
	})
	   
	function publishSampleMessage() {
		console.log("Since we're publishing on subscribe connectEvent, we're sure we'll receive the following publish.");
		var publishConfig = {
			channel : "hello_world",
			message : "Hello from PubNub Docs!"
		}
		pubnub.publish(publishConfig, function(status, response) {
			console.log(status, response);
		})
	}
	   
	pubnub.addListener({   
		message: function(m) {
			// handle message
			var actualChannel = m.actualChannel;
			var channelName = m.channel; // The channel for which the message belongs
			var msg = m.message; // The Payload
			var publisher = m.publisher;
			var subscribedChannel = m.subscribedChannel;
			var channelGroup = m.subscription; // The channel group or wildcard subscription match (if exists)
			var pubTT = m.timetoken; // Publish timetoken       
			
			
			//BTC
			if(subscribedChannel == 'ticker_btc_jpy') {
				$('#btc_bb').text(pv.util.format(msg.data.last));
			}
			
			//XRP
			if(subscribedChannel == 'ticker_xrp_jpy') {
				$('#xrp_bb').text(pv.util.format(msg.data.last));
			}
			
			//MONA
			if(subscribedChannel == 'ticker_mona_jpy') {
				$('#mona_bb').text(pv.util.format(msg.data.last));
			}
			
			//BCH
			if(subscribedChannel == 'ticker_bcc_jpy') {
				$('#bch_bb').text(pv.util.format(msg.data.last));
			}
			
		},
		presence: function(p) {
			// handle presence
			var action = p.action; // Can be join, leave, state-change or timeout
			var channelName = p.channel; // The channel for which the message belongs
			var channelGroup = p.subscription; //  The channel group or wildcard subscription match (if exists)
			var presenceEventTime = p.timestamp; // Presence event timetoken
			var status = p.status; // 200
			var message = p.message; // OK
			var service = p.service; // service
			var uuids = p.uuids;  // UUIDs of users who are connected with the channel with their state
			var occupancy = p.occupancy; // No. of users connected with the channel
		},
		status: function(s) {
			// handle status
			var category = s.category; // PNConnectedCategory
			var operation = s.operation; // PNSubscribeOperation
			var affectedChannels = s.affectedChannels; // The channels affected in the operation, of type array.
			var subscribedChannels = s.subscribedChannels; // All the current subscribed channels, of type array.
			var affectedChannelGroups = s.affectedChannelGroups; // The channel groups affected in the operation, of type array.
			var lastTimetoken = s.lastTimetoken; // The last timetoken used in the subscribe request, of type long.
			var currentTimetoken = s.currentTimetoken; // The current timetoken fetched in the subscribe response, which is going to be used in the next request, of type long.
		}
	});  
	
	console.log("Subscribing..");
	
	pubnub.subscribe({
		channels: [
			'ticker_xrp_jpy',
			'ticker_btc_jpy',
			'ticker_mona_jpy',
			'ticker_bcc_jpy'
		] 
	});
};

$(function(){
	publish();
});