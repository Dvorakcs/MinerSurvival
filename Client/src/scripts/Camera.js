class Camera extends GameObject{
    #ctx = null
    constructor(config){
        config.src = ''
        config.isShadow = false
       super(config)
       this.#ctx = config.ctx || document.getElementById('canvas').getContext('2d')
    }

    UPDATE(eventUpdate){
            this.PositionX = eventUpdate.positionX *= 5
            this.PositionY = eventUpdate.positionY *= 5
            this.#ctx.setTransform(5,0,0,5,-this.PositionX + 2000,-this.PositionY + 1000);
    }

    DRAW(){

    
    }

}