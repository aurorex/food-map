$(document).ready(function() {
  var $image = $('.image');
  $image.mouseover(function() {
    console.log($image.addClass('black'));
  });
});