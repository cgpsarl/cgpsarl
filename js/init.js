/*
 * Copyright (c) 2018 Agaba Francis
 * Author: Agaba Francis
 * This file is made for CURRENT TEMPLATE
 */

jQuery(document).ready(function () {
  'use strict';

  // here all ready functions

  constructify_tm_animate_submenu();
  constructify_tm_widgetscroll();
  constructify_tm_widget_short_info();
  constructify_tm_logo_scroll();
  constructify_tm_mobile_info();
  constructify_tm_imgtosvg();
  constructify_tm_totop();
  constructify_tm_totop_myhide();
  constructify_tm_hamburger();
  constructify_tm_submenu();
  constructify_tm_owl_carousel();
  constructify_tm_about_animation();
  constructify_tm_rating_height();
  constructify_tm_miniboxes();
  constructify_tm_jarallax();
  constructify_tm_stickyy();
  constructify_tm_estimate_height();
  constructify_tm_portfolio();
  constructify_tm_filter_effect();
  constructify_tm_isotope();
  constructify_tm_justified();
  constructify_tm_magnific_popup();
  constructify_tm_sidebar_shape();
  constructify_tm_contact_form();

  jQuery(window).on('resize', function (e) {
    e.preventDefault();
    constructify_tm_widgetscroll();
    constructify_tm_rating_height();
    constructify_tm_miniboxes();
    constructify_tm_estimate_height();
    constructify_tm_stickyy();
    constructify_tm_isotope();
    constructify_tm_sidebar_shape();
  });

  jQuery(window).on('scroll', function (e) {
    e.preventDefault();
    constructify_tm_totop_myhide();
  });

  jQuery(window).load(function () {
    constructify_tm_isotope();
  });
});

// -----------------------------------------------------
// --------------------  FUNCTIONS  --------------------
// -----------------------------------------------------

function constructify_tm_animate_submenu() {
  'use strict';

  var menuBox = jQuery('.constructify_tm_animate_menu');
  var windowOverlay = jQuery('.constructify_tm_overlay_window');
  var list = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .nav_wrap > ul > li'
  );
  var rightpart = jQuery('.constructify_tm_wrapper_all .main_rightpart');

  list.on('mouseenter', function () {
    var element = jQuery(this);
    var subLength = element.find('.submenu').length;
    var subContent = element.find('.submenu').html();
    var liOffset = element.offset().top;
    var winScroll = jQuery(window).scrollTop();
    menuBox.css({ top: liOffset - winScroll - 18 });

    if (subLength === 1) {
      menuBox.addClass('opened').html('').html(subContent);
    } else {
      menuBox.html('').removeClass('opened');
    }
  });

  rightpart.on('mouseenter', function () {
    menuBox.removeClass('opened');
  });
  windowOverlay.on('mouseenter', function () {
    menuBox.removeClass('opened');
  });
}

// -----------------------------------------------------
// -------------    WIDGET MENU SCROLL -----------------
// -----------------------------------------------------

function constructify_tm_widgetscroll() {
  'use strict';

  var H = jQuery(window).height();
  var scrollable = jQuery('.scrollable');
  var logoH = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .logo_wrap'
  ).outerHeight();

  var verMenu = jQuery('.constructify_tm_wrapper_all .main_leftpart .nav_wrap');

  verMenu.css({ height: H - logoH - 50 });

  scrollable.each(function () {
    var element = jQuery(this);

    element.css({ height: H - logoH - 100 });

    element.niceScroll({
      touchbehavior: false,
      cursorwidth: 0,
      autohidemode: true,
      cursorborder: '0px solid #eee',
    });
  });
}

function constructify_tm_widget_short_info() {
  'use strict';

  var box = jQuery('.constructify_tm_short_contact_content');
  var triangle = jQuery('.constructify_tm_short_contact_triangle');
  var overlay = jQuery('.constructify_tm_overlay_window');
  var closer = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .short_contact_wrap .short_contact_closer'
  );
  var closer2 = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .short_contact_wrap .short_contact_closer a'
  );
  var list = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .short_contact_wrap ul li a'
  );

  list.on('click', function () {
    var element = jQuery(this);
    var length = element.parent().find('.content_wrap').length;
    var contentText = element.parent().find('.content_wrap').html();
    var winScroll = jQuery(window).scrollTop();
    var listOffset = element.parent().offset().top;
    triangle.css({ top: listOffset - winScroll });
    if (length === 1) {
      box.addClass('opened').html('').html(contentText);
      triangle.addClass('opened');
      closer.addClass('opened');
      overlay.addClass('color');
      list.removeClass('colored');
      element.addClass('colored');
    } else {
      box.removeClass('opened');
      triangle.removeClass('opened');
      overlay.removeClass('color');
      element.removeClass('colored');
    }

    return false;
  });

  closer2.on('click', function () {
    box.removeClass('opened');
    triangle.removeClass('opened');
    closer.removeClass('opened');
    overlay.removeClass('color');
    list.removeClass('colored');
    return false;
  });
}

function constructify_tm_logo_scroll() {
  'use strict';

  var winScroll = jQuery(window).scrollTop();
  var menuLogo = jQuery(
    '.constructify_tm_wrapper_all .main_leftpart .logo_wrap'
  );

  if (winScroll >= 100) {
    menuLogo.addClass('animate');
  } else {
    menuLogo.removeClass('animate');
  }

  jQuery(window).on('scroll', function () {
    winScroll = jQuery(window).scrollTop();

    if (winScroll >= 100) {
      menuLogo.addClass('animate');
    } else {
      menuLogo.removeClass('animate');
    }
  });
}

// -----------------------------------------------------
// ----------    CONSTRUCTIFY MOBILE INFO    -----------
// -----------------------------------------------------

function constructify_tm_mobile_info() {
  'use strict';

  var wrapper = jQuery('.constructify_tm_mobile_menu_wrap');
  var allLi = wrapper.find('.short_info_wrap ul li');
  var mainList = wrapper.find('.short_info_wrap ul li a');
  var mainbox = jQuery('.constructify_tm_dropdown_wrap .drop_list');

  mainList.on('click', function () {
    var element = jQuery(this);
    var thisLi = element.parent();
    var attr = thisLi.attr('data-type');
    var extra = jQuery('.constructify_tm_dropdown_wrap .drop_list.' + attr);

    // variables to close mobilemenu
    var hamburger = jQuery('.hamburger');
    var mobileMenu = jQuery(
      '.constructify_tm_mobile_menu_wrap .menu_list_wrap'
    );

    if (thisLi.hasClass('opened')) {
      thisLi.removeClass('opened');
      extra.slideUp();
    } else {
      if (hamburger.hasClass('is-active')) {
        hamburger.removeClass('is-active');
        mobileMenu.slideUp();
      }
      mainbox.slideUp();
      allLi.removeClass('opened');
      thisLi.addClass('opened');
      extra.slideDown();
    }
  });
}

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function constructify_tm_imgtosvg() {
  'use strict';

  jQuery('img.svg').each(function () {
    var jQueryimg = jQuery(this);
    var imgClass = jQueryimg.attr('class');
    var imgURL = jQueryimg.attr('src');

    jQuery.get(
      imgURL,
      function (data) {
        // Get the SVG tag, ignore the rest
        var jQuerysvg = jQuery(data).find('svg');

        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
          jQuerysvg = jQuerysvg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

        // Replace image with new SVG
        jQueryimg.replaceWith(jQuerysvg);
      },
      'xml'
    );
  });
}

// -----------------------------------------------------
// --------------------    TOTOP    --------------------
// -----------------------------------------------------

function constructify_tm_totop() {
  'use strict';

  jQuery('.constructify_tm_totop').on('click', function (e) {
    e.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;
  });
}

function constructify_tm_totop_myhide() {
  'use strict';

  var toTop = jQuery('.constructify_tm_totop');
  if (toTop.length) {
    var topOffSet = toTop.offset().top;

    if (topOffSet > 1000) {
      toTop.addClass('opened');
    } else {
      toTop.removeClass('opened');
    }
  }
}
// -----------------------------------------------------
// ------------------  HAMBURGER  ----------------------
// -----------------------------------------------------

function constructify_tm_hamburger() {
  'use strict';

  var hamburger = jQuery('.hamburger');
  var mobileMenu = jQuery('.constructify_tm_mobile_menu_wrap .menu_list_wrap');
  var allLi = jQuery(
    '.constructify_tm_mobile_menu_wrap .short_info_wrap ul li'
  );
  var mainbox = jQuery('.constructify_tm_dropdown_wrap .drop_list');

  hamburger.on('click', function () {
    var element = jQuery(this);

    if (element.hasClass('is-active')) {
      element.removeClass('is-active');
      mobileMenu.slideUp();
    } else {
      if (allLi.hasClass('opened')) {
        allLi.removeClass('opened');
        mainbox.slideUp();
      }
      element.addClass('is-active');
      mobileMenu.slideDown();
    }
    return false;
  });
}

// -----------------------------------------------------
// -----------------    SUBMENU    ---------------------
// -----------------------------------------------------

function constructify_tm_submenu() {
  'use strict';

  var nav = jQuery('ul.nav');

  nav.find('a').on('click', function (e) {
    var element = jQuery(this);
    var parentItem = element.parent('li');
    var parentItems = element.parents('li');
    var parentUls = parentItem.parents('ul.sub_menu');
    var subMenu = element.next();
    var allSubMenusParents = nav.find('li');

    allSubMenusParents.removeClass('opened');

    if (subMenu.length) {
      e.preventDefault();

      if (!subMenu.parent('li').hasClass('active')) {
        if (!parentItems.hasClass('opened')) {
          parentItems.addClass('opened');
        }

        allSubMenusParents.each(function () {
          var el = jQuery(this);
          if (!el.hasClass('opened')) {
            el.find('ul.sub_menu').slideUp();
          }
        });

        allSubMenusParents.removeClass('active');
        parentUls.parent('li').addClass('active');
        subMenu.parent('li').addClass('active');
        subMenu.slideDown();

        // for recalculate scrollable height
        var scrollableE = jQuery('.scrollable');
        scrollableE.each(function () {
          var elE = jQuery(this);
          var hhhE = elE.height();
          hhhE++;
          setTimeout(function () {
            elE.css({ height: hhhE });
          }, 500);
          setTimeout(function () {
            hhhE--;
            elE.css({ height: hhhE });
          }, 600);
        });
      } else {
        subMenu.parent('li').removeClass('active');
        subMenu.slideUp();
      }
      return false;
    }
  });
}

// -----------------------------------------------------
// ---------------    OWL CAROUSEL    ------------------
// -----------------------------------------------------

function constructify_tm_owl_carousel() {
  'use strict';

  var carousel = jQuery('.constructify_tm_hero_header_wrap .owl-carousel');

  carousel.owlCarousel({
    items: 1,
    lazyLoad: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 6000,
    dots: false,
    nav: false,
    navSpeed: true,
  });

  jQuery('.constructify_tm_hero_header_wrap .custom_nav > a.prev').on(
    'click',
    function () {
      carousel.trigger('prev.owl.carousel');
      return false;
    }
  );

  jQuery('.constructify_tm_hero_header_wrap .custom_nav > a.next').on(
    'click',
    function () {
      carousel.trigger('next.owl.carousel');
      return false;
    }
  );
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function constructify_tm_about_animation() {
  'use strict';

  if ($('.parallax').length > 0) {
    var scene = $('.parallax').get(0);
    var parallax = new Parallax(scene, {
      relativeInput: true,
      onReady: function () {
        console.log('ready!');
      },
    });
  }
}

// -----------------------------------------------------
// -------------    RATING HEIGHT    -------------------
// -----------------------------------------------------

function constructify_tm_rating_height() {
  'use strict';

  var rating = jQuery('.constructify_tm_rating_wrap .leftbox');
  var div = jQuery('.constructify_tm_rating_wrap .rating_text .inner').width();

  rating.css({ minHeight: div + 170 });
}

// -----------------------------------------------------
// -----------------    MINI BOXES    ------------------
// -----------------------------------------------------

function constructify_tm_miniboxes() {
  'use strict';

  var el = jQuery('.constructify_tm_miniboxes');

  if (el.length) {
    el.each(function (index, element) {
      var child = jQuery(element).find('.constructify_tm_minibox');

      child.css({ height: 'auto' });
      // Get an array of all element heights

      var W = jQuery(window).width();
      if (W > 480) {
        var elementHeights = child
          .map(function () {
            return jQuery(this).outerHeight();
          })
          .get();

        // Math.max takes a variable number of arguments
        // `apply` is equivalent to passing each height as an argument
        var maxHeight = Math.max.apply(null, elementHeights);

        // Set each height to the max height
        child.css({ height: maxHeight + 'px' });
      }
    });
  }
}

// -----------------------------------------------------
// --------------------    JARALLAX    -----------------
// -----------------------------------------------------

function constructify_tm_jarallax() {
  'use strict';

  jQuery('.jarallax').each(function () {
    var element = jQuery(this);
    var customSpeed = element.data('speed');

    if (customSpeed !== 'undefined' && customSpeed !== '') {
      customSpeed = customSpeed;
    } else {
      customSpeed = 0.5;
    }

    element.jarallax({
      speed: customSpeed,
    });
  });
}

// -----------------------------------------------------
// --------------    STICKY SIDEBAR    -----------------
// -----------------------------------------------------

function constructify_tm_stickyy() {
  'use strict';

  var el = jQuery('.fn_w_sminiboxes');

  if (el.length) {
    el.each(function (index, element) {
      var child = jQuery(element).find('.fn_w_sminibox');
      child.css({ height: 'auto' });
      var W = jQuery(window).width();
      if (W > 1400) {
        var elementHeights = child
          .map(function () {
            return jQuery(this).outerHeight();
          })
          .get();
        var maxHeight = Math.max.apply(null, elementHeights);
        child.css({ height: maxHeight + 'px' });
      }
    });
  }
}

// -----------------------------------------------------
// --------------    ESTIMATE HEIGHT    ----------------
// -----------------------------------------------------

function constructify_tm_estimate_height() {
  'use strict';

  var span = jQuery(
    '.constructify_tm_request_wrap .inner_wrap .image_wrap span'
  );
  var box = jQuery(
    '.constructify_tm_request_wrap .inner_wrap .image_wrap'
  ).height();

  span.css({ borderTopWidth: box });
}

// -------------------------------------------------
// --------------    PORTFOLIO    ------------------
// -------------------------------------------------

// filterable
function constructify_tm_portfolio() {
  'use strict';

  if (jQuery().isotope) {
    // Needed variables
    var list = jQuery('.constructify_tm_portfolio_list');
    var filter = jQuery('.constructify_tm_portfolio_filter');

    if (filter.length) {
      // Isotope Filter
      filter.find('a').on('click', function () {
        var selector = jQuery(this).attr('data-filter');
        list.isotope({
          filter: selector,
          animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false,
          },
        });
        return false;
      });

      // Change active element class
      filter.find('a').on('click', function () {
        filter.find('a').removeClass('current');
        jQuery(this).addClass('current');
        return false;
      });
    }
  }
}

function constructify_tm_filter_effect() {
  'use strict';

  var button = jQuery('.constructify_tm_projects_wrap .all_projects');
  var element = jQuery('.constructify_tm_projects_wrap .filter_list');

  button.on('click', function () {
    if (element.hasClass('opened')) {
      element.removeClass('opened');
      element.slideUp();
    } else {
      element.addClass('opened');
      element.slideDown();
    }
    return false;
  });
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function constructify_tm_isotope() {
  'use strict';

  jQuery('.masonry').isotope({
    itemSelector: '.item',
    masonry: {},
  });
}

// -----------------------------------------------------
// --------------    ISOTOPE MASONRY    ----------------
// -----------------------------------------------------

function constructify_tm_justified() {
  'use strict';

  jQuery('.constructify_tm_justified_wrap').justifiedGallery({
    //    images : photos,
    rowHeight: 300,
    margins: 10,
  });
}

// -----------------------------------------------------
// --------------    MAGNIFIC POPUP    -----------------
// -----------------------------------------------------

function constructify_tm_magnific_popup() {
  'use strict';

  jQuery('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  jQuery('.gallery').each(function () {
    // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true,
      },
    });
  });
  jQuery('.gallery_zoom').each(function () {
    // the containers for all your galleries
    jQuery(this).magnificPopup({
      delegate: 'a.zoom', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true,
      },
      removalDelay: 300,
      mainClass: 'mfp-fade',
    });
  });
  jQuery('.popup-youtube').each(function () {
    // the containers for all your galleries
    jQuery(this).magnificPopup({
      //type: 'iframe',
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });
  });
}

// -----------------------------------------------------
// ---------------    SIDEBAR SHAPE    -----------------
// -----------------------------------------------------

function constructify_tm_sidebar_shape() {
  'use strict';

  var box = jQuery(
    '.constructify_tm_request_estimate_wrap .definition'
  ).outerWidth();
  var boxWidth = Math.floor(box * 0.267); //80
  var boxWidth2 = box - boxWidth; //220
  var boxHeight = Math.floor(box * 0.183); //55
  var shape1 = jQuery(
    '.constructify_tm_request_estimate_wrap .first_shape .first'
  );
  var shape2 = jQuery(
    '.constructify_tm_request_estimate_wrap .first_shape .second'
  );
  var shape3 = jQuery(
    '.constructify_tm_request_estimate_wrap .first_shape .third'
  );
  var shape4 = jQuery(
    '.constructify_tm_request_estimate_wrap .second_shape .first'
  );
  var shape5 = jQuery(
    '.constructify_tm_request_estimate_wrap .second_shape .second'
  );
  var shape6 = jQuery(
    '.constructify_tm_request_estimate_wrap .second_shape .third'
  );

  shape1.css({ borderRightWidth: boxWidth, borderBottomWidth: boxWidth });
  shape2.css({ borderRightWidth: boxWidth, borderBottomWidth: boxWidth });
  shape3.css({ borderRightWidth: boxWidth, borderBottomWidth: boxHeight });
  shape4.css({ borderLeftWidth: boxWidth2, borderBottomWidth: boxWidth });
  shape5.css({ borderLeftWidth: boxWidth2, borderBottomWidth: boxWidth });
  shape6.css({ borderLeftWidth: boxWidth2, borderBottomWidth: boxHeight });
}

// -----------------------------------------------------
// -----------------    ACCORDION    -------------------
// -----------------------------------------------------

jQuery('.constructify_tm_accordion').friendslab_accordion({
  showIcon: false, //boolean
  animation: true, //boolean
  closeAble: true, //boolean
  slideSpeed: 500, //integer, miliseconds
});

// -----------------------------------------------------
// -------------------    COUNTER    -------------------
// -----------------------------------------------------

jQuery('.constructify_tm_counter').each(function () {
  'use strict';

  var el = jQuery(this);
  el.waypoint({
    handler: function () {
      if (!el.hasClass('stop')) {
        el.addClass('stop').countTo({
          refreshInterval: 50,
          formatter: function (value, options) {
            return value
              .toFixed(options.decimals)
              .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
          },
        });
      }
    },
    offset: '80%',
  });
});

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function constructify_tm_contact_form() {
  'use strict';

  jQuery('.contact_form #send_message').on('click', function () {
    var name = jQuery('.contact_form #name').val();
    var email = jQuery('.contact_form #email').val();
    var message = jQuery('.contact_form #message').val();
    var subject = jQuery('.contact_form #subject').val();
    var success = jQuery('.contact_form .returnmessage').data('success');

    jQuery('.contact_form .returnmessage').empty(); //To empty previous error/success message.
    //checking for blank fields
    if (name === '' || email === '' || message === '') {
      jQuery('div.empty_notice').slideDown(500).delay(2000).slideUp(500);
    } else {
      // Returns successful data submission message when the entered information is stored in database.
      jQuery.post(
        'modal/contact.php',
        {
          ajax_name: name,
          ajax_email: email,
          ajax_message: message,
          ajax_subject: subject,
        },
        function (data) {
          jQuery('.contact_form .returnmessage').append(data); //Append returned message to message paragraph

          if (
            jQuery('.contact_form .returnmessage span.contact_error').length
          ) {
            jQuery('.contact_form .returnmessage')
              .slideDown(500)
              .delay(2000)
              .slideUp(500);
          } else {
            jQuery('.contact_form .returnmessage').append(
              "<span class='contact_success'>" + success + '</span>'
            );
            jQuery('.contact_form .returnmessage')
              .slideDown(500)
              .delay(4000)
              .slideUp(500);
          }

          if (data === '') {
            jQuery('#contact_form')[0].reset(); //To reset form fields on success
          }
        }
      );
    }
    return false;
  });
}
