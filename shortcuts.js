'use strict';

var promise = Promise.resolve('FULFILLED!')

Promise.reject(new Error('REJECTED!'))

promise.catch(function(err){
  console.log(err.message)
})
