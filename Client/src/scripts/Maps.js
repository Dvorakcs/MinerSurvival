class Maps{
    id_singlePlayer = null
    #camera = new Camera({
        positionX:0,
        positionY:0,
        isController:true,
        velocity:2.5
    })
    controller = new Controller()
    #tiles = 
    [
        new Tile({
            src: 'https://github.com/Dvorakcs/MinerSurvival/blob/main/Client/src/images/tx/background.png?raw=true',
            positionX:500/2 - 32 * -2,
            positionY:500/2 - 32,
            controllerInverter:true,
            isCollision:true,
            tag:"grass10"
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
            tag:"grass3"
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
    gameObject = [
        new Player({
            positionX:0,
            positionY:0,
            isController:true,
            velocity:0.5,
            id_singlePlayer:0
        }),
        
    ]

    constructor(config){
        this.id_singlePlayer = config.id_singlePlayer ?? 0
        this.loadTile()
    }
    loadTile(){
       
    }
    START(){

    }
    STOP(){

    }
    UPDATE(eventUpdate){     
        Object.values(this.#tiles).forEach(tile => {
            tile.UPDATE({})
           
        })

        Object.values(this.gameObject).forEach( object => {
            object.UPDATE({
                    keyPress:this.controller.keyPress,
                    tiles: this.#tiles 
            })
       })

       const player = this.gameObject.filter(player => player.id_singlePlayer == eventUpdate.id_singlePlayer)[0]
        
        this.#camera.UPDATE({
            positionX:player.PositionX,
            positionY:player.PositionY
        })
    }
    
    DRAW(ctx){
        Object.values(this.#tiles).forEach(tile => {
            tile.DRAW(ctx)
        })
        Object.values(this.gameObject).forEach( object => {
            object.DRAW(ctx)
       })
       
    }
}


