<template>
  <div id="app" :class="{ 'nav-open': showNav }">
    <b-icon icon="list" class="nav-toggle" @click="toggleNav"></b-icon>
    <nav :class="{ hidden: !showNav }">
      <img alt="Vue logo" src="./assets/logo.svg" class="logo" />
      <router-link
        v-for="link in links"
        :key="link.to"
        @click.native="closeNav"
        :to="link.to"
      >
        {{ link.text }}
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false, // Inicialmente mostramos el nav
      showNavButton: true,
      links: [
        { to: "/", text: "Home" },
        { to: "/view-one", text: "Vista 1" },
        { to: "/view-two", text: "Vista 2" },
      ],
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    },
    closeNav() {
      this.showNav = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: row;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  &:hover {
    transform: scale(1.06); /* Ajusta el tamaño de las tarjetas */
  }
}

.nav-toggle {
  display: none !important;
}

nav img {
  width: 150px;
}

nav a.router-link-exact-active {
  font-size: 18px;
  color: #ffa500;
}

/* Estilo para el botón de despliegue en la media query */
@media screen and (max-width: 768px) {
  nav {
    display: none;
  }

  .nav-toggle {
    display: block !important;
  }

  .logo {
    width: 200px;
    height: 200px;
  }
  nav a {
    font-size: 25px;
  }

  nav a.router-link-exact-active {
    font-size: 25px;
  }

  /* Estilo para mostrar el nav cuando showNav es true */
  nav:not(.hidden) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff; /* Blanco */
    z-index: 9998; /* Asegura que esté por encima de otros elementos */
  }

  /* Estilo para el botón de despliegue en la media query */
  .nav-toggle {
    position: fixed;
    top: 20px;
    left: 20px;
    font-size: 30px;
    cursor: pointer;
    z-index: 9999; /* Asegura que esté por encima de otros elementos */
  }

  /* Estilo para ocultar el botón de despliegue cuando el nav está visible */
  .nav-toggle:not(.hidden) {
    display: none;
  }
}
</style>
