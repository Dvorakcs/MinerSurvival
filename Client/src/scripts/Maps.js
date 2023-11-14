class Maps {
    #tiles = []
    constructor(config){
        this.#tiles = config.tiles ?? [
            new Tile({
                positionX:20,
                positionY:20,
            }),
            new Tile({
                positionX:52,
                positionY:20,
            }),
            new Tile({
                positionX:84,
                positionY:20,
            }),
            new Tile({
                positionX:116,
                positionY:20,
            }),
            new Tile({
                positionX:148,
                positionY:20,
            }),
            new Tile({
                positionX:20,
                positionY:52,
            }),
            new Tile({
                positionX:52,
                positionY:52,
            }),
            new Tile({
                positionX:84,
                positionY:52,
            }),
            new Tile({
                positionX:116,
                positionY:52,
            }),
            new Tile({
                positionX:148,
                positionY:52,
            }),
            new Tile({
                positionX:20,
                positionY:84,
            }),
            new Tile({
                positionX:52,
                positionY:84,
            }),
            new Tile({
                positionX:84,
                positionY:84,
            }),
            new Tile({
                positionX:116,
                positionY:84,
            }),
            new Tile({
                positionX:20,
                positionY:116,
            }),
            new Tile({
                positionX:52,
                positionY:116,
            }),
            new Tile({
                positionX:84,
                positionY:116,
            }),
            new Tile({
                positionX:116,
                positionY:116,
            }),
            new Tile({
                positionX:20,
                positionY:148,
            }),
            new Tile({
                positionX:52,
                positionY:148,
            }),
            new Tile({
                positionX:84,
                positionY:148,
            }),
            new Tile({
                positionX:116,
                positionY:148,
            }),
        ]
    }

    START(){

    }
    STOP(){

    }
    UPDATE(){
        Object.values(this.#tiles).forEach(tile => {
            tile.UPDATE({})
        })
    }
    DRAW(ctx){
        Object.values(this.#tiles).forEach(tile => {
            tile.DRAW(ctx)
        })
    }
}


