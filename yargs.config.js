const argv = require('yargs')
    .options({
      b: {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: "Base de la multiplicacion"
      },
      l: {
        alias: 'limit',
        type: 'number',
        default: 10,
        description: "Valor maximo del multiplicador"
      }
    })
    .check((argv, _options) => {
      if(isNaN(argv.base)) throw 'La base tiene que ser numerica'
      if(isNaN(argv.limit)) throw 'El limite tiene que ser numerica'
      return true
    })
    .argv
;

module.exports = argv;