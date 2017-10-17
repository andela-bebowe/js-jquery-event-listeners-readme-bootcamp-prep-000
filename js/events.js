function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img')[0]
}

$(document).ready(function(){
  getIt();
});
