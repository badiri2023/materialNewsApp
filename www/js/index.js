// Wait for the deviceready event before using any of Cordova's device APIs.
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    // Inicializar todo Materialize automáticamente
    M.AutoInit();

    // Inicializar tabs swipeables (Opcional: Si da problemas el swipe, quita {swipeable:true})
    var elems = document.querySelectorAll('.tabs');
    M.Tabs.init(elems);

    // Inicializar sidenav 
    var sidenavs = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenavs);

    // --- NUEVO: LLAMAMOS A LA FUNCIÓN AL INICIAR LA APP ---
    cargarNoticias();
}

// URL de la API (SpaceFlight News v4)
const API_URL = 'https://api.spaceflightnewsapi.net/v4/articles/?limit=10';

function cargarNoticias() {
    const contenedor = document.getElementById('noticias-container');
    
    contenedor.innerHTML = '<div class="col s12 center-align"><h5>Loading News...</h5></div>';

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            contenedor.innerHTML = '';
            const noticias = data.results;
            noticias.forEach(noticia => {
                const cardHTML = `
                <div class="col s12 m6 l4">
                    <div class="card small hoverable">
                        <div class="card-image">
                            <img src="${noticia.image_url}" alt="Imagen noticia">
                            <span class="card-title shadow-text" style="text-shadow: 1px 1px 2px black;">${noticia.news_site}</span>
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4 truncate">${noticia.title}</span>
                            <p class="truncate">${noticia.summary}</p>
                        </div>
                        <div class="card-action">
                            <a href="${noticia.url}" target="_blank" class="blue-text">Leer completa</a>
                        </div>
                    </div>
                </div>
                `;
                contenedor.innerHTML += cardHTML;
            });
        })
        .catch(error => {
            console.error('Error cargando noticias:', error);
            contenedor.innerHTML = '<div class="col s12 red-text center-align">ERROR 101</div>';
        });
}