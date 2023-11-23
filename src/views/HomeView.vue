<template>
  <div class="home">
    <div class="search-container">
      <input
        v-model="searchQuery"
        placeholder="Escribe el país que deseas ver..."
      />
      <button @click="search" class="search-button">Buscar</button>
    </div>
    <div class="main-container">
      <div v-if="countries && countries.length > 0" class="countries-container">
        <div
          v-for="(country, index) in filteredCountries"
          :key="country.name"
          class="country-card"
          @click="showCountryDetail(country, index)"
        >
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            :style="{
              backgroundColor: isSelected(index) ? '#0088ff' : '#FFFFFF',
            }"
            style="max-width: 20rem"
          >
            <div class="country-container">
              <figure class="flag-icon">
                <img :src="getCountryFlag(country)" :alt="country.name" />
              </figure>
              <div class="country-info-container">
                <b-card-title
                  class="text-primary fs-6 fw-bold"
                  :style="{
                    color: isSelected(index) ? '#FFFFFF !important' : 'inherit',
                  }"
                >
                  {{ country.name }}
                </b-card-title>
                <b-card-text
                  :style="{
                    color: isSelected(index) ? '#FFFFFF' : 'inherit',
                  }"
                  >{{ country.continent.name }}</b-card-text
                >
              </div>
            </div>
          </b-card>
        </div>
      </div>
      <CountryDetail
        v-if="selectedCountry && showDetail"
        :country="selectedCountry"
        :detailPosition="detailPosition"
        @close="closeDetail"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CountryDetail from "@/components/DetailCountry.vue";
import gql from "graphql-tag";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      countries: [],
      countries2: [],
      selectedCountry: null,
      showDetail: false,
      detailPosition: "", // Agrega esta línea para definir detailPosition
      filteredCountries: [], // Almacena los países filtrados
      searchQuery: "", // Almacena la consulta de búsqueda
      selectedCardIndex: null, // Almacena el índice de la tarjeta seleccionada
    };
  },
  apollo: {
    countries: {
      query: gql`
        {
          countries {
            name
            emoji
            capital
            currency
            languages {
              name
            }
            states {
              name
            }
            continent {
              name
            }
          }
        }
      `,
      update: function (data) {
        return data.countries;
      },
    },
  },

  components: {
    CountryDetail,
  },
  mounted() {
    this.obtenerTodosLosPaises();
  },
  watch: {
    countries: {
      handler: function () {
        this.filteredCountries = this.countries || [];
      },
      immediate: true, // Ejecuta el watcher inmediatamente al cargar la página
    },
    searchQuery: {
      handler: function () {
        this.filterCountries();
      },
      immediate: true,
    },
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
    /* async getCountryImage(countryName) {
      try {
        const query = countryName + " place";
        const apiKey = "40845159-5ebe1abdb022ebc72982db104";
        const response = await axios.get("https://pixabay.com/api/", {
          params: {
            key: apiKey,
            q: query,
            image_type: "photo",
            lang: "en",
          },
        });

        const image = response.data.hits[0];
        return image
          ? image?.pageURL
          : "https://picsum.photos/600/300/?image=25";
      } catch (error) {
        console.error("Error al obtener la imagen del país:", error);
        return null;
      }
    }, */
    showCountryDetail(country, index) {
      this.selectedCardIndex = index; // Actualiza el índice de la tarjeta seleccionada
      this.selectedCountry = country;
      this.showDetail = true;
    },
    closeDetail() {
      this.selectedCardIndex = null; // Restablece el índice de la tarjeta seleccionada al cerrar el detalle
      this.selectedCountry = null;
      this.showDetail = false;
    },
    isSelected(index) {
      return this.selectedCardIndex === index;
    },
    async search() {
      // Verifica si hay una consulta de búsqueda antes de realizarla
      if (this.searchQuery.trim() === "") {
        this.filteredCountries = this.countries; // Muestra todos los países si la búsqueda está vacía
        return;
      }

      // Realiza la búsqueda por nombre de país
      const searchResults = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      this.filteredCountries = searchResults; // Actualiza los resultados de la búsqueda
    },
    filterCountries() {
      // Realiza la búsqueda por nombre de país
      const searchResults = this.countries.filter((country) =>
        country.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );

      this.filteredCountries = searchResults;
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #d1ebf7;
  width: 100%;
  min-height: 100vh;
}

.main-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.countries-container {
  margin: 0px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.country-card {
  cursor: pointer;
  flex: 0 0 20rem; /* Tamaño máximo de cada tarjeta */
  margin: 10px; /* Espaciado entre tarjetas */
  border-radius: 10px;
  border: 1px solid #ccc;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  &:hover {
    transform: scale(1.02); /* Ajusta el tamaño de las tarjetas */
  }
}

.flag-icon {
  width: 30%; /* Ajusta el ancho al 100% del contenedor */
  height: 50px; /* Ajusta el alto al 100% del contenedor */
  margin: 0px;
}

.flag-icon img {
  width: 100%; /* Ajusta el ancho al 100% del contenedor */
  height: 100%; /* Ajusta el alto al 100% del contenedor */
}

.country-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.country-info-container {
  display: flex;
  flex-grow: 1;
  margin-left: 20px;
  flex-direction: column;
  justify-content: center;
}

.search-container {
  margin: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

/* Estilos del input de búsqueda */
input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
  width: 500px; /* Ajusta la longitud según tus necesidades */
}

/* Estilos del botón de búsqueda */
.search-button {
  padding: 10px 15px;
  background-color: #007bff; /* Azul */
  color: #fff; /* Blanco */
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

@media screen and (max-width: 768px) {
  .search-container {
    margin-top: 4rem;
  }
  .country-card {
    cursor: pointer;
    flex: 0 0 18rem; /* Tamaño máximo de cada tarjeta */
    margin: 15px; /* Espaciado entre tarjetas */
  }
}
</style>
