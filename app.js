const argv = require('./yargs.config')

const base = argv.base
const limit = argv.limit

let output = `Tabla del ${base} \n`

for(let i = 1; i <= limit; i++){
  output += `\t ${base} x ${i} = ${base * i} \n` 
}

console.clear();
console.log(output)
