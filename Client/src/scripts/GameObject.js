class GameObjects{
    tamanho = 16;
    constructor(config){
        this.posicao = config.posicao;
    
    }

    Update(UpdateEvents){

    }

    Draw(ctx){
        ctx.fillStyle = 'white'
        ctx.fillRect(this.posicao.x,this.posicao.y,this.tamanho,this.tamanho)
    }
}