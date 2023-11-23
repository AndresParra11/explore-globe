<template>
  <div :class="detailPosition" class="country-info-modal">
    <b-icon icon="x-lg" class="close" @click="closeDetail"></b-icon>
    <figure class="country-figure">
      <img src="https://picsum.photos/600/300/?image=25" :alt="country.name" />
    </figure>
    <div class="country-container">
      <figure class="flag-icon">
        <img :src="getCountryFlag(country)" :alt="country.name" />
      </figure>
      <div class="country-info-container">
        <b-card-title class="text-primary fs-6 fw-bold">
          {{ country.name }}
        </b-card-title>
        <b-card-text>{{ country.continent.name }}</b-card-text>
      </div>
    </div>
    <div class="country-info-secundary">
      <b-card-title class="text-primary fs-6 fw-bold"> Capital:</b-card-title>
      <b-card-text>{{ country.capital }}</b-card-text>
    </div>
    <div class="country-info-secundary">
      <b-card-title class="text-primary fs-6 fw-bold"> Language:</b-card-title>
      <b-card-text>{{ country.languages[0].name }}</b-card-text>
    </div>
    <div class="country-info-secundary">
      <b-card-title class="text-primary fs-6 fw-bold">
        Population:</b-card-title
      >
      <b-card-text>500k people</b-card-text>
    </div>
    <div class="country-info-secundary">
      <b-card-title class="text-primary fs-6 fw-bold"> Currency:</b-card-title>
      <b-card-text>{{ country.currency }}</b-card-text>
    </div>
    <div class="country-info-secundary">
      <b-card-title class="text-primary fs-6 fw-bold"> Region:</b-card-title>
    </div>
    <div class="region-scroll-box">
      <ul v-if="country.states && country.states.length > 0">
        <li v-for="state in country.states" :key="state.name">
          {{ state.name }}
        </li>
      </ul>
      <ul v-else>
        <li v-for="region in regionsDefect" :key="region">
          {{ region }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    country: Object, // Propiedad para recibir la información del país
    detailPosition: String, // Propiedad para recibir la posición del componente
  },
  data() {
    return {
      countries2: [],
      regionsDefect: [
        "Santa Cruz",
        "Beni",
        "Pando",
        "La Paz",
        "Oruro",
        "Potosí",
        "Cochabamba",
        "Chuquisaca",
        "Tarija",
      ],
    };
  },
  mounted() {
    this.obtenerTodosLosPaises();
  },
  methods: {
    async obtenerTodosLosPaises() {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        this.countries2 = response.data.map((auxPais) => ({
          name: auxPais.name.common,
          flag: auxPais.flags.svg,
        }));
      } catch (error) {
        console.error("Error al obtener los países:", error);
      }
    },
    getCountryFlag(country) {
      const matchingCountry = this.countries2.find(
        (c) => c.name === country.name
      );
      return matchingCountry ? matchingCountry.flag : country.emoji;
    },
    closeDetail() {
      // Emite un evento para indicar que se debe cerrar el detalle
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.country-info-modal {
  background: #fff;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 4px;
  margin: 0px 15px;
  position: relative;
}
.close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.country-container {
  backgroundcolor: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.flag-icon {
  width: 80px; /* Ajusta el ancho al 100% del contenedor */
  height: 50px; /* Ajusta el alto al 100% del contenedor */
}

.flag-icon img {
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  height: 100%; /* Ajusta el alto al 100% del contenedor */
}
.country-info-container {
  display: flex;
  flex-grow: 1;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
}
.country-figure {
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
}
.country-figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.country-info-secundary {
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: baseline;
}

.region-scroll-box ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.region-scroll-box li {
  margin: 5px 0;
}

.region-scroll-box {
  max-width: 100%;
  max-height: 150px; /* Establece la altura máxima deseada */
  overflow-y: auto; /* Agrega una barra de desplazamiento vertical si es necesario */
  overflow-x: hidden; /* Oculta la barra de desplazamiento horizontal */
  white-space: nowrap; /* Evita el salto de línea en el texto */
  text-overflow: ellipsis; /* Añade puntos suspensivos (...) al final del texto si se corta */
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0 0 5px #ccc;
}

/* Estilos de la barra de desplazamiento */
.region-scroll-box::-webkit-scrollbar {
  width: 8px;
}

.region-scroll-box::-webkit-scrollbar-thumb {
  background-color: #888; /* Color del 'pulgón' de la barra de desplazamiento */
  border-radius: 6px;
}

.region-scroll-box::-webkit-scrollbar-track {
  background-color: #f2f2f2; /* Color del fondo de la barra de desplazamiento */
  border-radius: 6px;
}

@media screen and (max-width: 768px) {
  .country-info-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    margin: 0px;
    padding: 70px 40px;
    justify-content: space-between;
    border: 2px solid black;
    box-shadow: 0 0 10px black;
  }
}
</style>
