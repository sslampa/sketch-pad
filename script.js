var rows = 16; //Number of rows and columns wanted

$(document).ready(function() {
  //On-start create 16x16 grid
  createGrid(rows);

  //Hovered squares change color
  $('.square').hover(addSquareHover);

  //Clear colored in squares
  $('#clear').click(function() {
    $('.square').removeClass('square-hover');
  });

 //Gets user-input for row x row and create new grid
 $('#submit').click(function() {
   rows = parseInt($('#text-field').val());
   createGrid(rows);
   $('.square').hover(addSquareHover);
 });

  //Creates and adds each box
  function createGrid(ro) {
    var squares = ro * ro;
    var length = 25 * ro + ro;

    $('#container').empty();
    $('#container').height(length);
    $('#container').width(length);

    for (var i=0; i<squares; i++) {
      $('#container').append('<div class="square"></div>');
    }
  }

  //Adds square-hover class to currently hovered box
  function addSquareHover() {
    $(this).addClass('square-hover');
  }
});
