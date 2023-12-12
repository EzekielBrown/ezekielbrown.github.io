$(document).ready(function () {
  screenCheck();

  $('.sidebar-image').animate({opacity: 1}, 1000);

  // Define the mapping of sections to their respective sidebar images
  var sectionImages = {
      's-one': '/assets/cv/ezekiel-title.svg',
      's-two': '/assets/cv/about-title.svg',
      's-three': '/assets/cv/academics-title.svg',
      's-four': '/assets/cv/work-title.svg',
      's-five': '/assets/cv/skills-title.svg'
  };

  var sectionIcons = {
      's-one': { normal: '/assets/cv/home.svg', active: '/assets/cv/home1.svg' },
      's-two': { normal: '/assets/cv/user.svg', active: '/assets/cv/user1.svg' },
      's-three': { normal: '/assets/cv/school.svg', active: '/assets/cv/school1.svg' },
      's-four': { normal: '/assets/cv/work.svg', active: '/assets/cv/work1.svg' },
      's-five': { normal: '/assets/cv/skills.svg', active: '/assets/cv/skills1.svg' }
  };

  function applyScroll() {
      $.scrollify({
          section: ".scroll",
          sectionName: "section-name",
          easing: "easeOutExpo",
          scrollSpeed: 1100,
          offset: 0,
          scrollbars: true,
          setHeights: true,
          overflowScroll: true,
          updateHash: false,
          touchScroll: true,
          before: function (sectionIndex) {
              var currentSection = $.scrollify.current();
              var sectionName = $(currentSection).attr('data-section-name');

              // Fade out the sidebar image
              $('.sidebar-image').css('opacity', 0);

              setTimeout(function() {
                  // Update the sidebar image and fade it in
                  updateSidebarImage(sectionName, sectionImages);
                  $('.sidebar-image').css('opacity', 1);

                  // Update icons based on the active section
                  updateIcons(sectionName, sectionIcons);
              }, 500); // Match this duration with your CSS transition
          }
      });
  }

  // Function to update the sidebar image
  function updateSidebarImage(sectionName, sectionImages) {
      var imageUrl = sectionImages[sectionName] || '/assets/cv/default-image.svg';
      $('.sidebar-image').attr('src', imageUrl);
  }

  // Function to update icons based on the active section
  function updateIcons(sectionName, sectionIcons) {
      Object.keys(sectionIcons).forEach(function(key) {
          var icon = sectionIcons[key];
          var selector = '.' + key.split('-')[1] + '-icon';
          $(selector).attr('src', sectionName === key ? icon.active : icon.normal);
      });
  }

  // Scroll control click events
  $(".scroll-control .one").click(function () {
      $.scrollify.move("#s-one");
  });
  $(".scroll-control .two").click(function () {
      $.scrollify.move("#s-two");
  });
  $(".scroll-control .three").click(function () {
      $.scrollify.move("#s-three");
  });
  $(".scroll-control .four").click(function () {
      $.scrollify.move("#s-four");
  });
  $(".scroll-control .five").click(function () {
      $.scrollify.move("#s-five");
  });

    // Screen check for responsive behavior
    function screenCheck() {
      var deviceAgent = navigator.userAgent.toLowerCase();
      var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);

      // Keep Scrollify enabled for all screen sizes
      $("section").addClass("scroll");
      applyScroll();
      $.scrollify.enable();
  }

  // Reapply scrollify on window resize
  $(window).on("resize", function () {
      screenCheck();
  });
});