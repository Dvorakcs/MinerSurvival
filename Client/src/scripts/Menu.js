class Menu{
    #buttonStart = null
    #buttonLogin = null
    constructor(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.#buttonStart = new GameObjectButton({
            src: '/Client/src/images/Menu/UI_Flat_BUTTON.png',
            positionX:10,
            positionY:10,
            width:95,
            height:32
        })
        this.#buttonLogin = new GameObjectButton({
            src: '/Client/src/images/Menu/UI_Flat_BUTTON.png',
            positionX:150,
            positionY:10,
            width:95,
            height:32
        })
    }

    START(){

    }
    STOP(){
        
    }
    UPDATE(){
        this.#buttonStart.UPDATE({})
        this.#buttonLogin.UPDATE({})
    }
    DRAW(ctx){
        this.backgroundFill(ctx)
        this.#buttonStart.DRAW(ctx)
        this.#buttonLogin.DRAW(ctx)
       return true
    }
    backgroundFill(ctx){
        ctx.fillStyle = 'black'
        
        ctx.fillRect(0,0,this.width,this.height);
    }
}