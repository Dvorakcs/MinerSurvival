const app = require('./app')
const appWs = require('./app-ws')

const server  = app.listen(process.env.PORT || 3000, () => {
    console.log('app Express ins Running!')
})

appWs(server);