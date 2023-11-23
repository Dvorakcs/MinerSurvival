class Sprite{
    #imageObject = new Image();
    #imageObjectShadow = new Image();
    #positionX = 0
    #positionY = 0
    #width = 0
    #height = 0
    #paddingX = [0,0]
    #paddingY = [0,0]
    #frameX = 0
    #frameY = 0
    #isShadow = false
    constructor(config){
        this.#imageObject.src = config.ImageObjectSrc
        this.#imageObjectShadow.src  = config.ImageObjectShadowSrc ?? ''
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0 
        this.#paddingX = config.paddingX ?? [0,0]
        this.#paddingY = config.paddingY ?? [0,0]
        this.#width = config.width ?? 0
        this.#height = config.height ?? 0
        this.#isShadow = config.isShadow ?? false
    }

    get width(){
        return this.#width + this.#paddingX[1]
    }
    get height(){
        return this.#height + this.#paddingY[1]
    }
    set SetFrameX(value){
        this.#frameX = value;
    }
    set SetFrameY(value){
        this.#frameY = value;
    }
    START(){

    }
    STOP(){

    }
    UPDATE(eventUpdate){
        this.updatePosition(eventUpdate.positionX,eventUpdate.positionY)
    }
    updatePosition(positionX,positionY){
        this.#positionX = positionX
        this.#positionY = positionY
    }
   
    DRAW(ctx){
        if(this.#isShadow){
            ctx.drawImage(this.#imageObjectShadow,
                0,52,
                this.#width ,this.#height,
                this.#positionX - this.#paddingX[0] -5,
                this.#positionY - this.#paddingY[0]+30,
                this.#width,this.#height)
        }
        ctx.drawImage(this.#imageObject,
            this.#frameX * this.#width,this.#frameY * this.#height,    
            this.#width ,this.#height,
            this.#positionX - this.#paddingX[0] ,
            this.#positionY - this.#paddingY[0],
            this.#width,this.#height)
           
          
            
    }
}