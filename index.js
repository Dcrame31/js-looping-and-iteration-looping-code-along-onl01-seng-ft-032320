
function writeCards(names, greeting) {
    let array = [];
    for (let i = 0; i < names.length; i++ ) {
    array.push(`Thank you, ${names[i]}, for the wonderful ${greeting} gift!`);
}
  return array;
}

function countDown(num) {
    let i = 0;
      while (num >= i) {
          console.log(num--);
      }
  
  }
