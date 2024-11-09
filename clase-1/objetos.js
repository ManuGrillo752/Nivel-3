let objeto = {
    nombre: 'Manuel',
    edad: 18, 
    comidaFav: 'sushi',
    saludar: function(nombre){
        return 'Hola' + ' ' + nombre
    },
    presentacion: function(){
        return 'Hola, mi nombre es ' + this.nombre
    },
    añoNacer: function(actual){
        return actual - this.edad
    }


}

let{nombre, edad} = objeto //Destructuring

if(nombre == 'Manuel' && edad == 18){
    console.log('Soy yo')
}

