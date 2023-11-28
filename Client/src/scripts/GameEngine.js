class GameEngine{
    #ACTIONS = {Menu:true,Game:false};
    #Canvas = document.getElementById('canvas');
    #CTX = this.#Canvas.getContext('2d');
    #menu = null;
    #game = null

    constructor(){
        this.#menu = new Menu();
        this.#game = new Game();
    }

    START(){
        this.#menu.START();
        this.#Canvas.width = window.innerWidth
        this.#Canvas.height = window.innerHeight
        this.UPDATE();
    }

    STOP(){
        this.#menu.STOP();
    }

    UPDATE(){

        this.ClearView()
        if(this.#ACTIONS.Menu){
            this.#menu.UPDATE();
            this.#menu.DRAW(this.#CTX);
            this.StartGame(this.#menu.StartGame);
        }else{
            this.#game.UPDATE();
            this.#game.DRAW(this.#CTX)
        }

        requestAnimationFrame(() => this.UPDATE())
    }
    StartGame(isStart){
       if(isStart){
        this.#Canvas.width = 4000
        this.#Canvas.height = 4000
        this.#ACTIONS.Menu = false
        this.#ACTIONS.Game = true
       }
    }
    ClearView(){
        this.#CTX.clearRect(0,0,4000,4000)
    }
    
}