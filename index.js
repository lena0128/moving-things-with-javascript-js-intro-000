const app = "I don't do much."
var dodger = document.getElementById('dodger');

dodger.style.backgroundColor = '#000000';

dodger.style.backgroundColor = '#FBBF29';

document.addEventListener('keydown', function(e){
  console.log(e.which)
})

document.addEventListener('keydown', function(e){
  if (e === 37) {
var leftNumbers = dodger.style.left.replace('px', '');
var left = parseInt(leftNumbers, 10);

dodger.style.left = `${left - 1}px`;
}
})

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '');
  var left = parseInt(leftNumbers, 10);

  if(left > 0) {
  dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener('keydown', function(e){
  if (e === 37) {
  moveDodgerLeft();
}
})

function moveDodgerRight(){
  var rightNumbers = dodger.style.right.replace('px', '');
  var right = parseInt(rightNumbers, 10);

  if (right > 0) {
  dodger.style.right = `${right - 1}px`;
  }
}

document.addEventListener('keydown', function(e){
  if (e === 39){
   moveDodgerRight();
}

})
