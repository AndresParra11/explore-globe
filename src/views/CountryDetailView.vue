<template>
  <div>
    <h1>Detalles del País</h1>
    <div>
      <h2>{{ country.name }}</h2>
      <p>Capital: {{ country.capital }}</p>
      <p>Idioma: {{ country.language }}</p>
      <p>Moneda: {{ country.currency }}</p>
      <p>Estados: {{ country.states.join(", ") }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Datos de ejemplo, puedes reemplazar esto con datos reales del país
      country: {
        name: "Nombre del País",
        capital: "Capital",
        language: "Idioma",
        currency: "Moneda",
        states: ["Estado 1", "Estado 2", "Estado 3"],
      },
    };
  },
};
</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
</style>
