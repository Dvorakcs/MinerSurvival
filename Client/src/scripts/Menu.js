class Menu{
    StartGame = false;
    PlayerName = '';
    #buttonStart = null
    #buttonLogin = null
    #InputName = null
    constructor(){
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.#buttonStart = new GameObjectButton({
            src: 'https://raw.githubusercontent.com/Dvorakcs/MinerSurvival/main/Client/src/images/Menu/UI_Flat_BUTTON.png',
            text:"Login",
            positionX:550,
            positionY:250,
            width:95,
            height:32,
            positionXText: 577,
            positionYText: 250
        })
        this.#InputName = new GameObjectInput({
            positionX:535,
            positionY:220,
            width:120,
            height:22,
            placeholder:" name"
        })
    }

    START(){

    }
    STOP(){
        
    }
    UPDATE(){
       this.StartGame = this.#buttonStart.UPDATE({})
        this.PlayerName = this.#InputName.UPDATE({})
       // console.log(this.PlayerName)
    }
    DRAW(ctx){
        this.backgroundFill(ctx)
        this.#buttonStart.DRAW(ctx);
        this.#InputName.DRAW(ctx);
       return true
    }
    backgroundFill(ctx){
        ctx.fillStyle = 'black'
        
        ctx.fillRect(0,0,this.width,this.height);

        ctx.fillStyle = "white"
        ctx.font = "18px serif";
        ctx.fillText("Menu", 570, 200)

    }
}