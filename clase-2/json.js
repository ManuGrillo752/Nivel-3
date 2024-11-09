const fs = require('fs')

let data = fs.readFileSync('json.json', {encoding: "utf-8"})//Traemos la data como string

data = (JSON.parse(data))//Llevamos la data de string a objeto

data.nombre = 'Raphael'//Cambiamos valores de la data
data.edad = 24
data.comidaFav = 'Sushi'

console.log(data)

data =  JSON.stringify(data)//Llevamos la data de objeto a string de nuevo

fs.writeFileSync('json.json', data)//Guardamos la data

