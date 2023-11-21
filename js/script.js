let paginaActual = 1;
const personajesPorPagina = 5;

function getCharacters(done){

    const results = fetch(`https://apisimpsons.fly.dev/api/personajes?limit=${635}&page=${paginaActual}`);

    results.then(response => response.json()
    .then (data => {
        done(data)
    }))

}

function mostrarPersonajes(data){
    console.log(data);

    data.docs.forEach(personaje => {
        const article =document.createRange().createContextualFragment(/*html */`
        
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
        

      const main = document.querySelector("main");
      main.append(article);
    });
}

getCharacters(mostrarPersonajes);
