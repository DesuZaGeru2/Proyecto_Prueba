const contenedor = document.getElementById("contenedor")

fetch("./database.json")
    .then(response => response.json())
    .then(data => {

            for(const persona of data){
            
            contenedor.innerHTML += `
            <div class="card">
            <h3>${persona.nombre}</h3>
            <img src="./img/${persona.foto}.jpg" 
            alt="foto de persona">
            <span>Edad: ${persona.edad}</span>
            <br>
            <span>Altura: ${persona.altura}mts</span>
            <br>
            <span>Nacionalidad: ${persona.nacionalidad}
            <br>
            <span class="fi ${persona.bandera} fis"></span></p>
            </div>
            `
        }
    })