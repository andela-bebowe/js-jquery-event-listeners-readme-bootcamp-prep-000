function getIt() {
  $('p').on('click', () => alert('Hey!'));
}

function frameIt() {
  $('img').load(() => {
    this.className = 'tasty'
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
});
