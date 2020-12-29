function attachTitle(arg){
  return 'DR. ' + arg;
}

let promise = Promise.resolve('MANHATTAN');

promise.then(attachTitle).then(console.log)
