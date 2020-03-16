<template>
  <div class="container">
    <div class="left-box">
      <v-carousel cycle height="80vh" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="right-box">
      <div class="card-one">
        <h1>Ve qué está pasando en el mundo justo ahora.</h1>
        <p>Únete hoy</p>
        <button class="btn primary block" @click="navigateTo('register')">Regístrate</button>
        <button class="btn outline block" @click="navigateTo('login')">Inicia sesión</button>
      </div>
    </div>
    <div class="bottom-box">
      <ul>
        <li>
          <a href="#">Ayuda</a>
        </li>
        <li>
          <a href="#">Términos y condiciones</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*,
*::after,
*::before {
  box-sizing: border-box;
}

template {
  margin: 0;
  padding: 0;
}
p,
a,
h1,
h2,
h3,
li,
span {
  font-family: "Open Sans", sans-serif;
}

.container {
  height: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 80vh 10vh;
}

.container .left-box {
  background-color: #1da1f2;
  grid-column: 1 / 2;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .left-box ul li {
  list-style-type: none;
  font-size: 18px;
  line-height: 24px;
  margin: 50px 0;
  font-weight: bold;
  color: #fff;
}

.container .left-box ul li .icon {
  font-size: 22px;
  margin-right: 10px;
}

.container .right-box {
  background-color: #fff;
  grid-column: 2 / -1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .right-box .card-one {
  min-width: 300px;
  padding: 0 60px;
}

.container .right-box .card-one .head {
  display: flex;
  justify-content: space-between;
}

.container .right-box .card-one .head .logo-icon {
  font-size: 3em;
  color: skyblue;
}

.container .right-box .card-one h1 {
  font-size: 27px;
  line-height: 32px;
  color: black;
}

.container .right-box .card-one p {
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.container .bottom-box {
  grid-column: 1 / -1;
  border-top: 1px solid #e6ecf0;
}

.container .bottom-box ul {
  text-align: center;
}

.container .bottom-box ul li {
  display: inline-block;
  margin: 0 5px;
}

.container .bottom-box ul li a {
  text-decoration: none;
  font-size: 12px;
  color: #aab8c2;
}

.container .bottom-box ul li a:hover {
  text-decoration: underline;
}

button.btn {
  display: block;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 20px;
  padding: 6px 16px;
  border-radius: 100px;
  font-weight: bold;
}

button.block {
  width: 100%;
  margin-bottom: 0.8rem;
}

button.primary {
  background-color: #1da1f2;
  color: #fff;
}

button.outline {
  background-color: #fff;
  color: #1da1f2;
  border: 1px solid #1da1f2;
}
</style>
