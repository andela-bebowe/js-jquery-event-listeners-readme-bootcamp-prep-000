function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(() => {
    $( this ).addClass('tasty')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
