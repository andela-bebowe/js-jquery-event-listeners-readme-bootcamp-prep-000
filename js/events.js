function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(function () {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input[type="text"]').keydown(function (e) {
    console.log(e);
    if (e.which) {
      alert()
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
