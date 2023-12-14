$(document).ready(function () {
    function updateScrollControls() {
        var currentSection = $.scrollify.current();
        $('.scroll-control span').removeClass('active');
        $('.scroll-control span').eq(currentSection.index('.scroll')).addClass('active');
    }

    function setupScrollify() {
        $.scrollify({
            section: '.scroll',
            sectionName: 'section-name',
            easing: 'easeOutExpo',
            scrollSpeed: 1100,
            offset: 0,
            scrollbars: true,
            setHeights: true,
            overflowScroll: true,
            updateHash: false,
            touchScroll: true,
            before: function(sectionIndex) {
                $('.scroll-control span').removeClass('active');
                $('.scroll-control span').eq(sectionIndex).addClass('active');
            },
            afterRender: updateScrollControls
        });
    }

    // Initial setup
    screenCheck();
    setupScrollify();

    $('.scroll-control .one').click(function () {
        $.scrollify.move('#s-one');
    });
    $('.scroll-control .two').click(function () {
        $.scrollify.move('#s-two');
    });
    $('.scroll-control .three').click(function () {
        $.scrollify.move('#s-three');
    });
    $('.scroll-control .four').click(function () {
        $.scrollify.move('#s-four');
    });
    $('.scroll-control .five').click(function () {
        $.scrollify.move('#s-five');
    });

    $('.skill-progress').each(function() {
        var $this = $(this);
        var progressBar = $this.find('.progress-bar');
        var textElement = $this.find('.progress-text');
        var percent = $this.data('skill-percent');

        // Animate the progress bar
        $({animatedValue: 0}).animate({animatedValue: percent}, {
            duration: 1000,
            step: function() {
                var stepValue = Math.round(this.animatedValue);
                textElement.text(stepValue + '%');
                var deg = stepValue / 100 * 360;
                progressBar.css('transform', 'rotate(' + deg + 'deg)');
            }
        });
    });


});

$(window).on('resize', function () {
    screenCheck();
});

function applyScroll() {
    $.scrollify({
        section: '.scroll',
        sectionName: 'section-name',
        //standardScrollElements: 'section',
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: false,
        touchScroll: true,
    });
}

function screenCheck() {
    var deviceAgent = navigator.userAgent.toLowerCase();
    var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
    if (agentID || $(window).width() <= 1024) {
        // its mobile screen
        $.scrollify.destroy();
        $('section').removeClass('scroll').removeAttr('style');
        $.scrollify.disable();
    } else {
        // its desktop
        $('section').addClass('scroll');
        applyScroll();
        $.scrollify.enable();
    }
}