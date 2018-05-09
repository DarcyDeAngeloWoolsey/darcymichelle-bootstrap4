    $(document).ready(function () {
        fadeCTACopy1();
        smoothScroll();
    });

    function fadeCTACopy1() {
        $("#ctaCopy1, #ctaCopyXs1").fadeIn(1000);
        $("#ctaCopy1, #ctaCopyXs1").delay(2000).fadeOut(1000);
        setTimeout(function () {
            fadeCTACopy2();
        }, 4000);
    }

    function fadeCTACopy2() {
        $("#ctaCopy2, #ctaCopyXs2").fadeIn(1000);
        $("#ctaCopy2, #ctaCopyXs2").delay(2000).fadeOut(1000);
        setTimeout(function () {
            fadeCTACopy3();
        }, 4000);
    }

    function fadeCTACopy3() {
        $("#ctaCopy3, #ctaCopyXs3").fadeIn(1000);
        $("#ctaCopy3, #ctaCopyXs3").delay(2000).fadeOut(1000);
        setTimeout(function () {
            fadeCTACopy4();
        }, 4000);
    }

    function fadeCTACopy4() {
        $("#ctaCopy4, #ctaCopyXs4").fadeIn(1000);
    }

    //adds scrolling to  all links
    function smoothScroll() {
        $("a").on('click', function (event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                //subtracting the height of nav so  that secion is not covered
                var paddingTop = 56;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - paddingTop
                }, 800, function () {
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    }