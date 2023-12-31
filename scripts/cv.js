$(document).ready(function () {
    // Initialize the circle for progress animation
    var circle = document.querySelector('.progress-ring__circle');
    var radius = circle.r.baseVal.value;
    var circumference = 2 * Math.PI * radius;

    const sections = ['.s-one', '.s-two', '.s-three', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four', '.s-four'];
    const progressBars = ['.progress-one', '.progress-two', '.progress-three', '.progress-four', '.progress-five', '.progress-six', '.progress-seven', '.progress-eight', '.progress-nine', '.progress-ten'];

    const colorsDesktop = ['#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3ca7ba', '#b8ba3c', '#3cba92', '#3cba92', '#3cba92' ];
    const colorsMobile = ['#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3cba92', '#3ca7ba', '#b8ba3c', '#3cba92', '#3cba92', '#3cba92' ]; 

    const colors = window.innerWidth <= 1023 ? colorsMobile : colorsDesktop;

    const percentagesDesktop = [70, 70, 60, 40, 10, 70, 40, 10, 10, 70];
    const percentagesMobile = [50, 60, 50, 30, 10, 60, 30, 10, 10, 60]; 

    const percentages = window.innerWidth <= 1023 ? percentagesMobile : percentagesDesktop;

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

    const elements = document.querySelectorAll('.fade-in');

    window.onload = function() {
        const elements = document.querySelectorAll('.fade-in');
    
        const observer = new IntersectionObserver((entries, observer) => {
            // Loop over the entries
            entries.forEach(entry => {
                // If the element is in the viewport
                if (entry.isIntersecting) {
                    // Add the fadeIn class to the element
                    entry.target.classList.add('start');
    
                    // Stop observing the element
                    observer.unobserve(entry.target);
                }
            });
        });
    
        elements.forEach(element => {
            observer.observe(element);
        });
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
                if(window.innerWidth <= 1023) {
                    // Update line progress bar
                    const lineContainer = document.querySelector(progressBars[i] + '-line');
                    const lineProgress = lineContainer.querySelector('.line-progress');
                    const linePercent = lineContainer.querySelector('.line-percent');
    
                    // Set the color of the line progress
                    lineProgress.style.backgroundColor = colors[i];
    
                    let width = 0;
                    const interval = setInterval(function() {
                        if(width >= percentages[i]) {
                            clearInterval(interval);
                        } else {
                            width++;
                            lineProgress.style.width = width + '%';
                            linePercent.textContent = width + '%';
                        }
                    }, 20);
                } else {
                    // Update circle progress bar
                    setProgress(progressBars[i], percentages[i], colors[i]);
                }
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
