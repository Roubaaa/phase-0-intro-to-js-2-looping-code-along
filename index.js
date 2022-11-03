/*let spy;
beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );*/


function countDown (positiveInteger){
let i = 0;
    while (i <= positiveInteger){
        console.log(positiveInteger -i)
        positiveInteger --;
    }

}
countDown(11);


function writeCards(stringNames, eventName) {

    let n = stringNames.length;
    let result =[];
   

      
      for (let i = 0; i<n;i++){
      
     result[i] =`Thank you, ${stringNames[i]}, for the wonderful ${eventName} gift!`
     
    
    }
  
    return [...result];
 
  }
  
console.log(writeCards( ["Guadalupe", "Ollie", "Aki"],"surprise"));
  