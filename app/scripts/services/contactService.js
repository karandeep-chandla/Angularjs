
'use strict';

angular.module('kenticoApp').factory('getKentico', function($timeout) {
    var Contact = {
        touch: function() {
            return $timeout(function() {
                return GETTOUCH
            }, 30);
        }
    }

    return Contact;
});

var GETTOUCH ={
			touch: {heading: "Contact Us", text: "Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."},
		 	hear: {heading: "We'd love to hear from you"}
		 }		

