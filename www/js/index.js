/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





$(document).ready(function(){          
 $.jsonp({
     url: 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds',
     callbackParameter: 'callback',
     success: function(data, status) {
         console.log(data);
         $('#items').append('<p>The feed loads fine');
         $.each(data.response.listings, function(i,item){
             var title = item.title;
             var thumb_url = item.thumb_url;
             var price_formatted = item.price_formatted;
             $('#items').append('<div class="outer"><div class="item-image"><img src="' + thumb_url + '" class="thumb"></div><div class="item-desc"><p>' + title + '</p><p>' + price_formatted + '</p></div></div>');
         });
     },
     error: function(){
         $('#items').append('<p>There was an error loading the feed');
     }
 });

 $(".to-item-info").click(function(){
    $('#body2').fadeIn(); 
    $('#body1').fadeOut();
 });

 $(".to-list").click(function(){
    $('#body1').fadeIn(); 
    $('#body2').fadeOut();
 });
});


