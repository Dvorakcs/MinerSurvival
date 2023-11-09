class GameEngine{
    websocket = new WebSocket(`ws:localhost:3000`)
    canvas = document.getElementById('canvas') 
    ctx = this.canvas.getContext('2d')
    
    GameObjects = {
        Players:[]
    }
    constructor(){
        

    }

    START(){
        //entra no loop da engine
        this.websocket.onopen = (event) => {
            this.websocket.send("Login")
        }
        this.UPDATE();
    }

    UPDATE(){
        this.GameObjects.Players.forEach(players => {
            players.Update();
            players.Draw(this.ctx)
        })


        console.log("engine iniciada...")
        requestAnimationFrame(() => this.UPDATE())
    }

    STOP(){

    }
}