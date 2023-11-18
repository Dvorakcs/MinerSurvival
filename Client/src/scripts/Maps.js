class Maps extends GameObject{
    controller = new Controller()
    #tiles = []
    gameObject = [
        new Player({
            positionX:500/2 - 32,
            positionY:500/2 - 64,
            isController:true,
            velocity:0.5
        }),
        
    ]


    constructor(config){
        config.src = '/Client/src/images/tx/background.png'
        config.width = 3000
        config.height = 3000
        config.isShadow = false
        config.isController = true
        config.controllerInverter = true
        super(config)
        this.#tiles = config.tiles ?? 
        [
            new Tile({
                positionX:500/2 - 32 * -2,
                positionY:500/2 - 32,
                controllerInverter:true,
                tag:"grass40"
            }),
            new Tile({
                positionX:500/2 - 32 * -2,
                positionY:500/2 - 32 * 2,
                controllerInverter:true,
                tag:"grass40"
            }),
            new Tile({
                positionX:500/2 - 32 * -2,
                positionY:500/2 - 32 *0,
                controllerInverter:true,
                tag:"grass40"
            }),
            new Tile({
                positionX:500/2 - 32 * -1,
                positionY:500/2 - 32,
                controllerInverter:true,
                tag:"grass40"
            }),
            new Tile({
                positionX:500/2 - 32 * 0,
                positionY:500/2 - 32,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32,
                positionY:500/2 - 32,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 2,
                positionY:500/2 - 32,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 3,
                positionY:500/2 - 32,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 4,
                positionY:500/2 - 32,
                controllerInverter:true
            }),

            new Tile({
                positionX:500/2 - 32 * -1,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 0,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 2,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 3,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 4,
                positionY:500/2 - 32 * 2,
                controllerInverter:true
            }),


            new Tile({
                positionX:500/2 - 32 * -1,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 0,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 2,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 3,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 4,
                positionY:500/2 - 32 * 3,
                controllerInverter:true
            }),


            new Tile({
                positionX:500/2 - 32 * -1,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 0,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 2,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 3,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            }),
            new Tile({
                positionX:500/2 - 32 * 4,
                positionY:500/2 - 32 * 4,
                controllerInverter:true
            })
        ]
    }
    START(){

    }
    STOP(){

    }
    UPDATE(){
        this.UpdatePosition(this.controller.keyPress);
        this.updateSpritePosition()
        Object.values(this.#tiles).forEach(tile => {
            tile.UPDATE({})
            tile.UpdatePosition(this.controller.keyPress);
            tile.updateSpritePosition()

        })

        Object.values(this.gameObject).forEach( object => {
            object.UPDATE({
                    keyPress:this.controller.keyPress,
                    tiles: this.#tiles 
            })
       })
    }
    
    DRAW(ctx){
        this.sprite.DRAW(ctx)
        Object.values(this.#tiles).forEach(tile => {
            tile.DRAW(ctx)
        })

        Object.values(this.gameObject).forEach( object => {
            object.DRAW(ctx)
       })
       
    }
}


