const express = require('express')
const http = require("http")
const webSocket = require("ws")
const cors = require('cors');

const app = express();
const server = http.createServer(app)
const wss = new webSocket.Server({server})
app.use(cors());

const ACTIONS = {
   New_Player: "new player",
   CreatePlayer: "CreatePlayer",
   UpdatePosition: "UpdatePosition"
}

app.get("/", (req,res) => {
    res.send("Server WebSocket Initialize...")
})

server.listen(3000, () => {
    console.log("Server WebSocket Initialize...  PORT:" + 3000)
})

let clients = []
var player = []
let id = 1
wss.on("connection", (ws) => {   
    id++;
    ws.id_singlePlayer = id
    UpdateId(ws);
    
    ws.on("close", () => {
        player = player.filter((player) => player.id_singlePlayer != ws.id_singlePlayer)
        clients = clients.filter((client) => client != ws)      
    })
    

    ws.on("message",handlerIncomingMessage.bind(null,ws))
    
})
function handlerIncomingMessage(ws,msg){
    const data = JSON.parse(msg)
    const action = data.actions
    
    switch(action){
        case ACTIONS.CreatePlayer:
            const players = data.player 
             player.push({
                 playerName:players,
                 id_singlePlayer : ws.id_singlePlayer,
                 positionX:32 * ws.id_singlePlayer,
                 positionY:64,
                 direction: 'RIGHT'
             })
             UpdatePlayers()
        break;
        case ACTIONS.UpdatePosition:

        break;
        default:
            let p = player.filter(p => p.id_singlePlayer == data.idPlayer)
            
            p.forEach(p => {
                p.positionX = data.positionX
                p.positionY = data.positionY
                p.direction = data.direction
               
                
            })
            UpdatePlayers()
            break;
    }
}
function UpdatePlayers(){

    Object.values(clients).forEach(client => {
           
        client.send(JSON.stringify({
        actions:ACTIONS.UpdatePosition,
        id_singlePlayer:client.id_singlePlayer,
        players:player
       }))
    })
}
function UpdateId(ws){
    clients.push(ws)
    ws.send(JSON.stringify({
        actions:ACTIONS.CreatePlayer,
        id_singlePlayer:ws.id_singlePlayer
    }))

}