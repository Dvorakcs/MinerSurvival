class GameManager {
    Players = []
    id_singlePlayer = 0
    ACTIONS = {
        CreatePlayer : "CreatePlayer",
        UpdatePosition : "UpdatePosition"
    }
    constructor() {
        this.socket = new WebSocket('wss:notch-early-sprint.glitch.me/');

    }
    get Players() {
        return this.Players
    }
    get Id_singlePlayer() {
        return this.id_singlePlayer
    }
    setupWebSocket(playerName) {
        this.socket.addEventListener('open', (event) => {
            console.log('Connection...');
            this.sendPlayerData({
                actions: "CreatePlayer",
                player: playerName
            });
        });

        this.socket.addEventListener('message', (event) => {
            debugger
            var data = JSON.parse(event.data)
            var p = data.id_singlePlayer
            switch (data.actions) {
                case this.ACTIONS.CreatePlayer:
                    this.id_singlePlayer = p
                    break;
                case this.ACTIONS.UpdatePosition:
                    this.Players = []
                    debugger
                    const data = JSON.parse(event.data)
                    const players = data.players
                    this.id_singlePlayer = data.id_singlePlayer
                    
                    Object.values(players).forEach((player) => {
                        if (player.id_singlePlayer == this.id_singlePlayer) {
                            this.Players.push(new Player({
                                positionX: player.positionX,
                                positionY: player.positionY,
                                id_singlePlayer: player.id_singlePlayer,
                                velocity: 0.5,
                                isController: true,
                                direction: player.direction,
                                tag:'player',
                                playerName:player.playerName
                            }))
                        } else {
                            this.Players.push(new Player({
                                positionX: player.positionX,
                                positionY: player.positionY,
                                id_singlePlayer: player.id_singlePlayer,
                                direction: player.direction,
                                tag:'player',
                                playerName:player.playerName
                            }))
                        }
                    })        
                    break;

                default:
                    break;
            }
        });

        this.socket.addEventListener('close', (event) => {
            console.log('Conexão WebSocket fechada:', event.code, event.reason);

        });

        this.socket.addEventListener('error', (error) => {
            console.error('Erro na conexão WebSocket:', error);

        });
    }

    START(playerName) {
        this.setupWebSocket(playerName);
    }
    sendPlayerData(playerData) {
        if (this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(JSON.stringify(playerData));
        } else {
            console.error('WebSocket connection is not open.');
        }
    }
}

