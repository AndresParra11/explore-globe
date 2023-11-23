<template>
  <div id="app">
    <nav>
      <img alt="Vue logo" src="./assets/logo.svg" />
      <router-link to="/">Home</router-link>
      <router-link to="/view-one">Vista 1</router-link>
      <router-link to="/view-two">Vista 2</router-link>
    </nav>
    <router-view />
  </div>
</template>

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
}

nav img {
  width: 150px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
