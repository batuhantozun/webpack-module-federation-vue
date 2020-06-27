<template>
    <h1>Hello from child app</h1>
    <h3>You can route child app's own routes here</h3>
    <router-link :to="{ name: 'page1' }">Page 1</router-link>
    |
    <router-link :to="{ name: 'page2' }">Page 2</router-link>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'ChildAppHome',
    setup() {}
  }
</script>

<style scoped>
</style>
