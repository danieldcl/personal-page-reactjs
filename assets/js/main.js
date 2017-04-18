$(document).ready(function(){
  $('#sidebar').hide();
  $('.content').hide();
  $('#sidebar').fadeIn(500, function(){$('.content').show('drop', {direction: 'left'}, 1000);});

  // $('li').mouseenter(function() {
  //      $(this).fadeTo('fast',1);
  //  });
  //  $('li').mouseleave(function() {
  //      $(this).fadeTo('fast', 0.5);
  //  });
});
