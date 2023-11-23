class Menu{
    #buttonStart = null
    constructor(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.#buttonStart = new GameObjectButton({
            
        })
    }

    START(){

    }
    STOP(){
        
    }
    UPDATE(){

    }
    DRAW(ctx){
        this.backgroundFill(ctx)
       return true
    }
    backgroundFill(ctx){
        ctx.fillStyle = 'black'
        
        ctx.fillRect(0,0,this.width,this.height);
    }
}