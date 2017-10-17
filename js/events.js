function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $img = $('img:first-child');
  $img.on('load', () => {
    console.log("hea");
    $img.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
