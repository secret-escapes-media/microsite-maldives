///////////////////////////////////////
//      smooth-scrolling - http://css-tricks.com/snippets/jquery/smooth-scrolling/
///////////////////////////////////////
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

///////////////////////////////////////
//      inserts current year
///////////////////////////////////////
$('.js-year').html(new Date().getFullYear());

///////////////////////////////////////
//      detects touch device
///////////////////////////////////////
if ("ontouchstart" in document.documentElement){
  $('html').addClass('touch');
}

///////////////////////////////////////
//      SVG image swap
///////////////////////////////////////

  // finds image with class and swaps .png with .svg in img source string
  if (Modernizr.svgasimg) {
    var svgSwap = $('img.js-svg-swap');
    svgSwap.each( function() {
      var currentSrc = $(this).attr('src'),
          newSrc = currentSrc.replace('.png', '.svg');
      $(this).attr('src', newSrc);
    });
  }

///////////////////////////////////////
//        Navigation
///////////////////////////////////////

  // mobile nav toggle open & close
  $('.js-toggle-mobile-nav').on('click', function(e) {
    $('.mobile-nav').toggleClass('is-open').toggleClass('is-closed');
  });

  // current page nav highlight
  var currentPage     = $('body').data('current-page');
  var currentGroup    = $('body').data('current-group');

  if (currentGroup) {
    // add class to individual nav item
    $('[class*=nav__item--' + currentGroup + ']').addClass('is-current');
  } else {
    // add class to individual nav item
    $('.page--' + currentPage + ' [class*=nav__item--' + currentPage + ']').addClass('is-current');
  }


  // var currentCategory = $('body').data('current-category');
  // // if there is a category, add class to category nav item
  // if (currentCategory !== ''){
  //   $('.category--' + currentCategory + ' [class*=nav__item--' + currentCategory + ']').addClass('is-current');
  // }


///////////////////////////////////////
//        Search Field
///////////////////////////////////////

var searchDefault = $('#searchForm').serialize();

function search(){
  var str = $('#searchForm').serialize();
  if( searchDefault !== str ){
    var searchUrl = 'https://www.secretescapes.com/search/search?' + str;
    window.location.href=searchUrl;
  }else{
    return false;
  }
}

$('#searchForm').keypress(function(e){
  if (e.which == 13) {
    e.preventDefault();
    search();
  }
});

$('.header__search-btn').click(function(e){
  e.preventDefault();
  search();
});
