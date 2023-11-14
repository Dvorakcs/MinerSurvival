class GameObject {
    #tag = undefined
    #positionX = 0
    #positionY = 0
    #direction = 'RIGHT'
    #velocity = 0.5
    sprite = null
    #isController = false
    constructor(config) {
        this.#tag = config.tag ?? "GameObjectNull"
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0
        this.sprite = new Sprite({
            ImageObjectSrc: config.src,
            ImageObjectShadowSrc:config.srcShadow,
            posItionX: this.#positionX,
            posItionY: this.#positionY,
            paddingX: [6, 0],
            paddingY: [14, 0],
            width:config.width,
            height:config.height,
            isShadow:config.isShadow
        })
        this.#isController = config.isController ?? false

    }
    get Tag(){
        return this.#tag
    }
    get PositionX(){
        return this.#positionX
    }
    get positionY(){
        return this.#positionY
    }
    
    START() {

    }
    STOP() {

    }

    UPDATE(UpdateEvent) {
        if (this.verifyController()) {
            this.UpdatePosition(UpdateEvent.keyPress);
            this.UpdateFrameAnimation()
        }
        this.sprite.UPDATE({
            positionX: this.#positionX,
            positionY: this.#positionY
        })
    }

    verifyController() {
        if (!this.#isController) return false
        return true
    }

    UpdatePosition(keyPress) {
        
        if (keyPress.D == true) {
            this.#positionX += this.#velocity * 5
            this.#direction = 'RIGHT'
        }
        if (keyPress.A == true) {
            this.#positionX -= this.#velocity * 5
            this.#direction = 'LEFT'
        }
        if (keyPress.W == true) {
            this.#positionY -= this.#velocity * 5
            this.#direction = 'UP'
        }
        if (keyPress.S == true) {
            this.#positionY += this.#velocity * 5
            this.#direction = 'DOWN'
        }
    }

    UpdateFrameAnimation() {

        switch (this.#direction) {
            case 'UP':  
                this.sprite.SetFrameX = 1
                break;
            case 'DOWN':
                this.sprite.SetFrameX = 0
                break
            case 'RIGHT':
                this.sprite.SetFrameX = 3
                break
            case 'LEFT':
                this.sprite.SetFrameX = 2
                break
        }
    }
    DRAW(ctx) {

        //ctx.fillStyle = 'white';
        //ctx.fillRect(this.#positionX,this.#positionY,20,20)
        this.sprite.DRAW(ctx)
    }

}