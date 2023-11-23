class Player extends GameObject{
    id_singlePlayer = null
    constructor(config){
        config.src = 'https://github.com/Dvorakcs/MinerSurvival/blob/main/Client/src/images/tx/Player.png?raw=true'
        config.srcShadow = 'https://github.com/Dvorakcs/MinerSurvival/blob/main/Client/src/images/tx/Player.png?raw=true'
        config.width = 32
        config.height = 50
        config.isShadow = true
        config.isCollision = true
        config.paddingX  = [4,-10]
        config.paddingY  = [36,-35]
        config.velocity = config.velocity ?? 0.0
        super(config)
        this.id_singlePlayer = config.id_singlePlayer
    }

    
}