<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <v-card width='400px' class='mx-auto mt-5'>
        <v-card-title>
          <h1 class='display-1'>Register</h1>
        </v-card-title>
        <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            v-model="email"
            prepend-icon = "mdi-account-circle"
          ></v-text-field>
          <v-text-field
            label="Password"
            :type= "showPassword ? 'text' : 'password'"
            v-model="password"
            prepend-icon='mdi-lock'
            :append-icon= "showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append = "showPassword = !showPassword"
            autocomplete="new-password"
          ></v-text-field>
        </v-form>
        <div class="danger-alert" v-html="error" />
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn></v-btn>
          <v-spacer></v-spacer>
        <v-btn color="info" @click="register">
          Register
        </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null,
      showPassword: false
    }
  },
  /* watch: {
    email (value){
      console.log ("email has changed", value);
    }
  }, */
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
  /* mounted () {
    setTimeout (() => {
      this.email="Please write an email"
    }, 2000);
  } */
}
</script>

<style scoped>
.error{
  color:red;
}
</style>
