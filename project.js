$(document).ready(function() {
    $(".menu-of-header ul li:first-child").click(function() {
        $(".for-menu").toggleClass("menu-after");
        $(".for-about").removeClass("about-after");
        $(".for-service").removeClass("service-after");
        $(".for-contact").removeClass("contact-after");
    });
    $(".for-plush").hover(function() {
        $(".line-plush").css({
            "transform": "scaleX(1)",
            "transition": "0.5s",
        });
    },
    function() {
        $(".line-plush").css({
         "transform": "scaleX(0)",
         "transition": "0.5s",   
        })
    });
    $(".for-plush").click(function() {
        let params = "width:100%,height:100%"
        if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
            $(".fixed-div").fadeIn(500);
            $(".special").html("плюшевые игрушки");
        } else {
            setTimeout(window.open("https://ru.wikipedia.org/wiki/%D0%9C%D1%8F%D0%B3%D0%BA%D0%B0%D1%8F_%D0%B8%D0%B3%D1%80%D1%83%D1%88%D0%BA%D0%B0", "plush-toys", params));
        }
    });
    $(".for-plastic-toys").hover(function() {
        $(".line-plastic-toys").css({
            "transform": "scaleX(1)",
            "transition": "0.5s",
        });
    },
    function () {    
    $(".line-plastic-toys").css({
            "transform": "scaleX(0)",
            "transition": "0.5s",
        });

    });
    $(".for-plastic-toys").click(function() {
        if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
            $(".fixed-div").fadeIn(500);
            $(".special").html("пластиковые игрушки");
        } else {
        let toys_params = "width:100%,height:100%"
        setTimeout(window.open("https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D0%B5%D0%B3%D0%BE%D1%80%D0%B8%D1%8F:%D0%98%D0%B3%D1%80%D1%83%D1%88%D0%BA%D0%B8", "plastic-toys", toys_params));
        }
    });

    //Функции для menu

    $(".menu-of-header ul li:nth-child(2)").click(function() {
        $(".for-about").toggleClass("about-after");
        $(".for-menu").removeClass("menu-after");
        $(".for-service").removeClass("service-after");
        $(".for-contact").removeClass("contact-after");
    });

    //Функции для about

    $(".menu-of-header ul li:nth-child(3)").click(function() {
        $(".for-service").toggleClass("service-after");
        $(".for-menu").removeClass("menu-after");
        $(".for-about").removeClass("about-after");
        $(".for-contact").removeClass("contact-after");
    });

    //Функции для service 

    $(".menu-of-header ul li:last-child").click(function() {
        $(".for-contact").toggleClass("contact-after");
        $(".for-menu").removeClass("menu-after");
        $(".for-about").removeClass("about-after");
        $(".for-service").removeClass("service-after");
    });

    //Функции для contact 

    $(".right-button").click(function() {
        if ($(".nav-content > div:first-child").hasClass("curry") == true) {
            $(".nav-content > div:first-child").fadeOut(1000);
            $(".nav-content > div:last-child").fadeOut(1000);
            $(".nav-content-second").fadeIn(1000);
            $(".nav-content-second").addClass("curry");
            $(".nav-content > div:first-child").removeClass("curry");
        } else if ($(".nav-content > div:first-child").hasClass("curry") == false && $(".nav-content > div:nth-child(2)").hasClass("curry") == true) {
            $(".nav-content > div:nth-child(2)").fadeOut(1000);
            $(".nav-content-third").addClass("curry");
            $(".nav-content-third").fadeIn(1000);
            $(".nav-content > div:nth-child(2)").removeClass("curry");
        } else if ($(".nav-content > div:nth-child(2)").hasClass("curry") == false && $(".nav-content > div:last-child").hasClass("curry") == true) {
            $(".nav-content > div:last-child").fadeOut(1000);
            $(".nav-content-first").fadeIn(1000);
            $(".nav-content-first").addClass("curry");
            $(".nav-content > div:nth-child(2)").removeClass("curry");
        }
    });

    $(".left-button").click(function() {
        if ($(".nav-content > div:first-child").hasClass("curry") == true) {
            $(".nav-content > div:first-child").fadeOut(1000);
            $(".nav-content > div:nth-child(2)").fadeOut(1000);
            $(".nav-content-third").fadeIn(1000);
            $(".nav-content-third").addClass("curry");
            $(".nav-content > div:first-child").removeClass("curry");
        }  else if ($(".nav-content > div:first-child").hasClass("curry") == false && $(".nav-content > div:last-child").hasClass("curry") == true) {
            $(".nav-content > div:last-child").fadeOut(1000);
            $(".nav-content > div:nth-child(2)").fadeIn(1000);
            $(".nav-content > div:nth-child(2)").addClass("curry");
            $(".nav-content > div:last-child").removeClass("curry");
        } else if ($(".nav-content > div:nth-child(2)").hasClass("curry") == true && $(".nav-content > div:last-child").hasClass("curry") == false) {
            $(".nav-content > div:nth-child(2)").fadeOut(1000);
            $(".nav-content-first").addClass("curry");
            $(".nav-content-first").fadeIn(1000);
            $(".nav-content > div:nth-child(2)").removeClass("curry");
        }
    });

    //Функции для слайдера 
    
    function timer () {
        let date = new Date ();
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if (day < 10) day = `0${day}`;
        if (month < 10) month = `0${month + 1}`;
        if (hours < 10) hours = `0${hours}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (seconds < 10) seconds = `0${seconds}`;
        $(".timer-date").html(`${day}:${month}:${year}`);
        $(".timer-time").html(`${hours}:${minutes}:${seconds}`);
        setTimeout(timer, 1000);
    }
    timer();

    //Функция для таймера 

    $("input[id=name]").blur(function() {
        if ($(this).val().length == 0) {
            $(".error-name").css({
                "opacity": "1",
                "transition": "0.3s",
            });
        }
    });

    $("input[id=name]").focus(function() {
        $(".error-name").css({
            "opacity": "0",
            "transition": "0.3s",
        });
    });

    $("input[id=surname]").blur(function() {
        if ($(this).val().length == 0) {
            $(".error-surname").css({
                "opacity": "1",
                "transition": "0.3s",
            });
        }
    });

    $("input[id=surname]").focus(function() {
        $(".error-surname").css({
            "opacity": "0",
            "transition": "0.3s",
        });
    });

    $("input[id=email]").blur(function() {
        if ($(this).val().length == 0) {
            $(".error-email").css({
                "opacity": "1",
                "transition": "0.3s",
            });
        }
    });

    $("input[id=email]").focus(function() {
        $(".error-email").css({
            "opacity": "0",
            "transition": "0.3s",
        });
    });

    $("input[id=password]").blur(function() {
        if ($(this).val().length == 0) {
            $(".error-password").css({
                "opacity": "1",
                "transition": "0.3s",
            });
        }
    });

    $("input[id=password]").focus(function() {
        $(".error-password").css({
            "opacity": "0",
            "transition": "0.3s",
        });
    });

    $("button[type=submit]").click(function() {
            $("form").submit(function(event) {
                if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
                    event.preventDefault();
                } else {
                    $(".form-complete").fadeIn(500);
                    event.preventDefault();
                }
            });
    });
    
    //Функции для формы 

    $(".close").click(function(){
        $(".fixed-div").fadeOut(500);
    });

    //Функция для закрытия фиксированного элемента 
    
    $(".close-complete").click(function() {
        $(".form-complete").fadeOut(500);
    });

    //Функция для закрытия фиксированного элемента для формы
    
    $(".delivery").click(function() {
        if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
            $(".fixed-div").fadeIn(500);
            $(".special").html("узнать условия доставки");
        } else {
            alert("Этот раздел ещё не закончен");
        }
    });

    $(".call-center").click(function() {
        if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
            $(".fixed-div").fadeIn(500);
            $(".special").html("узнать что-то у call центра");
        } else {
            alert("Этот раздел ещё не закончен");
        }
    });

    $(".help").click(function() {
        if ($("input[id=name]").val().length == 0 || $("input[id=surname]").val().length == 0 || $("input[id=email]").val().length == 0 || $("input[id=password]").val().length == 0) {
            $(".fixed-div").fadeIn(500);
            $(".special").html("получить помощь");
        } else {
            alert("Этот раздел ещё не закончен");
        }
    });

    $(".button-to-toys").click(function() {
        alert("Этот раздел ещё не закончил");
    });

    $(".button-to-other").click(function() {
        alert("Этот раздел ещё не закончил");
    });

    //Функции для незаконченных разделов

    setTimeout(() => {
        $(".preloader").removeClass("preloader");
    }, 5000);

    //Функция для удаления прелоадера

    function toUpp() {
        $(window).scrollTop(0);
    }

    $(".upper").click(function() {
        toUpp();
    });

    $(window).scroll(function() {
    if (document.documentElement.scrollTop < 20) {
        $(".upper").removeClass("upper-after");
    } else {
        $(".upper").addClass("upper-after");
    }
});

})