const express = require('express')
const http = require("http")
const webSocket = require("ws")
const cors = require('cors');

const app = express();
const server = http.createServer(app)
const wss = new webSocket.Server({server})
app.use(cors());

const ACTIONS = {
   New_Player: "new player"
}

app.get("/", (req,res) => {
    res.send("Entrou...")
})

server.listen(3000, () => {
    console.log("servidor iniciado porta:" + 3000)
})

let clients = []
var player = []
let id = 1
wss.on("connection", (ws) => {   

    ws.id_singlePlayer = id
    clients.push(ws)
   if(player.filter((player) => player.id_singlePlayer != clients.id_singlePlayer)){
    id += 1;
    player.push({
        id_singlePlayer : ws.id_singlePlayer,
        positionX:32 * ws.id_singlePlayer,
        positionY:64,
        direction: 'RIGHT'
    })
    //console.log(id)
   }
   
    //console.log(clients)
    UpdatePlayers();

    ws.on("close", () => {
        clients = clients.filter((client) => client == ws)
        player = player.filter((player) => player.id_singlePlayer != clients.id_singlePlayer)
        clients = clients.filter((client) => client != ws)      
    })
    

    ws.on("message",handlerIncomingMessage.bind(null,ws))
    
})

function UpdatePosicaoPlayer(){
    console.log("Posicao atualizada")
}
function HandlerDraw(){
    const  playersAll = Object(clients)
    playersAll.forEach((player) => {
        player.send(playersAll)
    })
}
function handlerIncomingMessage(ws,msg){
    const data = JSON.parse(msg)
    //console.log(data)
    const action = data.action
    switch(action){

        case ACTIONS.New_Player:
           
        break;
       
        default:
            let p = player.filter(p => p.id_singlePlayer == data.idPlayer)
            
            p.forEach(p => {
                p.positionX = data.positionX
                p.positionY = data.positionY
                p.direction = data.direction
                console.log(p.direction)
                
            })
            UpdatePlayers()
            break;
    }
}
function UpdatePlayers(){

    Object.values(clients).forEach(client => {
           
        client.send(JSON.stringify({
        id_singlePlayer:client.id_singlePlayer,
        players:player
       }))
    })
}