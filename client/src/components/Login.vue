<template>
  <v-layout class="container">
    <v-flex xs6 offset-xs3 class="fill-height" fluid>
      <v-row>
        <v-col align="center">
          <!-- <v-card width="400px" class="mx-auto mt-5">
              <v-card-actions>
                <v-btn>Continua con Google</v-btn>
              </v-card-actions>
              <v-divider></v-divider>
            <v-card-title>
              <h1 class="display-1">inicia sesión con tu email</h1>
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Email" v-model= "email" prepend-icon="person"></v-text-field>
                <v-text-field
                  label="Contraseña"
                  type= "password"
                  v-model= "password"
                  prepend-icon="lock"
                ></v-text-field>
              </v-form>
              <div class="danger-alert" v-html="error" />
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="login">Entrar</v-btn>
            </v-card-actions>
          </v-card>-->
          <div class="login-form">
            <form action="/examples/actions/confirmation.php" method="post">
              <div class="text-center social-btn">
                <a href="#" class="btn btn-primary btn-lg btn-block">
                  <i class="fa fa-facebook"></i> Continuar con
                  <b>Facebook</b>
                </a>
                <a href="#" class="btn btn-info btn-lg btn-block">
                  <i class="fa fa-twitter"></i> Continuar con
                  <b>Twitter</b>
                </a>
                <a href="#" class="btn btn-danger btn-lg btn-block">
                  <i class="fa fa-google"></i> Continuar con
                  <b>Google</b>
                </a>
              </div>
              <div class="or-seperator">
                <b>o</b>
              </div>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control input-lg"
                  name="username"
                  placeholder="Nombre de usuario"
                  required="required"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control input-lg"
                  name="password"
                  placeholder="Contraseña"
                  required="required"
                />
              </div>
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block login-btn" @click="login">Entrar</button>
              </div>
            </form>
            <div class="text-center">
              <span class="text-muted">No tenés una cuenta?</span>
              <a href="#">Registrate</a>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },

  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped>
.container {
  height: 89vh;
  display: grid;
  grid-template-rows: 84vh 5vh;
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
.social-btn .btn i {
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
