class GameEngine{
    constructor(){


    }

    START(){

        //entra no loop da engine
        this.UPDATE();
    }

    UPDATE(){
        
        console.log("engine iniciada...")
        requestAnimationFrame(() => this.UPDATE())
    }

    STOP(){

    }
}