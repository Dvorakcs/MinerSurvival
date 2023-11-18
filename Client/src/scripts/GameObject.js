class GameObject {
    #tag = undefined
    #positionX = 0
    #positionY = 0
    #direction = 'RIGHT'
    #velocity = 0.5
    sprite = null
    #isController = false
    #isCollision = false
    #controllerInverter = false
    
    constructor(config) {
        this.#tag = config.tag ?? "GameObjectNull"
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0
        this.#isCollision = config.isCollision ?? false
        this.sprite = new Sprite({
            ImageObjectSrc: config.src,
            ImageObjectShadowSrc: config.srcShadow,
            positionX: this.#positionX,
            positionY: this.#positionY,
            paddingX: config.paddingX ?? [0, 0],
            paddingY: config.paddingY ?? [0, 0],
            width: config.width,
            height: config.height,
            isShadow: config.isShadow
        })
        this.#isController = config.isController ?? false
        this.#controllerInverter = config.controllerInverter ?? false
        this.#velocity = config.velocity ?? 0.5

    }
    get Tag() {
        return this.#tag
    }
    get PositionX() {
        return this.#positionX
    }
    get PositionY() {
        return this.#positionY
    }
    set PositionX(value) {
        this.#positionX = value
    }
    set PositionY(value) {
        this.#positionY = value
    }
    set velocity(value){
        this.#velocity = value
    }
    get isCollision() {
        return this.#isCollision;
    }
    START() {

    }
    STOP() {

    }

    UPDATE(UpdateEvent) {

        if (this.verifyCollision()) {

            if (this.onCollision(UpdateEvent.tiles)) {
                switch (this.#direction) {
                    case 'RIGHT':
                        this.#positionX -= this.#velocity * 5
                        break;
                    case 'LEFT':
                        this.#positionX += this.#velocity * 5
                        break;
                    case 'UP':
                        this.#positionY += this.#velocity * 5
                        break;
                    case 'DOWN':
                        this.#positionY -= this.#velocity * 5
                        break;
                }


                return
            }
        }

        if (this.verifyController()) {
            this.UpdatePosition(UpdateEvent.keyPress);
            this.UpdateFrameAnimation()
        }
        this.updateSpritePosition()
    }

    updateSpritePosition() {
        this.sprite.UPDATE({
            positionX: this.#positionX,
            positionY: this.#positionY
        })
    }
    verifyCollision() {
        return this.#isCollision
    }
    onCollision(tiles) {
        let onCollision = false
       
        if (tiles) {
            tiles.forEach((tile) => {
                if (tile.isCollision) {

                    if (tile.PositionX + tile.sprite.width >= this.#positionX &&
                        tile.PositionX <= this.#positionX + this.sprite.width &&
                        tile.PositionY + tile.sprite.height >= this.#positionY &&
                        tile.PositionY <= this.#positionY + this.sprite.height
                    ) {

                        onCollision = true
                        
                    }

                   
                }
               
            });

        }
        return onCollision

    }
    verifyController() {
        return this.#isController || this.#controllerInverter
    }

    UpdatePosition(keyPress) {

        if (this.#controllerInverter) {
            if (keyPress.D == true) {
                this.#positionX -= this.#velocity * 5
                this.#direction = 'RIGHT'
            }else
            if (keyPress.A == true) {
                this.#positionX += this.#velocity * 5
                this.#direction = 'LEFT'
            }else
            if (keyPress.W == true) {
                this.#positionY += this.#velocity * 5
                this.#direction = 'UP'
            }else
            if (keyPress.S == true) {
                this.#positionY -= this.#velocity * 5
                this.#direction = 'DOWN'
            }
            return
        }

        if (keyPress.D == true) {
            this.#positionX += this.#velocity * 5
            this.#direction = 'RIGHT'
        } else
            if (keyPress.A == true) {
                this.#positionX -= this.#velocity * 5
                this.#direction = 'LEFT'
            } else
                if (keyPress.W == true) {
                    this.#positionY -= this.#velocity * 5
                    this.#direction = 'UP'
                } else
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
        if (this.#tag == 'none') {
            return
        }
        this.sprite.DRAW(ctx)
    }

}