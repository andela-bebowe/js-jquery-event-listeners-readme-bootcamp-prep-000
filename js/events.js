function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').on('click', function () {
    $(this).addClass('tasty')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
