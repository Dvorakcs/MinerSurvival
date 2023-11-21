class Game{
    #gameManager = new GameManager()
    #background = new Image()
    id_singlePlayer = 0
    #maps = new Maps({});
    constructor(){
        this.START()
    }

    START(){

    }
    STOP(){

    }
    UPDATE(){   
         
        if(this.#gameManager.Players.length > 0){
            this.#maps.gameObject = this.#gameManager.Players
            this.#maps.UPDATE({
                id_singlePlayer:this.#gameManager.Id_singlePlayer
            })
            
            const player = this.#maps.gameObject.filter(player => player.id_singlePlayer == this.#gameManager.Id_singlePlayer)[0]
            this.#gameManager.sendPlayerData({
                idPlayer:player.id_singlePlayer,
                positionX :player.PositionX,
                positionY :player.PositionY,
                direction:player.Direction
              })
        }
       
    }
    DRAW(ctx){
  
        ctx.drawImage(this.#background,2,0)
        this.#maps.DRAW(ctx)
    }

    
}