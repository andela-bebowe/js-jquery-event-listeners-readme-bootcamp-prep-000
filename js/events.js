function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(function () {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input[type="text"]')
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
