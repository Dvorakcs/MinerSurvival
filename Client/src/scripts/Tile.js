class Tile extends GameObject {

    constructor(config) {
        config.src = '/Client/src/images/tx/TileSetGrass.png'
        config.width = 32
        config.height = 32
        config.isShadow = false

        super(config)
    }


    UPDATE(UpdateEvent) {

        switch (this.Tag) {
            case "grass":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 1
                break;
            default:
                console.error(`don't exist tag: ${this.Tag}`)
                break;
        }


        this.sprite.UPDATE({
            positionX: this.PositionX,
            positionY: this.positionY
        })
    }
}