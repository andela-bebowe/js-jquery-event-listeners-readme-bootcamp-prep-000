function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img:first-child').on('load', () => {
    console.log("hea");
    $img.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
