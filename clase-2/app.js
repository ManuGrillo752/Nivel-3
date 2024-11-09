const validator = require('validator')

const chalk = require('chalk')

const nodemon = require('nodemon')

function adivinanza(numero){
    if(numero == 10){
        console.log(chalk.green('¡Correcto!'))
    }else{
        console.log(chalk.red('Incorrecto'))
    }
}
console.log(adivinanza(10))