// npm i ws --save
const WSServer = require('ws').Server
const wsserver = new WSServer({ port: 5001 })

wsserver.on('connection',　function(ws) {
  console.log('open')
  ws.on('message',　function(message) {
    console.log(message)
    wsserver.clients.forEach(function(client) {
      client.send(message)
    })
  })
  ws.on('close', function() {
    console.log('close')
  })
})

require('./step6.js')
