$(document).ready(function () {

    //
    // Main Slider
    //
    $('.banner').unslider({
        fluid: true,
        dots: true,
        keys: true,
        speed: 500,
        delay: 5000
    });


    //
    // Github linking contributers    
    //
    var owner = "fossasia";
    var repo = "fossasia.github.io";

    $.ajax({
        url: "http://api.github.com/repos/" + owner + "/" + repo + "/contributors",
        dataType: "jsonp",
        success: function (data) {
            data = data.data;
            var n = data.length;
            for (var i = 0; i < n; i++) {
                //Please, sorry for the next lines (>_<)
                var str;
                str = '<div class="sympl quarter"><section class="person person--contributer"><div class="person__img">';
                str += '<div class="person__img__info"><div class="person__img__info__cont">';
                str += '<a target="_blank" href="' + data[i].html_url + '"><i class="icon-github"></i></a></div></div>';
                str += '<img src="' + data[i].avatar_url + '"></div><h1 class="person__name">' + data[i].login + '</h1></section></div>';
                $("#contr").append(str);
            }
        }
    })


    //
    // Menu
    //
    $('a[href^="#"]').on('click', function() {
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 1000, "swing", function(){
           document.location.hash = id; 
        });

        return false;
    });


    //
    // Animation
    //
    new WOW().init();
    function changeImage() {
        if (window.matchMedia('(max-width: 690px)').matches && window.matchMedia('(min-width: 470px)')) {
            $(".logo img").attr("src", "favicon.ico");
            $(".logo img").css({"magin-right":"20px"});
        } else {
            $(".logo img").attr("src", "images/fossasia-dark.png");
        }
    }

    function addImage() {
        if (window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 470px)')) {
            $(".menu").prepend($(".logo"));
        } else {
            $(".masthead-cont").prepend($(".logo"));
        }
    }

    function changeTitle() {
        if (window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 470px)')) {
            $("#main-head").html('<span class="highlight">FOSSASIA</span>');
        } else {
            $("#main-head").html('<img src="images/logo.png" height="150px" width="300px">');
        }
    }

    function caller() {
        addImage();
        changeImage();
        changeTitle();
    }

    window.onload = caller();
    window.addEventListener("resize", caller);
});