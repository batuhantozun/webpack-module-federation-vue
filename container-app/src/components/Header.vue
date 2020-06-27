<template>
    <h3>Header</h3>
    <router-link :to="{ name: 'Home' }">Home</router-link>
    |
    <router-link :to="{ name: 'ChildApp' }">Child App</router-link>
</template>

<script>
  export default {
    name: 'AppHeader',
    setup() {}
  }
</script>

<style scoped>
</style>
