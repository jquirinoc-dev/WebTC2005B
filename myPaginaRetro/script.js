x = 181221;

function mostrarFormYVaciar(){
    alert("Parece ser que tu nombre completo es: " + document.getElementById("nombre").value
    + " " + document.getElementById("segundonombre").value + " " + document.getElementById("apellido").value + "\n"
    + "Pero no te pregunte!!!!");
    
    document.getElementById("nombre").value = "";
    document.getElementById("segundonombre").value = "";
    document.getElementById("apellido").value = "";
}

const persona = {
    nombre: "Saachi Hernandez",
    edad: 20,
    estatura: 154,
    sexo: femenino
}