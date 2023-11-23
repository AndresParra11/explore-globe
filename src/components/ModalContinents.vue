<template>
  <div class="filter-modal">
    <div class="modal-content">
      <div class="modal-info">
        <h2>Filtro por continentes</h2>
        <button @click="close">Limpiar</button>
      </div>
      <div class="container-continents">
        <figure
          v-for="continent in continents"
          :key="continent.name"
          class="continent-card"
          :class="{ selected: continent === selectedContinent }"
          @click="clearSelection(continent)"
        >
          <img :src="continent.image" :alt="continent.name" />
          <h3>{{ continent.name }}</h3>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalContinents",
  data() {
    return {
      continents: [
        {
          name: "Europa",
          image:
            "https://res.cloudinary.com/dlkvt6uph/image/upload/v1700749226/Continentes/wagx8ldw6yftyl4vzjgi.png",
        },
        {
          name: "América",
          image:
            "https://res.cloudinary.com/dlkvt6uph/image/upload/v1700749226/Continentes/f0j1l5akz7zibpinmjqr.png",
        },
        {
          name: "Asia",
          image:
            "https://res.cloudinary.com/dlkvt6uph/image/upload/v1700749227/Continentes/kalvy0o6smp64xrvm2t1.png",
        },
        {
          name: "Oceanía",
          image:
            "https://res.cloudinary.com/dlkvt6uph/image/upload/v1700749226/Continentes/acq0kfgqnaishtwegwjn.png",
        },
        {
          name: "África",
          image:
            "https://res.cloudinary.com/dlkvt6uph/image/upload/v1700749226/Continentes/doe8xwpsjhjxqhluppce.png",
        },
      ],
      selectedContinent: null,
    };
  },
  methods: {
    clearSelection(continent) {
      if (this.selectedContinent === continent) {
        this.selectedContinent = null; // Deselecciona el continente
        this.$emit("close");
      } else {
        this.selectedContinent = continent; // Selecciona el continente
      }
    },
    closeModal() {
      this.$emit("close");
    },
    close() {
      this.selectedContinent = null;
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.filter-modal {
  position: fixed;
  top: 25%;
  left: 40%;
  width: 450px;
  height: 250px;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(, -50%);
}

.modal-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-info h2 {
  margin: 0px;
  font-size: 30px;
  color: #002b56;
}

.modal-info button {
  margin: 0px;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.container-continents {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
}

.container-continents figure {
  width: 100px;
  height: 100px;
  text-align: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.06);
    opacity: 0.8;
  }
}

.container-continents figure.selected {
  border: 2px solid #007bff; /* Color del borde azul */
  border-radius: 5px; /* Ajusta según sea necesario */
}

.container-continents figure h3 {
  margin-top: 5px;
  font-size: 14px;
  color: #002b56;
}

.container-continents figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.continent-card {
  margin-top: 20px;
}

.continent-card img {
  width: 100%;
  max-height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

button {
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .filter-modal {
    display: none;
  }
}
</style>
