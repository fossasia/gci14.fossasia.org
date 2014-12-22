if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
          return typeof args[number] != 'undefined'
          ? args[number]
          : match
          ;
        });
    };
}

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
                var str = '<div class="sympl quarter"><section class="person person--contributer"><div class="person__img"><div class="person__img__info"><div class="person__img__info__cont"><a target="_blank" href="{0}"><i class="icon-github"></i></a></div></div><img src="{1}"></div><h1 class="person__name">{2}</h1></section></div>'.format(data[i].html_url, data[i].avatar_url, data[i].login)
                // str = '<div class="sympl quarter"><section class="person person--contributer"><div class="person__img">';
                // str += '<div class="person__img__info"><div class="person__img__info__cont">';
                // str += '<a target="_blank" href="' + data[i].html_url + '"><i class="icon-github"></i></a></div></div>';
                // str += '<img src="' + data[i].avatar_url + '"></div><h1 class="person__name">' + data[i].login + '</h1></section></div>';
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

    function changeTitle() {
        if (window.matchMedia('(max-width: 1024px)').matches && window.matchMedia('(min-width: 470px)')) {
            $("#main-head").html('<span class="highlight">FOSSASIA</span>');
        } else {
            $("#main-head").html('<img src="images/logo.png" height="150px" width="300px">');
        }
    }

    function caller() {
        changeTitle();
    }

    window.onload = caller();
    window.addEventListener("resize", caller);
});
