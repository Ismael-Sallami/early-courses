//Alertas

alert("Hola soy Ismael Sallami");

//Variables

//Hay varios tipos de variables en Java, la mayoría se aconsejan que sean con let porque son los mas utilizados
//Debido a que tienen un mayor rendimiento

let nombre= "Ismael";
nombre="Ismael";

//Mostrar por consola

console.log(nombre);

//Constantes
const altura = 187;
const apellido = "Sallami";
//A las constantes no se les pueden modificar el valor

// concatenación

let concatenacion = nombre + " " + apellido;

//Podemos unir varias variables en JavaScript

//Seleccionar elementos de la pág

let datos = document.querySelector("#datos")
datos.innerHTML = `
    <h1> Soy la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} ${apellido} </h2>
    <h3> Mido: ${altura} </h3>
`;

/*En vez de poner $ {nombre} $ {apellido} podemos poner $ {concatenacion}*/

/**
 * El hecho de poner query selector es para seleccionar la clase o objeto 
 * en función de su identificador*
 * Después, la función innerHTML es para introducir el código en lenguaje html 
 * que queremos que se muestre 
 * en la web creada con Java
 * 
 * /
 *
*/
//Condiciones

let n=185;

if(n>=185){
    datos.innerHTML += "<h1> Eres una persona alta</h1>"
    //Concatena lo que antes había en innerHTML con dicha condición
}else{
    datos.innerHTML += "<h1>Eres una persona baja </h1>"
}

//Bucles

for(let year = 2000; year <= 2024; year++){
    //Similar al de c++
    datos.innerHTML  += "<h2>Estamos en el año: " + year + "</h2>";
    //en vez de sumar todo podemos poner '' y la variable con dolar y corchetes
}

//Array

let nombres = ["Ismael","Pepe"];

let divNombres = document.querySelector("#nombres");

//divNombres.innerHTML = nombres[0];

divNombres.innerHTML = "<h1>Listado de nombres</h1>";

nombres.forEach(nombre => {
    divNombres.innerHTML += "<li>"+nombre+"</li>";
});

/*Los foreach son similares  a los for pero con ligeras diferencias*/

//Esta es la manera en la que se recorren los de python

for(let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>";
}

//Funciones

// const miInformacion= (nombre,altura) =>{
//     let misDatos =`
//         <h1> Soy la caja de datos </h1>
//         <h2> Mi nombre es: ${nombre} ${apellido} </h2>
//         <h3> Mido: ${altura} </h3>
//     `;

//     return misDatos;
// } 

// console.log(miInformacion("Ismael", 182));

// //Esto no lo imprime de manera correcta, para ello debemos de realizar de la manera
// //correcta para poder verlo en nuestra pantalla

// const Imprimir = () => {
//     let datos = document.querySelector("#datos");
//     datos.innerHTML = miInformacion("Ismael Moreno",182);
// }

// Imprimir();

//Como podemos ver las funciones son similares a las de c++, varía en cuanto
//a la sintaxis pero de manera muy ligera


//Lo de arriba esta documentado para poder seguir probando otros métodos

//Objetos Json o los objetos literales

var coche = {
    modelo: 'Mercedes',
    maxima: 500,
    antiguedad: 2020,
    //Dentro también podemos crear funciones y métodos
    mostrarDatos(){
        console.log(this.modelo, this.maxima,this.antiguedad);
    },
    propiedad: "valor aleatorio"

};

document.open();
document.write("<h1>" + coche.modelo + "</h1>");
document.close();

coche.mostrarDatos();

//Tambien para ver lo que tiene podemos hacer, pero de esta manera muestra más datos:

console.log(coche)


//PROMESAS

//Se trata de un valor que puede estar disponible ahora, en el futuro o nunca.

//Con esto podemos capturar cuando la petición de un servicio es aceptado o rechazada, 
//o multitud de cosas más

var saludar = new Promise ((resolve, reject) => {
    setTimeout(() => {
        let saludo = "Hola muy buenas a todos chavales!!!";

        if (saludo){
            resolve(saludo)
            //me muestre saludo si lo hay
        }
        else {
            reject('No hay saludo disponible')
        }
    }, 2000);
    //Se espera unos segundos a que algo se ejecute, en este caso ponemos 2 seg como 2000 
});

saludar.then(resultado => {
    alert(resultado);
    //muestro resultado porque dentro tengo el saludo
})
.catch(err => {
    alert(err); //Err es lo que devuelve reject
});

//Básicamente en esta parte se muestra como tratar una alerta, es decir, que nos salga una ventana.
//transcurrido un pequeño tiempo, en este caso 2 seg