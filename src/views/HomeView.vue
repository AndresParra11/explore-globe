<template>
  <div>
    <SearchCountry />
    <div class="main-container">
      <div v-if="countries && countries" class="countries-container">
        <div
          v-for="country in countries"
          :key="country.name"
          class="country-card"
          @click="showCountryDetail(country)"
        >
          <b-card
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
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
import SearchCountry from "@/components/SearchCountry.vue";
import CountryDetail from "@/components/DetailCountry.vue";
import gql from "graphql-tag";
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      countries2: [],
      selectedCountry: null,
      showDetail: false,
      detailPosition: "", // Agrega esta línea para definir detailPosition
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
    },
  },

  components: {
    SearchCountry,
    CountryDetail,
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
    showCountryDetail(country) {
      // Muestra el detalle del país al hacer clic en la tarjeta
      this.selectedCountry = country;
      this.showDetail = true; // Actualiza la propiedad showDetail
    },
    closeDetail() {
      // Oculta la información del país seleccionado
      this.selectedCountry = null;
      this.showDetail = false; // Actualiza la propiedad showDetail
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.countries-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around; /* Opcional: Ajusta según tus necesidades */
}

.country-card {
  cursor: pointer;
  flex: 0 0 20rem; /* Tamaño máximo de cada tarjeta */
  margin: 5px; /* Espaciado entre tarjetas */
}

.flag-icon {
  width: 30%; /* Ajusta el ancho al 100% del contenedor */
  height: 50px; /* Ajusta el alto al 100% del contenedor */
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
</style>
