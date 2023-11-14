class Controller{
    #keys = {
        W:false,
        S:false,
        D:false,
        A:false
    }
    constructor(){
        this.keydown = window.addEventListener('keydown', event => this.setKey(event,true))
        this.keyup = window.addEventListener('keyup', event => this.setKey(event,false))

    }

    get keyPress(){
        return this.#keys
    }
    setKey(event,isPressed){
        this.#keys[event.key.toUpperCase()] = isPressed
        console.log(this.#keys)
    }
}