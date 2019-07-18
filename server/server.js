var gws
var WebSockerServer = require('ws').Server
console.log(WebSockerServer)
var wss = new WebSockerServer({port: 9000})
wss.on('connection', (ws) => {
    gws = ws
    console.log('client connected')
    ws.on('message', (msg) => {
        console.log(msg)
        setInterval(sendMsg, 5000)
    })
})

function sendMsg(){
    gws.send(123)
}