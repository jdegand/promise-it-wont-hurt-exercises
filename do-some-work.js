var qhttp = require("q-io/http");

qhttp.read('http://localhost:7000')
.then(function (id) {
    return qhttp.read('http://localhost:7001/'+ id)
})
.then(function (content) {
    return JSON.parse(content)
})
.then(console.log)
.catch((e)=> console.log(e.message))
