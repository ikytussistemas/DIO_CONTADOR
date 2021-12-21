var currentNumberWrapper = document.getElementById('currentNumber');
var message = document.getElementById('message');
var decrementBtn = document.getElementById('decrement');
var incrementBtn = document.getElementById('increment');
var currentNumber = 0;

decrementBtn.addEventListener('click', ()=> {
  currentNumber -= 1;
  currentNumberWrapper.innerHTML = String(currentNumber);
  checkNumber();
});

incrementBtn.addEventListener('click', ()=> {
  currentNumber += 1;
  currentNumberWrapper.innerHTML = String(currentNumber);
  checkNumber();
});

const checkNumber = ()=>{
  (currentNumber < 0) ? currentNumberWrapper.style.color = 'red' : currentNumberWrapper.style.color = 'white';    
  switch (currentNumber) {
    case -10:
      message.style.color = 'red'
      message.innerHTML = 'Menor Valor'
      decrementBtn.style.visibility = 'hidden';
      break;
    case 10:
      message.style.color = 'white'
      message.innerHTML = 'Maior Valor'
      incrementBtn.style.visibility = 'hidden';
      break;

    default:
      message.style.color = '#2f3041';
      message.innerHTML = '---'
      decrementBtn.style.visibility = 'visible';
      incrementBtn.style.visibility = 'visible';
      break;
  }
}