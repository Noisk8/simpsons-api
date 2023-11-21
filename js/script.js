// Declaramos una variable para la página actual y la inicializamos en 1
let paginaActual = 1;
// Declaramos una variable para los personajes por página y la inicializamos en 5
const personajesPorPagina = 5;

// Definimos una función para obtener los personajes
function getCharacters(done){

    // Hacemos una solicitud a la API de los Simpsons
    const results = fetch(`https://apisimpsons.fly.dev/api/personajes?limit=${635}&page=${paginaActual}`);

    // Cuando la solicitud se complete, convertimos la respuesta en JSON
    results.then(response => response.json()
    // Luego, pasamos los datos a la función done
    .then (data => {
        done(data)
    }))

}

// Definimos una función para mostrar los personajes
function mostrarPersonajes(data){
    // Imprimimos los datos en la consola
    console.log(data);

    // Para cada personaje en los datos, creamos un fragmento de HTML
    data.docs.forEach(personaje => {
        const article =document.createRange().createContextualFragment(/*html */`
        
        // Cada fragmento de HTML es un artículo que contiene información sobre el personaje
        <article>
        <div class="image-container">
          <img src="${personaje.Imagen}" alt="${personaje.Nombre}" />
          <h2>${personaje.Nombre}</h2>
          <span>Status: ${personaje.Estado}</span>
          <br>
          <p>Species: ${personaje.Genero}</p>
          <h3>Gender: ${personaje.Genero}</h3>
          <h4>Origin: ${personaje.Ocupacion}</h4>
          <h4>Location: ${personaje.updatedAt}</h4>
       
        </div>
      </article>
      `);
        

      // Agregamos el fragmento de HTML al elemento main en la página
      const main = document.querySelector("main");
      main.append(article);
    });
}

// Llamamos a la función getCharacters y le pasamos la función mostrarPersonajes como argumento
getCharacters(mostrarPersonajes);
