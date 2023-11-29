class GameObjectInput{
    #text = ''
    #textResult = ''
    #positionX = 0
    #positionY = 0
    #width = 0
    #height = 0
    #EventClick = null
    #EventKeys = null
    #isClicked = false
    #placeHolder = ''
    constructor(config){
        this.#positionX = config.positionX
        this.#positionY = config.positionY
        this.#width = config.width
        this.#height = config.height
        this.#placeHolder = config.placeholder
        this.#EventClick = document.addEventListener('click', (event) => this.#ClickInput(event))
        this.#EventKeys = document.addEventListener('keydown', (event) => this.#SetKeyPress(event.key))
    }

    START(){

    }
    STOP(){
        
    }
    UPDATE(){
        if(this.#isClicked){
            this.#textResult = this.#text
        }else if(this.#text == ""){
            this.#textResult = this.#placeHolder
        }
        return this.#textResult;
    }
    #SetKeyPress(event){
        if(this.#isClicked){
            if(event == 'space'){
                this.#text += " "
            }else if(event == 'Backspace' ){
                this.#text = this.#text.substring(0, this.#text.length - 1)
            }else{
                this.#text += event
            }
            
             
        }
    }
    #ClickInput(event){
        if(this.#positionX + this.#width >= event.x && 
            this.#positionX <= event.x && 
            this.#positionY + this.#height >= event.y &&
            this.#positionY <= event.y){
                this.#isClicked = true
        }else{
            this.#isClicked = false
        }
       
    }
    DRAW(ctx){

        ctx.fillStyle = 'white'
        ctx.fillRect(this.#positionX,this.#positionY,this.#width,this.#height)

        ctx.fillStyle = "black"
        ctx.font = "18px serif";
        ctx.fillText(this.#textResult, this.#positionX, this.#positionY +18)
        
    }
}