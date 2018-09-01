/*jslint browser: true*/
/*global $, window*/

$(function () {
    // Adjust Slider Height...
    'use strict';
    $(function () {
    // Adjust Slider Height...
    
        var winH   =    $(window).height(),
            UpprH  =    $('.upper-bar').innerHeight(),
            navH   =    $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(winH - (UpprH + navH));
    
    // Resize Slider With Any Move!....
        $(window).resize(function () {
        
            var winH   =    $(window).height(),
                UpprH  =    $('.upper-bar').innerHeight(),
                navH   =    $('.navbar').innerHeight();
            $('.slider, .carousel-item').height(winH - (UpprH + navH));
        
        });
    
    // Start Shuffel
    
        $('.featured-work ul li').on('click', function () {
       
            $(this).addClass('active').siblings().removeClass('active');
        
            if ($(this).data('class') === 'all') {
           
                $('.shuffle-images .col-md').css('opacity', 1);
           
            } else {
            
                $('.shuffle-images .col-md').css('opacity', '.08');
            
                $($(this).data('class')).parent().css('opacity', 1);
            }
        
        });
    
    });
    
    var winH   =    $(window).height(),
        UpprH  =    $('.upper-bar').innerHeight(),
        navH   =    $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - (UpprH + navH));
    
    // Resize Slider With Any Move!....
    $(window).resize(function () {
        
        var winH   =    $(window).height(),
            UpprH  =    $('.upper-bar').innerHeight(),
            navH   =    $('.navbar').innerHeight();
        $('.slider, .carousel-item').height(winH - (UpprH + navH));
        
    });
    
    // Start Shuffel
    
    $('.featured-work ul li').on('click', function () {
       
        $(this).addClass('active').siblings().removeClass('active');
        
        if ($(this).data('class') === 'all') {
           
            $('.shuffle-images .col-md').css('opacity', 1);
           
        } else {
            
            $('.shuffle-images .col-md').css('opacity', '.08');
            
            $($(this).data('class')).parent().css('opacity', 1);
        }
        
    });
    
    // Start Using Nicescroll Plug....
    $("body").niceScroll({
        cursorcolor: "#08526d",
        cursorwidth: "10px"
    });
    
});