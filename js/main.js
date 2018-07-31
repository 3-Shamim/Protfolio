$(document).ready(function () {

    particlesJS.load('home', 'particles.json', function () {})

    var options = {
        strings: ["I'm Shamim.", "I'm developer."],
        typeSpeed: 50,
        backSpeed: 0,
        smartBackspace: false,
        cursorChar: '',
        loop: true
    }

    var typed = new Typed("#typing-text", options);

    /*--------------- Get Value For Active Nav ----------*/
    var activeLi = $(".myNavbar ul li a")
    var section = $(".section");
    var navH = $("#myNav").height();
    /*--------------- Nav Sticy ----------------*/
    if ($(document).scrollTop() > 50) {
        $("#myNav").addClass("navBarStiky");
    }

    $(document).scroll(function () {

        var scrollPoint = $(document).scrollTop();

        if (scrollPoint > 50) {
            $("#myNav").addClass("navBarStiky");
        } else {
            $("#myNav").removeClass("navBarStiky");
        }

        /*----------- Slide To Top Show ----------*/
        if (scrollPoint > 200) {
            $(".slide-to-top").css({
                'bottom': '20px'
            });
        } else {
            $(".slide-to-top").removeAttr("style");
        }

        /*--------- Nav Active ------------*/

        section.each(function () {
            var self = $(this);
            
            if ((self.offset().top < (scrollPoint + navH)) && (scrollPoint < (self.offset().top + self.outerHeight()))) {
                var targetId = "#" + self.attr("id") + "-link";
                
                activeLi.removeClass("active");
                $(targetId).addClass("active");
            }

        });
    });
    

    
    
    /*------------- Smooth Scroll ----------*/
    
    var homeOffset = $("#home").offset().top;
    var aboutUsOffset = $("#about-us").offset().top;
    var serviceOffset = $("#services").offset().top;
    var protfolioOffset = $("#protfolio").offset().top;
    var contactOffset = $("#contact").offset().top;

    $("#home-link").click(function () {
        $("html").stop().animate({
            scrollTop: homeOffset
        }, 1000);
        return false;
    });
    $("#about-us-link").click(function () {
        $("html").stop().animate({
            scrollTop: aboutUsOffset
        }, 1000);
        return false;
    });
    $("#services-link").click(function () {
        $("html").stop().animate({
            scrollTop: serviceOffset
        }, 1000);
        return false;
    });
    $("#protfolio-link").click(function () {
        $("html").stop().animate({
            scrollTop: protfolioOffset
        }, 1000);
        return false;
    });
    $("#contact-link").click(function () {
        $("html").stop().animate({
            scrollTop: contactOffset
        }, 1000);
        return false;
    });

    /*----------- Slide To Top ----------*/
    $(".slide-to-top").click(function () {
        $("html").stop().animate({
            scrollTop: 0
        }, 1000);
        return false;
    });





});
