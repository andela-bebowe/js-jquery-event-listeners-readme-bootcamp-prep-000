function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $img = $('img');
  $img.on('load', () => {
    $img.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
