
'use strict';

angular.module('kenticoApp').factory('whyusKentico', function($timeout) {
    var solution = {
        us: function() {
            return $timeout(function() {
                return WHYUS
            }, 30);
        }
    }

    return solution;
});

var WHYUS ={
			why_hdg :{heading: "We have been working with Kentico since 2008"},
			whys :[
                {heading: "We're Experts", text:"We have been working with Kentico since 2008 and we've built more than 200 websites on the platform. This wealth of experience has meant that we've come across almost every challenging component of Kentico, we've worked with almost every module, and we've developed a unique process for Kentico development that you won't find anywhere else.", text2:"We're proud of our long and successful relationship with Kentico. We're also proud to be the leading Kentico agency in Asia-Pacific and be well-respected globally within the Kentico community.", img:'/images/expert-banner.png'},
                {heading: "Development &amp; Integration", text:"The Development &amp; Integration competency highlights our experience integrating Kentico with other business systems such as CRM systems like Salesforce, and email marketing systems like Mailchimp and Campaign Monitor. We've also integrated Kentico with custom product database systems and document management systems like Trim. ", img:'/images/integration-banner.png'},
                {heading: "Intranets", text:"The Kentico Intranet solution provides a compelling alternative to the bloatware that is Microsoft Sharepoint. We have successfully delivered Intranets to organisations that are intuitive, easy-to-update and inviting for end users. We have also advised organisations on the strategy and cultural engagement of Intranets.", img:'/images/intranet-banner.png'},
                {heading: "Ecommerce", text:"Our team have extensive experience in customising Kentico to meet the ecommerce requirements of our clients. Kentico has recognised this experience with the Ecommerce competency.  We have integrated 3rd party payment gateway solutions including eWay, SecurePay and PayPal.", img:'/images/ecommerce-banner2.png'},
            ],
            why_ban: {heading: "Why Us", text: "Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."}
		 
		 }		






