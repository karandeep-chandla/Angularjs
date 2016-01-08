
'use strict';

angular.module('kenticoApp').factory('whyKentico', function($timeout) {
    var solution = {
        power: function() {
            return $timeout(function() {
                return SOL
            }, 30);
        }
    }

    return solution;
});

var SOL ={
			ken_ban :{heading: "Why Kentico", text:"Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."},
            pow_hdg :{heading: "Powerful integrated marketing solution"},
			pows :[
                {heading: "Web Content Management", text:"Free time, talent, and resources for what matters! The Kentico Web Content Management solution, not only cuts your development time in half by delivering much more easy-to-use, ready-to-go sophistication than any other vendor, but is the rock-solid, affordable choice for businesses of all size.", img:"/images/management-banner.png", listCont: ["Ready in half the time", "Right-first-time technology", "Plug-and-play success"]},
                {heading: "E-commerce", text:"No specification too high or deadline too tight! The Kentico E-commerce solution is your fast track to sophisticated online stores that are easy to manage and wow customers.  With dozens of proven plug-and-play components, you can focus on brilliant configuration and customization, not", img:"/images/ecommerce-banner.png", listCont: ["Focus on sales, not technology", "Amazon-style smartness", "Make every project pay"]},
                {heading: "Online Marketing", text:"Get out the big boys' toys! The Kentico Online Marketing solution enables digital marketing success without the headaches or costs of integration. With all tools in one solution, not only can you manage complex multi-channel marketing with ease, but you get a 360&deg; view of customers in one single customer profile. Show the big boys how it's really done!", img:"/images/marketing-banner.png", listCont: ["Fully integrated", "Smart marketing - simplified", "Powerfully profitable"]},
                {heading: "Online Communities", text:"Have a heart?  Kentico's Online Communities solution delivers every sophisticated tool you need to create, manage and socially integrate communities that drive qualified traffic, bring unique customer insights, and encourage conversation about your brand. It's the rock-solid answer to keeping the heart of your community healthy.", img:"/images/communities-banner.png", listCont: ["Have a heart?", "Kentico simplicity", "Plug-and-play success"]},
            ]
           

            

		 
		 }		






