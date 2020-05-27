var ns = ns || {};
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    WebOs: function() {
        return navigator.userAgent.match(/WebOs/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.WebOs() || isMobile.Windows());
    }
};

ns = {
	
    init : function(){
		if(!ns.isMobile){}	
		
		wW = $(window).width();
		wH = $(window).height();
		
		
		$('body').on('click', '.mobile-menu', function(e){
			e.preventDefault();
			$('#header').addClass('active');
		})
		
		$('body').on('click', '.services-menu', function(e){
			e.preventDefault();
			$('#header').addClass('active');
		})
		
		
		$('body').on('click', '.ico', function(e){
			e.preventDefault();
			$('#header').removeClass('active');
		})
		
		
		$('body').on('click', '.open-modal', function(e){
			e.preventDefault();
			$('.lightbox-wrapper').css({'display':'block'})
			$('.slide').css({'filter':'blur(3px)'})
		})
		
		$('.lightbox-wrapper').on('click', '.ico', function(e){
			e.preventDefault();
			$('.lightbox-wrapper').removeAttr('style');
			$('.slide').removeAttr('style');
		})

		$('body').on('click', '.open-popup', function(e){
			e.preventDefault();
			$('.sok-tips-popup').css({'display':'block'})
		})

		$('.popup-close').on('click', function(e){
			e.preventDefault();
			$('.sok-tips-popup').css({'display':'none'})
			
		})
		 
		
		
		
    },
	resize : function(){
		wW = $(window).width();
		wH = $(window).height();
	}
};

$(function(){
	
	var wW;
    var wH;
	
	function setImgCssBottom(){
		if($('.img-right').length>0)
		{
			var imgHeight = $('.img-right .item-img').children('img').height();
			$('.img-right .item-img').children('img').css({'bottom':-(imgHeight/2)})
			$('.img-right').css({'marginBottom':(imgHeight/2)})
		}
	}
	
	
	/*=================================================================
		LOADING
	==================================================================*/
	Pace.on('done', function() {
		$('#wrapper').removeClass('displayNone');
		ns.init();
	});	

	$(window).on("resize", function () {
		ns.resize();
	});

	$(window).on("load", function () { 
		
	});
	

	
}); //ready