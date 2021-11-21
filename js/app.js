//Uso de funciones, pedimos al usuario los valores de los parametros de dicha función a ejecutar
const primerValor = prompt('Introduce el primer Valor a calcular')
const segundoValor = prompt('Introduce el segundo valor a calcular')

//Funcion expresada, anexamos 2 parametros 
const calcular = ( numero1,numero2 ) => {
    return numero1 * numero2;
} 
// Guardamos en una constante el resultado de la función 
const resultado = calcular( primerValor,segundoValor );

//Imprimir la variable que guarda la funcion que resive los parametros
console.log(resultado)

//Crear una función que pida tus datos y estos valores los almacene en una variables que sirvan de parametros

const nombre = prompt('Introduce tu Nombre')
const apellido = prompt('Introduce tu Apellido')
const edad = prompt('Introduce tu edad')
const colores = prompt('Introduce tu color Favorito')

//Creamos la función
const saludar = ( name,surname,age,color ) => {
    return `Un gusto en conocerte ${name} ${surname} tu edad es ${age} años y tu color favorito es ${color} `
}
//Guardamos el resultado en una variable llamada (result)
const result = saludar( nombre,apellido,edad,colores )

//Imprimimos el resutado de dicha Función
console.log(result)

