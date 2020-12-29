var qhttp = require("q-io/http");

qhttp.read('http://localhost:1337')
.then(function (content) {
    return JSON.parse(content)
}).then(console.log)
