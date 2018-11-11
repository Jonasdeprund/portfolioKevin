
////////
////
//// Caroussel Options
////
///////
var $status = $('.pagination-project');
var $slickElement = $('.carousel');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
    dots: false,
    prevArrow:`
    <button type="button" class="carousel-prev">
      <img src="images/controls/left-arrow.svg"/>
    </button>
    `,
    nextArrow:`
    <button type="button" class="carousel-next">
      <img src="images/controls/right-arrow.svg"/>
    </button>
    `,
});
