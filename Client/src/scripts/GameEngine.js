class GameEngine{
    canvas = document.getElementById('canvas') 
    ctx = this.canvas.getContext('2d')
    GameObjects = {
        Players:[
            new GameObjects({
                posicao:{x:10,y:10},
            })
        ]
    }
    constructor(){
        

    }

    START(){
        //entra no loop da engine
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