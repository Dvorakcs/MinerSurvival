class GameObjectButton{
    #positionX = 0
    #positionY = 0
    #positionXText = 0
    #positionYText = 0
    #sprite = null
    #isClicked = false
    #EventClick = null
    #width = 0
    #height = 0
    TimeGame = 0
    #text = "text null"
    #FrameTime = 0
    #Frame

    constructor(config){
        this.#positionX = config.positionX ?? 0
        this.#positionY = config.positionY ?? 0
        this.#positionXText = config.positionXText ?? 0
        this.#positionYText = config.positionYText ?? 0
        this.#text = config.text ?? "text null"
        this.#EventClick = document.addEventListener('click', (event) => this.ClickButton(event))
        this.#width = config.width,
        this.#height = config.height,
        this.#sprite = new Sprite({
            ImageObjectSrc: config.src,
            positionX: this.#positionX,
            positionY: this.#positionY,
            paddingX: config.paddingX ?? [0, 0],
            paddingY: config.paddingY ?? [0, 0],
            width: config.width,
            height: config.height,
            positionXImageFrame:0,
            positionYImageFrame:32,
            isShadow: false
        })

        
    }

    ClickButton(event){
        if(this.#positionX + this.#width >= event.x && 
            this.#positionX <= event.x && 
            this.#positionY + this.#height >= event.y &&
            this.#positionY <= event.y){
                this.#isClicked = true
        }
       
    }

    START(){

    }
    STOP(){

    }
    UPDATE(UpdateEvent){

       

        
        if(this.#isClicked){
            this.UpdateFrameAnimation()
            return true
        }

        return false
    }
    UpdateFrameAnimation() {

        this.#FrameTime++;
        console.log(this.#FrameTime)
        if(this.#FrameTime >= 3){
            this.#FrameTime = 0
            this.#sprite.SetFrameY = 1
            this.#sprite.SetPositionYImageFrame  = this.#sprite.PositionYImageFrame + 11
        }
       
        if(this.#sprite.PositionYImageFrame >= 54){
            this.#sprite.SetPositionYImageFrame = 32
            this.#isClicked = false
            this.#FrameTime = 0

        }
    }
    DRAW(ctx){
        this.#sprite.SetFrameX = 1
        this.#sprite.SetFrameY = 6
        
        this.#sprite.DRAW(ctx)
        ctx.fillStyle = "black"
        ctx.font = "18px serif";
        ctx.fillText(this.#text, this.#positionXText, this.#positionYText + 18)
    }
}