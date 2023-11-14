class Game{
    controller = new Controller()
    gameObject = new GameObject({
        positionX:10,
        positionY:10,
        isController:true
    })
    constructor(){

    }

    START(){

    }
    STOP(){

    }
    UPDATE(){
        this.gameObject.UPDATE({
            keyPress:this.controller.keyPress
        })
    }
    DRAW(ctx){
        this.gameObject.DRAW(ctx)
    }
}