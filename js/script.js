$( document ).ready(function() {
    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + " min " + seconds +" sec";

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    };

    window.onload = function () {
        var sixtyMinutes = 60 * 60,
            display = document.querySelector('#time');
        startTimer(sixtyMinutes, display);
    };



    $('select').niceSelect();

    if (screen.width < 768) {
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }


    $('.mobile-menu').click(function () {
        $('.page-menu').toggleClass('active');
        $('body').css('overflow','hidden');
        $('.mobile-menu').toggle();
    });
    $('.page-menu').click(function () {
        $('.page-menu').toggleClass('active');
        $('body').css('overflow','auto');
        $('.mobile-menu').toggle();
    });

});
