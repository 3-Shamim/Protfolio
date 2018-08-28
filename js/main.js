$(document).ready(function () {

    /*------------ Particles Js ------------*/
    particlesJS.load('home-particles', 'particles.json', function () {});

    /*----------- Typed Js --------*/
    var options = {
        strings: ["I'm Shamim.", "I'm developer."],
        typeSpeed: 50,
        backSpeed: 0,
        smartBackspace: false,
        cursorChar: '',
        loop: true
    }

    var typed = new Typed("#typing-text", options);

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

        var activeLi = $(".myNavbar ul li a")
        var section = $(".section");
        var navH = $("#myNav").height();

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

    /*--- Never Use Like This ----*/
    /*    var homeOffset = $("#home").offset().top;
        var aboutUsOffset = $("#about-us").offset().top;
        var serviceOffset = $("#services").offset().top;
        var protfolioOffset = $("#protfolio").offset().top;
        var contactOffset = $("#contact").offset().top;*/

    $("#home-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#home").offset().top
        }, 1000);
        return false;
    });
    $("#about-us-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#about-us").offset().top
        }, 1000);
        return false;
    });
    $("#services-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#services").offset().top
        }, 1000);
        return false;
    });
    $("#protfolio-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#protfolio").offset().top
        }, 1000);
        return false;
    });
    $("#blog-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#blog").offset().top
        }, 1000);
        return false;
    });
    $("#contact-link").click(function () {
        $("html").stop().animate({
            scrollTop: $("#contact").offset().top
        }, 1000);
        return false;
    });

    /*------------ Menu Close -----------*/
    $('.navbar-nav .nav-link').on('click', function () {
        var toggle = $('.navbar-toggler').is(':visible');
        if (toggle) {
            $('.navbar-collapse').collapse('hide');
        }
    });

    /*------------- About Us Down Arrow -----------*/
    $("#about-us-down-btn").click(function () {
        $("html").stop().animate({
            scrollTop: $("#about-us").offset().top
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

    /*------------------ About Carousel -------------*/
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: true,
        items: 1,
        margin: 10
    });
    /*owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });*/

    /*------------- Wow Init ------------*/

    new WOW().init();

    /*------------ Isotope --------------*/

    $(".protfolio-item-box").isotope({
        // options
        itemSelector: ".protfolio-item-content",
        layoutMode: 'fitRows'
    });

    $(".protfolio-menu ul li a").click(function () {
        $(".protfolio-menu ul li a").removeClass("active");
        $(this).addClass("active");

        var selector = $(this).attr("data-filter");
        $(".protfolio-item-box").isotope({
            filter: selector
        });
        return false;
    });









});
