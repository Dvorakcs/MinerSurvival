class Tile extends GameObject {

    constructor(config) {
        config.src = '/Client/src/images/tx/TileSetGrass.png'
        config.width = 32
        config.height = 32
        config.isShadow = false
        super(config)
    }


    UPDATE(UpdateEvent) {
        
        this.SelectTypeTile()
        this.sprite.UPDATE({
            positionX: this.PositionX,
            positionY: this.PositionY
        })
    }

    SelectTypeTile(){
        switch (this.Tag) {
            case "grass":
                this.sprite.SetFrameX = 0
                this.sprite.SetFrameY = 0
                break;
            case "grass11":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 0
                break;
            case "grass2":
                this.sprite.SetFrameX = 2
                this.sprite.SetFrameY = 0
                break;
            case "grass3":
                this.sprite.SetFrameX = 3
                this.sprite.SetFrameY = 0
                break;
            case "grass4":
                this.sprite.SetFrameX = 4
                this.sprite.SetFrameY = 0
                break;
            case "grass5":
                this.sprite.SetFrameX = 5
                this.sprite.SetFrameY = 0
                break;
            case "grass6":
                this.sprite.SetFrameX = 6
                this.sprite.SetFrameY = 0
                break;
            case "grass7":
                this.sprite.SetFrameX = 7
                this.sprite.SetFrameY = 0
                break;

            case "grass8":
                this.sprite.SetFrameX = 0
                this.sprite.SetFrameY = 1
                break;
            case "grass9":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 1
                break;
            case "grass10":
                this.sprite.SetFrameX = 2
                this.sprite.SetFrameY = 1
                break;
            case "grass11":
                this.sprite.SetFrameX = 3
                this.sprite.SetFrameY = 1
                break;
            case "grass12":
                this.sprite.SetFrameX = 4
                this.sprite.SetFrameY = 1
                break;
            case "grass13":
                this.sprite.SetFrameX = 5
                this.sprite.SetFrameY = 1
                break;
            case "grass14":
                this.sprite.SetFrameX = 6
                this.sprite.SetFrameY = 1
                break;
            case "grass15":
                this.sprite.SetFrameX = 7
                this.sprite.SetFrameY = 1
                break;

            case "grass16":
                this.sprite.SetFrameX = 0
                this.sprite.SetFrameY = 2
                break;
            case "grass17":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 2
                break;
            case "grass18":
                this.sprite.SetFrameX = 2
                this.sprite.SetFrameY = 2
                break;
            case "grass19":
                this.sprite.SetFrameX = 3
                this.sprite.SetFrameY = 2
                break;
            case "grass20":
                this.sprite.SetFrameX = 4
                this.sprite.SetFrameY = 2
                break;
            case "grass21":
                this.sprite.SetFrameX = 5
                this.sprite.SetFrameY = 2
                break;
            case "grass22":
                this.sprite.SetFrameX = 6
                this.sprite.SetFrameY = 2
                break;
            case "grass23":
                this.sprite.SetFrameX = 7
                this.sprite.SetFrameY = 2
                break;

            case "grass24":
                this.sprite.SetFrameX = 0
                this.sprite.SetFrameY = 3
                break;
            case "grass25":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 3
                break;
            case "grass26":
                this.sprite.SetFrameX = 2
                this.sprite.SetFrameY = 3
                break;
            case "grass27":
                this.sprite.SetFrameX = 3
                this.sprite.SetFrameY = 3
                break;
            case "grass28":
                this.sprite.SetFrameX = 4
                this.sprite.SetFrameY = 3
                break;
            case "grass29":
                this.sprite.SetFrameX = 5
                this.sprite.SetFrameY = 3
                break;
            case "grass30":
                this.sprite.SetFrameX = 6
                this.sprite.SetFrameY = 3
                break;
            case "grass31":
                this.sprite.SetFrameX = 7
                this.sprite.SetFrameY = 3
                break;


            case "grass32":
                this.sprite.SetFrameX = 0
                this.sprite.SetFrameY = 4
                break;
            case "grass33":
                this.sprite.SetFrameX = 1
                this.sprite.SetFrameY = 4
                break;
            case "grass34":
                this.sprite.SetFrameX = 2
                this.sprite.SetFrameY = 4
                break;
            case "grass35":
                this.sprite.SetFrameX = 3
                this.sprite.SetFrameY = 4
                break;
            case "grass36":
                this.sprite.SetFrameX = 4
                this.sprite.SetFrameY = 4
                break;
            case "grass37":
                this.sprite.SetFrameX = 5
                this.sprite.SetFrameY = 4
                break;
            case "grass38":
                this.sprite.SetFrameX = 6
                this.sprite.SetFrameY = 4
                break;
            case "grass39":
                this.sprite.SetFrameX = 7
                this.sprite.SetFrameY = 4
                break;

                case "grass40":
                    this.sprite.SetFrameX = 0
                    this.sprite.SetFrameY = 5
                    break;
                case "grass41":
                    this.sprite.SetFrameX = 1
                    this.sprite.SetFrameY = 5
                    break;
                case "grass42":
                    this.sprite.SetFrameX = 2
                    this.sprite.SetFrameY = 5
                    break;
                case "grass43":
                    this.sprite.SetFrameX = 3
                    this.sprite.SetFrameY = 5
                    break;
                case "grass44":
                    this.sprite.SetFrameX = 4
                    this.sprite.SetFrameY = 5
                    break;
                case "grass45":
                    this.sprite.SetFrameX = 5
                    this.sprite.SetFrameY = 5
                    break;
                case "grass46":
                    this.sprite.SetFrameX = 6
                    this.sprite.SetFrameY = 5
                    break;
                case "grass47":
                    this.sprite.SetFrameX = 7
                    this.sprite.SetFrameY = 5
                    break;
                    case "grass40":
                        this.sprite.SetFrameX = 0
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass41":
                        this.sprite.SetFrameX = 1
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass42":
                        this.sprite.SetFrameX = 2
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass43":
                        this.sprite.SetFrameX = 3
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass44":
                        this.sprite.SetFrameX = 4
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass45":
                        this.sprite.SetFrameX = 5
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass46":
                        this.sprite.SetFrameX = 6
                        this.sprite.SetFrameY = 5
                        break;
                    case "grass47":
                        this.sprite.SetFrameX = 7
                        this.sprite.SetFrameY = 5
                        break;
            default:
               
                break;
        }
    }
}