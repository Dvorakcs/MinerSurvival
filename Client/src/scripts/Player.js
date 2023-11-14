class Player extends GameObject{
    constructor(config){
        config.src = '/Client/src/images/tx/Player.png'
        config.srcShadow = '/Client/src/images/tx/Player.png'
        config.width = 32
        config.height = 50
        config.isShadow = true
        super(config)
    }
}