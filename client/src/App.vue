<template>
  <div id="app">
    <v-app> 
      <page-header/>     
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
p,
a,
h1,
h2,
h3,
li,
span {
  font-family: "Open Sans", sans-serif;
}
</style>
