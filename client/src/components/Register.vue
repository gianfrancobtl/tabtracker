<template>
  <v-layout class="container">
    <v-flex xs6 offset-xs3 class="fill-height" fluid>
      <v-row>
        <v-col align="center">
          <!-- <v-card width="400px" class="mx-auto mt-5">
            <v-card-title>
              <h1 class="display-1">Sign Up</h1>
            </v-card-title>
            <v-card-text>
              <v-form autocomplete="off">
                <v-text-field label="Email" v-model="email" prepend-icon="person"></v-text-field>
                <v-text-field
                  label="Password"
                  type="password"
                  v-model="password"
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
          </v-card>-->
          <div class="signup-form">
            <form>
              <h2>Registrate</h2>
              <p class="hint-text">Hacelo con tu red social favorita o dirección de email</p>
              <div class="social-btn text-center">
                <a href="#" class="btn btn-primary btn-lg">
                  <i class="fa fa-facebook"></i> Facebook
                </a>
                <a href="#" class="btn btn-info btn-lg">
                  <i class="fa fa-twitter"></i> Twitter
                </a>
                <a href="#" class="btn btn-danger btn-lg">
                  <i class="fa fa-google"></i> Google
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
                  type="email"
                  class="form-control input-lg"
                  name="email"
                  placeholder="Dirección de email"
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
              <!-- <div class="form-group">
                <input
                  type="password"
                  class="form-control input-lg"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  required="required"
                />
              </div> -->
              <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block signup-btn" @click="register">Registrarse</button>
              </div>
            </form>
            <div class="text-center">
              Ya tenés una cuenta?
              <a href="#">Entrá acá</a>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
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
  transition: all 0.4s;
  box-shadow: none;
}

.form-control:focus {
  border-color: #5cb85c;
}

.form-control,
.btn {
  border-radius: 50px;
  outline: none !important;
}
.signup-form {
  width: 480px;
  margin: 0 auto;
  padding: 30px 0;
}
.signup-form form {
  border-radius: 5px;
  margin-bottom: 20px;
  background: #fff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 40px;
}
.signup-form a {
  color: #5cb85c;
}
.signup-form h2 {
  text-align: center;
  font-size: 34px;
  margin: 10px 0 15px;
}
.signup-form .hint-text {
  color: #999;
  text-align: center;
  margin-bottom: 20px;
}
.signup-form .form-group {
  margin-bottom: 20px;
}
.signup-form .btn {
  font-size: 18px;
  line-height: 26px;
  font-weight: bold;
  text-align: center;
}
.signup-btn {
  text-align: center;
  border-color: #5cb85c;
  transition: all 0.4s;
}
.signup-btn:hover {
  background: #5cb85c;
  opacity: 0.8;
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
.social-btn .btn {
  color: #fff;
  margin: 10px 0 0 15px;
  font-size: 15px;
  border-radius: 50px;
  font-weight: normal;
  border: none;
  transition: all 0.4s;
}
.social-btn .btn:first-child {
  margin-left: 0;
}
.social-btn .btn:hover {
  opacity: 0.8;
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
  float: left;
  margin: 3px 10px;
  font-size: 20px;
}
</style>
