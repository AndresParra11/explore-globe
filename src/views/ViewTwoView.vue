<template>
  <div class="viewTwo">
    <h1 class="title">Hola! Esta es la vista 2</h1>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  font-size: 3rem;
  text-align: center;
  margin-top: 2rem;
}
.viewTwo {
  background-color: #d1ebf7;
  width: 100%;
  height: 100vh;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 1.5rem;
    margin-top: 5rem;
  }
}
</style>
