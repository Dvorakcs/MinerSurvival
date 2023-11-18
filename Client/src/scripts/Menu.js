class Menu{
    constructor(){

    }

    START(){

    }
    STOP(){
        
    }
    UPDATE(){

    }
    DRAW(ctx){
        this.backgroundFill(ctx)
       return true
    }
    backgroundFill(ctx){
        ctx.fillStyle = '#ff71ce'
        ctx.fillRect(0,0,500,500);
    }
}