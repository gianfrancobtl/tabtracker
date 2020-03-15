<template>
  <v-layout>
    <v-flex xs6 offset-xs3 class="fill-height" fluid>
      <v-row>
        <v-col align="center">
          <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
              <h1 class="display-1">Sign Up</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Email" v-model="email" prepend-icon="person"></v-text-field>
                <v-text-field
                  label="Password"
                  type= "password"
                  v-model= "password"
                  prepend-icon="lock"
                  autocomplete="new-password"
                ></v-text-field>
              </v-form>
              <div class="danger-alert" v-html="error" />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn>Log in with Google</v-btn>
              <v-spacer></v-spacer>
              <v-btn @click="register">Sign up</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null,
    };
  },
  /* watch: {
    email (value){
      console.log ("email has changed", value);
    }
  }, */
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
  /* mounted () {
    setTimeout (() => {
      this.email="Please write an email"
    }, 2000);
  } */
};
</script>

<style scoped>

</style>
