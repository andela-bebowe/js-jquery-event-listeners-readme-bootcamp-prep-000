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
      alert("You have press")
    }
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
