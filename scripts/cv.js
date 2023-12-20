$(document).ready(function () {
    // Initialize the circle for progress animation
    var circle = document.querySelector('.progress-ring__circle');
    var radius = circle.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;

    const sections = ['.s-one', '.s-two', '.s-three', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four'];
    const progressBars = ['.progress-one', '.progress-two', '.progress-three', '.progress-four', '.progress-five', '.progress-six', '.progress-seven', '.progress-eight', '.progress-nine', '.progress-ten'];
    const colors = ['#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3ca7ba', '#b8ba3c', '#3cba92', '#3cba92', '#3cba92' ];

    const percentages = [70, 70, 60, 40, 10, 70, 50, 10, 10, 70];


    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    // Function to set the progress on the circle
    function setProgress(progressBar, percent, color) {
        const circle = document.querySelector(progressBar + ' .progress-ring__circle');
        circle.style.stroke = color;
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        circle.style.strokeDasharray = `${circumference} ${circumference}`;
        circle.style.strokeDashoffset = `${circumference}`;
    
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
        document.querySelector(progressBar + ' .circle-percent').textContent = `${Math.floor(percent)}%`;
    }

    // Function to setup Scrollify plugin
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
                // Update active section on scroll
                $('.scroll-control span').removeClass('active');
                $('.scroll-control span').eq(sectionIndex).addClass('active');
            },
            afterRender: function() {
                // Initial setup after Scrollify renders
                updateScrollControls();
                animateProgressBars();
            }
        });
    }

    // Function to update scroll controls
    function updateScrollControls() {
        var currentSection = $.scrollify.current();
        $('.scroll-control span').removeClass('active');
        $('.scroll-control span').eq(currentSection.index('.scroll')).addClass('active');
    }


    // Function to check the screen and apply Scrollify
    function screenCheck() {
        var deviceAgent = navigator.userAgent.toLowerCase();
        $('section').addClass('scroll');
        setupScrollify();
    }

    // Initial setup
    screenCheck();

    // Handle window resize
    $(window).on('resize', function () {
        screenCheck();
        animateProgressBars();
    });

    // Scroll event listener for progress circle
    window.addEventListener('scroll', function() {
        for(let i = 0; i < sections.length; i++) {
            const section = document.querySelector(sections[i]);
            const sectionPosition = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
    
            if(sectionPosition < screenPosition) {
                setProgress(progressBars[i], percentages[i], colors[i]);
            }
        }
    });

    // Click handlers for scroll control
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
});
