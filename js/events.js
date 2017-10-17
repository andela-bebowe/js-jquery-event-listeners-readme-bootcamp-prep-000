function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  console.log("jadgufa");
  $('img').load(() => {
    console.log("hahf");
    $( this ).addClass('tasty')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
