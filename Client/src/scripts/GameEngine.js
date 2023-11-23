class GameEngine{
    #ACTIONS = {Menu:false,Game:true};
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
        this.#Canvas.width = 4000
        this.#Canvas.height = 4000
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
        }else{
            this.#game.UPDATE();
            this.#game.DRAW(this.#CTX)
        }

        requestAnimationFrame(() => this.UPDATE())
    }

    ClearView(){
        this.#CTX.clearRect(0,0,4000,4000)
    }
    
}