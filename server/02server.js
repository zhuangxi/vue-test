var http = require('http')

var server = http.createServer((req,res) => {
    if(req.url == '/hello'){
        return res.end('hello world')
    }
    res.end('fuck u')
})

server.listen(80, function(){
    console.log('server is running at port: %d', 80)
})