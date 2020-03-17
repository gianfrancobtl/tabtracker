<template>
  <v-toolbar fixed class="cyan" dark>
    
    <v-toolbar-title class="mr-4">
      <router-link class="home" tag="span" :to="{
          name: 'root'
        }">MyApp</router-link>
    </v-toolbar-title>
    
    <v-toolbar-items>
      <v-btn dark text :to="{
          name: 'songs'
        }">Browse</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>
    
    <v-toolbar-items>
      <v-btn
        dark
        text
        :to="{
          name: 'register'
        }"
        v-if="!$store.state.isUserLoggedIn"
      >Regístrate</v-btn>

      <v-btn
        dark
        text
        :to="{
          name: 'login'
        }"
        v-if="!$store.state.isUserLoggedIn"
      >Inicia sesión</v-btn>

      <v-btn v-if="$store.state.isUserLoggedIn" text dark @click="logout">Log Out</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "root"
      });
    }
  }
};
</script>

<style scoped>
.home {
  cursor: pointer;
}

.home:hover {
  color: #e9e;
}
</style> */