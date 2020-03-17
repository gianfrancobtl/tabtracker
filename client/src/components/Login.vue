<template>
  <v-layout class="container">
    <v-flex xs6 offset-xs3 class="fill-height" fluid>
      <v-row>
        <v-col align="center">
          <div class="login-form">
            <form>
              <div class="text-center social-btn">
                <a href="#" class="btn btn-primary btn-lg btn-block">
                  <!-- <font-awesome-icon class="icon" icon="facebook" />  -->
                  Continuar con
                  <b>Facebook</b>
                </a>
                <a href="#" class="btn btn-info btn-lg btn-block">
                  Continuar con
                  <b>Twitter</b>
                </a>
                <a href="#" class="btn btn-danger btn-lg btn-block">
                  Continuar con
                  <b>Google</b>
                </a>
              </div>
              <div class="or-seperator">
                <b>o</b>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  class="form-control input-lg"
                  name="email"
                  placeholder="Email"
                  required="required"
                  v-model= "email"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control input-lg"
                  name="password"
                  placeholder="Contraseña"
                  required="required"
                  v-model= "password"
                />
              </div>
              <div class="danger-alert" v-html="error" />
              <div class="form-group">
                <v-btn
                  class="btn btn-success btn-lg btn-block login-btn"
                  @click="login"
                >Entrar</v-btn>
              </div>
            </form>
            <div class="text-center">
              <span class="text-muted">No tenés una cuenta?</span>
              <a @click="navigateTo('register')">Registrate</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService"

export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    }
  },

  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'songs'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 90vh;
  display: grid;
  grid-template-rows: 85vh 5vh;
  font-family: "Roboto", sans-serif;
}
.form-control {
  font-size: 16px;
}
.form-control:focus {
  border-color: #5cb85c;
}
.form-control,
.btn {
  border-radius: 50px;
  outline: none !important;
}
.login-form {
  width: 400px;
  margin: 0 auto;
  padding: 30px 0;
}
.login-form form {
  border-radius: 5px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 40px 50px;
}
.login-form .btn {
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  text-align: center;
}
.social-btn .btn {
  color: #fff;
  margin: 10px 0;
  font-size: 15px;
  border-radius: 50px;
  text-indent: 10px;
  font-weight: normal;
  border: none;
  text-align: center;
}
.social-btn .btn:hover {
  opacity: 0.9;
}
.social-btn .btn-primary {
  background: #507cc0;
}
.social-btn .btn-info {
  background: #64ccf1;
}
.social-btn .btn-danger {
  background: #df4930;
}
.social-btn .btn .icon {
  margin-right: 9px;
  font-size: 20px;
  min-width: 25px;
  position: relative;
  top: 2px;
}
.or-seperator {
  margin: 50px 0 15px;
  text-align: center;
  border-top: 1px solid #e0e0e0;
}
.or-seperator b {
  padding: 0 10px;
  width: 40px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
  background: #fff;
  display: inline-block;
  border: 1px solid #e0e0e0;
  border-radius: 50%;
  position: relative;
  top: -22px;
  z-index: 1;
}
.login-form a {
  color: #5cb85c;
}
</style>
