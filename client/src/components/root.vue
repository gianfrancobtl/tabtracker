<template>
  <div class="container">
    <div class="left-box">
      <ul>
        <li>
          <i class="fas fa-search icon"></i>
          .
        </li>
        <li>
          <i class="fas fa-user-friends icon"></i>
          .
        </li>
        <li>
          <i class="far fa-comment icon"></i>
          .
        </li>
      </ul>
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
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li>
          <a href="#">7</a>
        </li>
        <li>
          <a href="#">8</a>
        </li>
        <li>
          <a href="#">9</a>
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
  }
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
p, a, h1, h2, h3, li, span {
    font-family: 'Open Sans', sans-serif;
}

.container{
    height: 90vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80vh 10h;
}

.container .left-box {
    background-color: #1da1f2;
    grid-column: 1 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container .left-box ul li{
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

.container .right-box .card-one{
    min-width: 300px;
    padding: 0 60px;
}

.container .right-box .card-one .head{
    display: flex;
    justify-content: space-between;
}

.container .right-box .card-one .head .logo-icon{
    font-size: 3em;
    color: skyblue;
}

.container .right-box .card-one h1{
    font-size: 27px;
    line-height: 32px;
    color: black;
}

.container .right-box .card-one p{
    font-size: 16px;
    font-weight: bold;
    color: black;
}

.container .bottom-box {
    grid-column: 1 / -1;
    border-top: 1px solid #e6ecf0;
}

.container .bottom-box ul{
    text-align: center;
}

.container .bottom-box ul li{
    display: inline-block;
    margin: 0 5px;
}

.container .bottom-box ul li a {
    text-decoration: none;
    font-size: 12px;
    color: #aab8c2;
}

.container .bottom-box ul li a:hover{
    text-decoration: underline;
}

button.btn{
    display: block;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 20px;
    padding: 6px 16px;
    border-radius: 100px;
    font-weight: bold;
}

button.block{
    width: 100%;
    margin-bottom: .8rem;
}

button.primary {
    background-color: #1da1f2;
    color: #fff;
}

button.outline{
    background-color: #fff;
    color:#1da1f2;
    border: 1px solid #1da1f2;
}
</style>
