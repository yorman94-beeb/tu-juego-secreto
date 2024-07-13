
let numeroSecreto =0;
let intentos = 0;//variable numero de intentos
let numerosSorteados =[]; // corchetas indica que la variable es una lista
let numeroMaximo = 10;


//funcion, nombre de la funcion, parametros; elemento del documento HTML y texto que se le va poner a este
function asignarTextoElemento(elemento,texto){
    let elementoHTML =document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    //buena practica el return, retorna la funcion

}
// getelementbyid es traer de HTML un input x, valor usuario es atributo que tiene ese input en su 
//id, .value nos argumenyta atributo de valor


function verificarIntento() {
let numeroDeUsuario =(parseInt (document.getElementById("valorUsuario").value));
   
 if (numeroDeUsuario === numeroSecreto)
    //si numero usuario es igual a numero secreto, `..comillas invertida...acertaste en $ {variable anidada anteriormente}
// ${(varibale intentos es igual a 1 )? traduce si.. "vez" : de lo contrario "veces"}`
    { asignarTextoElemento("p",`acertaste el número en: ${intentos} ${(intentos===1)? "vez" :"veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
}else {
    if (numeroDeUsuario > numeroSecreto){
     asignarTextoElemento ("p", "El numero secreto es menor" );


    }else{
        asignarTextoElemento ("p","El numero secreto es mayor");
    }

//se llama la funtion despues de la variable intentos de usuario
    intentos++;
    limpiarCaja();
}
return;

}


//se crea una funcion, y despues una variable que se llama como la accion,
// document. queryselector  numeral para llamar el id desde el query("#) o si es getelementbyid no lleva el #
function limpiarCaja(){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";
    // se llama la variable.   valorcaja. value, es el valor numerico dado = "" entre comillas vacias significa en blanco o borrar
  
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    console.log(numerosSorteados);
    //si ya sorteamos todos los numeros

    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento ("p","ya se sortearon todos los numeros posibles");
        condicionesIniciales();
        reiniciarJuego();
    }else{

        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();

        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado

        }
    }
}condicionesIniciales;

function condicionesIniciales(){
    numeroSecreto =generarNumeroSecreto();
    asignarTextoElemento("h1","juego del numero secreto");//llamar la funcion genereica que creamos anteriormente
    asignarTextoElemento("p","indica un numero del 1 al 10");
    console.log(numeroSecreto);
    intentos =1;
    
}

function reiniciarJuego () {
    //limpiar caja
    limpiarCaja();
    //indicar mensajes de intervalo de numeros
    //generar el numero secreto
    //inicializar el numero de intentos
    condicionesIniciales();
   //deshabilitar el boton
   document.querySelector("#reiniciar").setAttribute("disabled","true");
    

    
}
condicionesIniciales();


