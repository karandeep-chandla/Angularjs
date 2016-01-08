
'use strict';

angular.module('kenticoApp').factory('Kentico', function($timeout, $http) {
    var Webtest = {
        advs: function() {
            return $timeout(function() {
                return KADV
            }, 30);
        }
    }

    return Webtest;
});

var KADV ={
            advs :[
                {heading: "Web Content Management", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/web-icon.svg'},
                {heading: "E-commerce", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/ecommerce-icon.svg'},
                {heading: "Online Marketing", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/marketing-icon.svg'},
                {heading: "Online Communities", text:"Praesent dapibus, neque id curs us faucibus, tortor neque egestas augue, eu vulputate magn", img:'/images/communities-icon.svg'}
            ],
            k_why: [
                    {heading: "Development & Integration", text:"The Development &amp; Integration competency highlights our experience integrating Kentico with other business systems such as CRM systems like...", img:'/images/integration-icon.svg'},
                    {heading: "Intranets", text:"The Kentico Intranet solution provides a compelling alternative to the bloatware that is Microsoft Sharepoint. We have successfully delivered Intranets...", img:'/images/intranets.svg'}
            ],
            expert: {heading: "We're Experts", text:"We have been working with Kentico since 2008 and we've built more than 200 websites on the platform. This wealth of experience has meant that we've come across almost every challenging component of Kentico, we've worked with almost every module", img:'/images/experts.svg'},
            k_pro : [
                    {heading: "Ecommerce", text:"Our team have extensive experience in customising Kentico to meet the ecommerce requirements of our clients. Kentico has recognised...", img:'/images/commerce-icon.svg'},
                    {heading: "Project Delivered", text:"We've built more than 200 websites on the platform. This wealth of experience has meant that we've come across almost every challenging...", img:'/images/project-icon.svg'}
            ],  
            k_hdg: {heading: "Why Kentico", text:"Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."},
            expert_hdg: {heading: "Why Us", text:"We have been working with Kentico since 2008 and we've built more than 200 websites on the platform."},
            test_hdg: {heading: "Testimonials", text:"Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."},
            touch_hdg: {heading: "Get in Touch", text:"Donec odio uisque volutpat mattis eros ullam malesuada erat ut turpis."},
            home_main: {heading: "CMS, E-commerce, and Online Marketing platform", img:'/images/kentico-logo.png'},
            slides : [
                    { src: "./images/testimonial-user.jpg", alt: "image 1", username: "Rosslyn Tebbutt", userProfile: "Founder, SampleBoard", slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"},
                    { src: "./images/testimonial-user.jpg", alt: "image 2", username: "Rosslyn Tebbutt", userProfile: "Founder, SampleBoard", slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"},
                    { src: "./images/testimonial-user.jpg", alt: "image 3", username: "Rosslyn Tebbutt", userProfile: "Founder, SampleBoard", slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it! They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!"},
                    { src: "./images/testimonial-user.jpg", alt: "image 4", username: "Rosslyn Tebbutt", userProfile: "Founder, SampleBoard", slideContent: "They were able to create exactly what we wanted and were willing to think outside the box. We wanted something different and they produced it!" }
            ]      
        }

