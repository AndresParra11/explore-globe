<template>
  <div>
    <SearchCountry />
  </div>
</template>

<script>
// @ is an alias to /src
import SearchCountry from "@/components/SearchCountry.vue";

export default {
  name: "HomeView",
  components: {
    SearchCountry,
  },
};
</script>
