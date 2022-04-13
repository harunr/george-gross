
(function($){
	$(function(){

        // Phone nav click function
        $('.phone-nav').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").slideToggle();
        });

        // Sticky Header
        $(window).scroll(function() {
            if ($(this).scrollTop() > 120){  
                $('header').addClass("sticky");
            }
            else{
                $('header').removeClass("sticky");
            }
        });
        
        $('.blog-item, .editing-item, .blog-item').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: true
        });
        
	})// End ready function.
   
})(jQuery)

