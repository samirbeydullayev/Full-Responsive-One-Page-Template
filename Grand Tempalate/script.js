$(function () {



    // Navbar


    $(window).on("scroll", function () {
        var scrollSize = window.scrollY;

        if (scrollSize > 300) {
            $(".Navbar").addClass("bgcolor");
            $(".Navbar  a").addClass("color");

        } else {
            $(".Navbar").removeClass("bgcolor");
            $(".Navbar  a").removeClass("color");
        }

    })




    $(".Navbar a").click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active")

    })


    // Navbar-end












    // section2 
    $('.section2 .owl-carousel').owlCarousel({
        animateOut: "flipOutY",
        loop: true,
        margin: 10,
        // nav:true,
        // center:true,
        autoplayTimeout: 3000,
        autoplay: true,
        // autoplaySpeed:true,
        smartSpeed: 1500,
        // dotsEach:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    var owl = $('.section2 .owl-carousel');

    owl.owlCarousel();
    $('.section2 .customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('.section2 .customPrevBtn').click(function () {
        owl.trigger('prev.owl.carousel');

    });

    $(document).keydown(function (event) {
        if (event.keyCode == 39) {
            owl.trigger('next.owl.carousel');
        }
        if (event.keyCode == 37) {
            owl.trigger('prev.owl.carousel');
        }
    });
    // section2 -end

    //time

    var countDownDate = new Date("Jun 5, 2018 15:37:25").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.querySelector(".day span").innerHTML = days.toString();
        document.querySelector(".hour span").innerHTML = hours.toString();
        document.querySelector(".minute span").innerHTML = minutes.toString();
        document.querySelector(".second span").innerHTML = seconds.toString();

    })

    // time-end



    // accordation
 $(".section7 .btn2 ").click(function(){
   $(".section7 .card3").hide();
   $(".section7 .card1").show();
   $(".section7 .card2").show();
 
 })

 $(".section7 .btn1 ").click(function(){
    $(".section7 .card3").show();
    $(".section7 .card1").show();
    $(".section7 .card2").show();
  
  })

  $(".section7 .btn3 ").click(function(){
    $(".section7 .card3").show();
    $(".section7 .card1").show();
    $(".section7 .card2").hide();
  
  })

  $(".section7 .btn4 ").click(function(){
    $(".section7 .card1").hide();
    $(".section7 .card3").show();
    $(".section7 .card2").show();
  
  })

  $(".section7 ul li button").on("click",function(){
 $(".activator").removeClass("activator");
 $(this).addClass("activator")



  })


         //    SCROLL-TOP
         if($(window).scrollTop()<500){
            $(".scrollToTop").hide()
        }
        
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $('.scrollToTop').fadeIn(1000);
            } else {
                $('.scrollToTop').fadeOut(1000);
            }
        });
        
        
        $('.scrollToTop').click(function(){
            $('html, body').animate({scrollTop : 0},2000);
            return false;
           
          
        });
        // SCROLL-TOP-END





            //  page-scroll
        $(window).scroll(function(){
         if($(this).scrollTop()==0){
            $(".active").removeClass("active");
            $(".navhome a").addClass("active")
         }
         
         if($(this).scrollTop()>=1700){
            $(".active").removeClass("active");
            $(".navabout a").addClass("active")
         }

         if($(this).scrollTop()>=2700){
            $(".active").removeClass("active");
            $(".navsheduc a").addClass("active")
         }

         if($(this).scrollTop()>=3500){
            $(".active").removeClass("active");
            $(".navspeak a").addClass("active")
         }

         if($(this).scrollTop()>=4700){
            $(".active").removeClass("active");
            $(".navgallery a").addClass("active")
         }

         if($(this).scrollTop()>=5600){
            $(".active").removeClass("active");
            $(".navsponsor a").addClass("active")
         }

         if($(this).scrollTop()>=6300){
            $(".active").removeClass("active");
            $(".navpricing a").addClass("active")
         }

         if($(this).scrollTop()>=8800){
            $(".active").removeClass("active");
            $(".navcontact a").addClass("active")
         }


        })

    //////////////////////////////////
        $(".navhome").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 1000);
            return false;

        })

        $(".navabout").click(function () {
            $("html,body").animate({ scrollTop: 1900 }, 1000);
            return false;
        })

        $(".navsheduc").click(function () {
            $("html,body").animate({ scrollTop: 2900 }, 1000);
            return false;
        })

        $(".navspeak").click(function () {
            $("html,body").animate({ scrollTop: 3700 }, 1000);
            return false;
        })

        $(".navgallery").click(function () {
            $("html,body").animate({ scrollTop: 4900 }, 1000);
            return false;
        })

        $(".navsponsor").click(function () {
            $("html,body").animate({ scrollTop: 5800 }, 1000);
            return false;
        })
        $(".navpricing").click(function () {
            $("html,body").animate({ scrollTop: 6500 }, 1000);
            return false;
        })
        $(".navcontact").click(function () {
            $("html,body").animate({ scrollTop: 9000 }, 1000);
            return false;
        })
// page-scroll-end
  






})
