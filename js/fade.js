<script src="//code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>


function showImages(el) {
    var windowHeight = jQuery(window).height();
    $(el).each(function () {
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos) {
            $(this).addClass("fadeIn");
        }
    });
}

// if the image in the window of browser when the page is loaded, show that image
$(document).ready(function () {
    showImages('.star');
});

// if the image in the window of browser when scrolling the page, show that image
$(window).scroll(function () {
    showImages('.star');
});

