class Game{
    websocket = new WebSocket(`ws:localhost:3000`)
    #background = new Image()
    id_singlePlayer = null
    #maps = new Maps({});
    constructor(){
        this.START()
    }
    HandleSocketOpen(){
             this.websocket.send(JSON.stringify({action:"New Player Connection"}))
    }
    HandleSocketMessage(event){
          const data = JSON.parse(event.data)
          const players =  data
          let playerConvert = []
            this.id_singlePlayer =  players.id_singlePlayer
          Object.values(players.players).forEach((player) => {
            if(player.id_singlePlayer == this.id_singlePlayer){
                playerConvert.push(new Player({
                    positionX:player.positionX,
                    positionY:player.positionY,
                    id_singlePlayer: player.id_singlePlayer,
                    isController:true
                 }))
            }else{
                playerConvert.push(new Player({
                    positionX:player.positionX,
                    positionY:player.positionY,
                    id_singlePlayer: player.id_singlePlayer,
                    velocity: 0.5,
                    //isController:true,
                    controllerInverter:true
                 }))
                
            }
             
          })       
         this.#maps.gameObject = playerConvert  
      }
    HandleSocketError(error){
          console.error(error)
    }
    HandleSocketClose(error){
          console.log("websocket closed, try connection again")
        //  setTimeout(this.START(),5000)
        
    }
    START(){
        this.websocket.addEventListener("open", this.HandleSocketOpen.bind(this))
        this.websocket.addEventListener("message", this.HandleSocketMessage.bind(this))
        window.addEventListener('scroll', function (event) {
            this.cameraFocus.x += event.deltaX;
            this.cameraFocus.y += event.deltaY;
          });
       // this.websocket.addEventListener("error", this.HandleSocketError)
       // this.websocket.addEventListener("close", this.HandleSocketClose)
    }
    STOP(){

    }
    UPDATE(){    
        this.#maps.UPDATE()
    }
    DRAW(ctx){
  
        ctx.drawImage(this.#background,2,0)
        this.#maps.DRAW(ctx)
    }

    
}