<template>
  <div>
    <div class="search-container">
      <input v-model="searchQuery" placeholder="Buscar país..." />
      <button @click="search">Buscar</button>
    </div>
    <div v-if="searchResults.length > 0">
      <h2>Resultados de la Búsqueda</h2>
      <ul>
        <li v-for="result in searchResults" :key="result.id">
          <router-link :to="'/country/' + result.id">{{
            result.name
          }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [], // Almacena los resultados de búsqueda
    };
  },
  methods: {
    search() {
      // Aquí puedes implementar la lógica de búsqueda utilizando el API GraphQL
      // Actualiza this.searchResults con los resultados obtenidos
      // (por ahora, simplemente utilizo datos de ejemplo)
      this.searchResults = [
        { id: 1, name: "País 1" },
        { id: 2, name: "País 2" },
        { id: 3, name: "País 3" },
      ];
    },
  },
};
</script>

<style scoped>
.search-container {
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
