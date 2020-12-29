'use strict';

var promise1 = new Promise(function (fulfill, reject) {
        let counter = 0;
       fulfill(counter++)
})

var promise2 = new Promise(function(fulfill, reject){
  let counter = 0;
  fulfill(counter++)
})

function all(a, b){
  return new Promise(function(fulfill, reject){
    let counter = 0;
    let array = [];

    a.then(function(number){
      array.push(number) // the order can vary
      counter++;

      if(counter === 2){
        fulfill(array)
      }
    })

    b.then(function(number){
      array.push(number); // array[1] = number 
      counter++;

      if(counter === 2){
        fulfill(array)
      }
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log)
