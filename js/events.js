function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(function () {
    $(this).addClass('tasty')
  })
}

function pressIt() {
  $('input#typing').keydown(function (e) {
    if (e.key == 'g') {
      alert("You have pressed the G key");
    }
  })
}

function submitIt() {
  $()
}

$(document).ready(function () {
  getIt();
  frameIt();
  pressIt();
});
