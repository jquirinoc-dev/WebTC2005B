function mostrarFormYVaciar(){
    alert("Parece ser que tu nombre completo es: " + document.getElementById("nombre").value
    + " " + document.getElementById("segundonombre").value + " " + document.getElementById("apellido").value + "\n"
    + "Pero no te pregunte!!!!");
    
    document.getElementById("nombre").value = "";
    document.getElementById("segundonombre").value = "";
    document.getElementById("apellido").value = "";
}