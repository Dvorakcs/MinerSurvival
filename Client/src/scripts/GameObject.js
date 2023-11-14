class GameObject{
    #tag = undefined
    #positionX = 0
    #positionY = 0
    #velocity = 0.5
    #sprite = null
    #isController = false
    constructor(config){
        this.#tag = config.tag ?? "GameObjectNull"
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0
        this.#sprite = new Sprite({
            ImageObjectSrc: '/Client/src/images/tx/Player.png',
            posItionX:this.#positionX,
            posItionY:this.#positionY,
            paddingX:[6,0],
            paddingY:[14,0]
        })
        this.#isController = config.isController ?? false

    }

    START(){

    }
    STOP(){

    }

    UPDATE(UpdateEvent){
        if(this.verifyController()){
            this.UpdatePosition(UpdateEvent.keyPress);
        }
        this.#sprite.UPDATE({
            positionX:this.#positionX,
            positionY:this.#positionY
        })
    }

    verifyController(){
        if(!this.#isController) return false
        return true
    }

    UpdatePosition(keyPress){
        if(keyPress.W == true){
            this.#positionY -= this.#velocity * 20
        }
        if(keyPress.S == true){
            this.#positionY += this.#velocity * 10
        }
        if(keyPress.D == true){
            this.#positionX += this.#velocity * 10
        }
        if(keyPress.A == true){
            this.#positionX -= this.#velocity * 10
        }
    }
    DRAW(ctx){

        //ctx.fillStyle = 'white';
        //ctx.fillRect(this.#positionX,this.#positionY,20,20)
        this.#sprite.DRAW(ctx)
    }

}