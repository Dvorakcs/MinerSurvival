class Game{
    controller = new Controller()
    #background = new Image()
    #maps = new Maps({});
    gameObject = [
        new Player({
            positionX:30,
            positionY:10,
            isController:true
        }),
        
    ]
    constructor(){

    }

    START(){

    }
    STOP(){

    }
    UPDATE(){
        this.#background.src = '/Client/src/images/tx/background.png'
        this.#maps.UPDATE({})
        Object.values(this.gameObject).forEach( object => {
            object.UPDATE({
                    keyPress:this.controller.keyPress      
            })
       })
    }
    DRAW(ctx){
        ctx.drawImage(this.#background,2,0)
        this.#maps.DRAW(ctx)
        Object.values(this.gameObject).forEach( object => {
            object.DRAW(ctx)
       })
    }
}