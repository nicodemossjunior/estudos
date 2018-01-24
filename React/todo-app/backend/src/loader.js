const server = require('./config/server')
require('./config/database')

// O Resultado de require é um método. Em seguida é passado o parâmetro 'server' e é invocado o método
require('./config/routes')(server)