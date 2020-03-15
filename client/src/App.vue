<template>
  <div id="app">
    <v-app>      
      <main>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App'
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
