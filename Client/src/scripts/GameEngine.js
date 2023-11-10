class GameEngine{
    websocket = new WebSocket(`wss:notch-early-sprint.glitch.me/`)

    canvas = document.getElementById('canvas') 
    ctx = this.canvas.getContext('2d')
    idUnic = null
    GameObjects = {
        Players:[]
    }
    constructor(){
        

    }
    HandleSocketOpen(){
        
      //  this.websocket.send(JSON.stringify({action:"admin"}))
    }
    HandleSocketMessage(event){
        
        const data = JSON.parse(event.data)
        const players =  data
        let playerConvert = []
        this.idUnic = players.UnicId
        
        Object.values(players.players).forEach((player) => {

            playerConvert.push(new GameObjects({
                posicao: player.posicao,
                id:player.id,
            }))
           
        })
       // if(this.GameObjects.Players.filter((player) => player.id == player.id)){
                
       this.GameObjects.Players = playerConvert

        
    }
    HandleSocketError(error){
        console.error(error)
    }
    HandleSocketClose(error){
        console.log("websocket fechado tentando reconectar")
        setTimeout(this.START(),5000)
      
    }
    setkey(event){
        debugger
        if(event.key == "d"){
           
            this.websocket.send(JSON.stringify({action:"Update",
                                                id:this.idUnic,
                                                Direcao:{x:1}
        }))
        }
    }
    START(){
        this.websocket.addEventListener("open", this.HandleSocketOpen.bind(this))
        this.websocket.addEventListener("message", this.HandleSocketMessage.bind(this))
        this.websocket.addEventListener("error", this.HandleSocketError)
        this.websocket.addEventListener("close", this.HandleSocketClose)
        this.keypress = document.addEventListener('keypress', this.setkey.bind(this))
        this.UPDATE();
    }

    UPDATE(){
        this.ctx.clearRect(0,0,500,500)
        this.GameObjects.Players.forEach(players => {
            players.Update();
            players.Draw(this.ctx)
        })
        console.log(this.GameObjects.Players)
        requestAnimationFrame(() => this.UPDATE())
    }

    STOP(){

    }
}