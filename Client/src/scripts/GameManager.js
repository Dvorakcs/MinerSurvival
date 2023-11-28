class GameManager {
    Players = []
    id_singlePlayer = 0
    constructor() {
        this.socket = new WebSocket('ws:localhost:3000');
        
    }
    get Players(){
        return this.Players
    }
    get Id_singlePlayer(){
        return this.id_singlePlayer
    }
    setupWebSocket() {
        debugger
        this.socket.addEventListener('open', (event) => {
            console.log('Conexão WebSocket estabelecida.');
            
            this.sendPlayerData({ player: 'Player1' });
        });

        this.socket.addEventListener('message', (event) => {
            this.Players = []
            debugger
            const data = JSON.parse(event.data)
            const players =  data.players
            this.id_singlePlayer =  data.id_singlePlayer
          Object.values(players).forEach((player) => {
            if(player.id_singlePlayer == this.id_singlePlayer){
                this.Players.push(new Player({
                    positionX:player.positionX,
                    positionY:player.positionY,
                    id_singlePlayer: player.id_singlePlayer,
                    velocity:0.5,
                    isController:true,
                    direction:player.direction
                 }))
            }else{
                 this.Players.push(new Player({
                    positionX:player.positionX,
                    positionY:player.positionY,
                    id_singlePlayer: player.id_singlePlayer,
                    direction:player.direction,
                   
                 })) 
            }
          })        
        });

        this.socket.addEventListener('close', (event) => {
            console.log('Conexão WebSocket fechada:', event.code, event.reason);
            
        });

        this.socket.addEventListener('error', (error) => {
            console.error('Erro na conexão WebSocket:', error);
            
        });
    }

    START(){
        this.setupWebSocket();
    }
    sendPlayerData(playerData) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(playerData));
        } else {
            console.error('WebSocket connection is not open.');
        }
    }
}

