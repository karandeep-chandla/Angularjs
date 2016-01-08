
'use strict';

angular.module('kenticoApp').factory('workKentico', function($timeout, $http) {
    var worklist = {
        works: function() {
            return $timeout(function() {
                return WOR
            }, 30);
        }
    }

    return worklist;
});

var WOR ={
            works :[
                {heading: "Realtor Services", img:'/images/realtor.jpg'},
                {heading: "Gifts for Him & Her", img:'/images/gift.jpg'},
                {heading: "Logistics", img:'/images/logistics.jpg'},
                {heading: "DreamVilla Properties", img:'/images/dreamvilla.jpg'},
                {heading: "Luxor", img:'/images/luxor.jpg'},
                {heading: "Rentio", img:'/images/rentio.jpg'},
                {heading: "Nomas", img:'/images/nomas.jpg'},
                {heading: "Marinas", img:'/images/marinas.jpg'},
                {heading: "Intensy", img:'/images/intensy.jpg'},
            ],
            work_ban: {heading: "Work", text: "Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."}
                   
        }

