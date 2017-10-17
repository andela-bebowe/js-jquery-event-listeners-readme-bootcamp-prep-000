function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').on('load', () => {
    console.log("hahf");
    $( this ).addClass('tasty')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
