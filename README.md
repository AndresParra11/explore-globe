# explore-globe

# Descripción general

Esta aplicación Vue.js es un visor de información de países simple que permite a los usuarios explorar detalles sobre diferentes países. Los usuarios pueden buscar países específicos, ver información básica y acceder a detalles adicionales sobre cada país. La aplicación proporciona una interfaz de usuario limpia y receptiva.

## Features

- Lista de países: muestra una lista de países con sus banderas, nombres y continentes.
- Funcionalidad de búsqueda: los usuarios pueden buscar países específicos escribiendo en la barra de búsqueda. Los resultados de la búsqueda se actualizan dinámicamente a medida que el usuario escribe.
- Detalles del país: al hacer clic en la tarjeta de un país, se muestran detalles adicionales sobre el país seleccionado, incluida su capital, idioma, población, moneda y regiones (si están disponibles).
- Diseño responsivo: la aplicación está diseñada para ser responsiva y brindar una experiencia perfecta en varios dispositivos. Navegación: la aplicación incluye un menú de navegación con enlaces a diferentes vistas, lo que facilita a los usuarios la navegación por la aplicación.
- Filtrar Modal: Los usuarios pueden filtrar países según continentes usando un modal que aparece cuando se hace clic en el botón "Limpiar".

## Estructura del proyecto

- src/components: contiene componentes Vue.js utilizados en toda la aplicación.
- DetailCountry.vue: muestra información detallada sobre un país seleccionado.
- ModalContinents.vue: proporciona un modo para filtrar países por continente.
- HomeView.vue: la vista principal que muestra la lista de países y maneja la funcionalidad de búsqueda.
- src/views: contiene vistas de Vue.js que representan diferentes páginas de la aplicación.
- src/router: Configura el Vue Router para la navegación dentro de la aplicación.
- src/App.vue: el componente raíz de Vue.
- src/main.js: inicializa la aplicación Vue y configura complementos externos.
- src/vue-apollo.js: configura el cliente Apollo para manejar consultas GraphQL.

## Tecnologías empleadas

**Client:** Vue, Vite, Vue Router, Bootstrap Vue, 

**Server:** Apollo Client, Axios.
## 🔗 Enlaces
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://portafolio-murex-nine.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/andresparra11/)

## Despliegue

Vercel: [Explore Globe](https://explore-globe.vercel.app/)

## Authors

- [@AndresParra11](https://github.com/AndresParra11)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
