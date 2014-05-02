
$(function() {


  // chaining
  var $myVar = $('#text');
  $myVar.fadeIn('slow')
    .css('background', 'blue')
    .fadeOut('slow')
    .fadeIn('slow')
    .slideUp(200);

  // select multiple items at once
  $('.box').click(function() {
    var index = $(this).data('index');
    console.log('box nr ' + index + ' clicked');
  });

});
