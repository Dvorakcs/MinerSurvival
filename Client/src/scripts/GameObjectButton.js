class GameObjectButton{
    #positionX = 0
    #positionY = 0
    #sprite = null
    #EventClick = null

    constructor(config){
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0
        this.#EventClick = document.addEventListener.onclick = (event) => {
            console.log(event)
        }

        this.#sprite = new Sprite({
            ImageObjectSrc: config.src,
            positionX: this.#positionX,
            positionY: this.#positionY,
            paddingX: config.paddingX ?? [0, 0],
            paddingY: config.paddingY ?? [0, 0],
            width: config.width,
            height: config.height,
            isShadow: false
        })
    }


    START(){

    }
    STOP(){

    }
    UPDATE(){

    }
    DRAW(ctx){
        this.sprite.DRAW(ctx)
    }
}