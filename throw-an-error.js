'use strict';

function parsePromised(obj){
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(obj))
    }catch(err) {
      reject(err)
    }
})
}

function onRejected(err){
  console.log(err.message)
}

parsePromised(process.argv[2]).catch(onRejected);
