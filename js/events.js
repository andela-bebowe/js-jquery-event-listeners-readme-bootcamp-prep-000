function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(() => {
    $( this ).add
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
