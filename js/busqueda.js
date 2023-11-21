function buscarPersonaje() {
  // Obtener el valor del input de búsqueda
  const query = document.getElementById('searchInput').value;

  // Hacer la solicitud a la API
  fetch(`https://apisimpsons.fly.dev/api/personajes/find/${query}`)
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta de la API:', data); // Imprime la respuesta en la consola
      mostrarResultado(data);
    })
    .catch(error => console.error('Error al realizar la solicitud:', error));
}

  function mostrarResultado(data) {
    // Limpiar el contenido anterior
    document.getElementById('resultado').innerHTML = '';
  
    // Verificar si data es un array
    if (!Array.isArray(data)) {
      document.getElementById('resultado').innerHTML = 'Respuesta no válida de la API.';
      return;
    }
  
    // Verificar si hay resultados
    if (data.length === 0) {
      document.getElementById('resultado').innerHTML = 'No se encontraron resultados.';
      return;
    }
  
    // Mostrar los resultados
    const resultadoDiv = document.getElementById('resultado');
    data.forEach(personaje => {
      const personajeDiv = document.createElement('div');
      personajeDiv.textContent = `${personaje.nombre} - ${personaje.descripcion}`;
      resultadoDiv.appendChild(personajeDiv);
    });
  }
  