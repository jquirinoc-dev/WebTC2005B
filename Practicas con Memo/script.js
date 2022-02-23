//aqui adentro va javascript

//declarar variables
x = 5;
x = "I hate u";

console.log("HOLA DESDE AFUERA DE LA FUNCTION");

function example(){
    
    console.log("Hola a todos jiji");
    alert("Hola a todos jiji");
}

function boton2(){
    alert("BOTON 2");
}

function boton3(){
    alert("BOTON 3");
    
    document.getElementById("parrafitobonito").innerHTML = "<h1>CAMBIE PARA SIEMPRE.</h1>";
}

function cambiarDatoDeInput(){
    document.getElementById("textito").value = "HOLA DESDE JAVASCRIPT";
}

function alertarConDatos(){
    alert(document.getElementById("textito").value);
}