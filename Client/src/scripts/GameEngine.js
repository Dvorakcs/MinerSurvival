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
            this.StartGame(this.#menu.StartGame, this.#menu.PlayerName);
        }else{
            this.#game.UPDATE();
            this.#game.DRAW(this.#CTX)
        }

        requestAnimationFrame(() => this.UPDATE())
    }
    StartGame(isStart,playerName){
       if(isStart){
        this.#Canvas.width = 4000
        this.#Canvas.height = 4000
        this.#ACTIONS.Menu = false
        this.#ACTIONS.Game = true
        this.#game.START(playerName);
       }
    }
    ClearView(){
        this.#CTX.clearRect(0,0,4000,4000)
    }
    
}