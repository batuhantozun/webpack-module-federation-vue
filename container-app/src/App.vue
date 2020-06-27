<template>
  <Header></Header>
  <AppContent></AppContent>
</template>

<script>
  import AppContent from "./components/Content.vue";
  import Header from "./components/Header.vue";

  export default {
    name: 'App',
    components: {
      Header,
      AppContent
    },
    setup() {}
  }
</script>

<style scoped>
</style>
