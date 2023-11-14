class Sprite{
    #ImageObject = new Image();
    #PositionX = 0
    #PositionY = 0
    #PaddingX = [0,0]
    #PaddingY = [0,0]
    constructor(config){
        this.#ImageObject.src = config.ImageObjectSrc
        this.#PositionX = config.positionX ?? 0
        this.#PositionY = config.positionY ?? 0 
        this.#PaddingX = config.paddingX ?? [0,0]
        this.#PaddingY = config.paddingY ?? [0,0]
    }


    START(){

    }
    STOP(){

    }
    UPDATE(eventUpdate){
        this.updatePosition(eventUpdate.positionX,eventUpdate.positionY)
    }
    updatePosition(positionX,positionY){
        this.#PositionX = positionX
        this.#PositionY = positionY
    }
    DRAW(ctx){
            ctx.drawImage(this.#ImageObject,this.#PositionX - this.#PaddingX[0],this.#PositionY - this.#PaddingY[0])
    }
}