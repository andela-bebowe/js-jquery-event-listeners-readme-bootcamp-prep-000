function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $img = $('img')[0];
  $img.on('load', () => {
    $img.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
