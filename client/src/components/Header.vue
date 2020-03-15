<template>
  <v-toolbar fixed class="flex-container" dark>
    <v-toolbar-title class="mr-4">
        <router-link 
        class="home"
        tag="span"
        :tffo="{
          name: 'root'
        }">
        TabTracker
      </router-link>
        </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat dark :to="{
          name: 'register'
        }"
        v-if="!$store.state.isUserLoggedIn"
        >Regístrate</v-btn>

      <v-btn flat dark :to="{
          name: 'login'
        }"
        v-if="!$store.state.isUserLoggedIn"
        >Inicia sesión</v-btn>

        <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        Log Out
      </v-btn>

    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
    }
  }
};
</script>

<style scoped>

.flex-container{
  height: 5vh;
}

.home {
  cursor: pointer;
}

.home:hover {
  color: #E9E;
}
</style> */