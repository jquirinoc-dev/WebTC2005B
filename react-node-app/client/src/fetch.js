import React from "react";

const POST = () => {
    fetch('http://localhost:3001',{
        method: 'POST',
        headers: {"content-Type": "application/json"},
        body: JSON.stringify({postMessage: 'Hola q es esto jejejej'})
    });

    return(
        <button>Un boton</button>
    )
}

export default POST;