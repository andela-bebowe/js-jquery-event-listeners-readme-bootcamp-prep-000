function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('body img').load(() => {
    $( this ).addClass('tasty')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
