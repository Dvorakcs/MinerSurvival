const express = require('express')
const http = require("http")
const webSocket = require("ws")
const cors = require('cors');

const app = express();
const server = http.createServer(app)
const wss = new webSocket.Server({server})
app.use(cors());

const ACTIONS = {
    ADMIN:"Admin",
    DRAW: "Draw",
    CLIENTE: "Client"
}

app.get("/", (req,res) => {
    res.send("Entrou...")
})

server.listen(3000, () => {
    console.log("servidor iniciado porta:" + 3000)
})

let clients = []
let player = []
let count = 0
wss.on("connection", (ws) => {   
    count++
    ws.id = count
    clients.push(ws)
   if(player.filter((player) => player.id != ws.id)){
    player.push({
        id : ws.id,
        posicao:{x:20, y: 10}
    })
   }
    //console.log(clients)
    UpdatePlayers();

    ws.on("close", () => {
        player = player.filter((player) => player.id !== ws.id)
        clients = clients.filter((client) => client !== ws)
       
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
    const action = data.action
    console.log(data)
    switch(action){

        case ACTIONS.ADMIN:
            ws.isAdmin = true;
            console.log("addadmin")
        break;
        case ACTIONS.DRAW:
            HandlerDraw()
        break;
        default:
            let p = player.filter((p) => p.id == data.id)
            console.log(p[0].posicao.x += data.Direcao.x,data.id )
            UpdatePlayers();
            break;
    }
}
function UpdatePlayers(){

    Object.values(clients).forEach(cliente => {
           
       cliente.send(JSON.stringify({
        UnicId:cliente.id,
        players:player
       }))
    })
}