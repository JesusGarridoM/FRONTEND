<template>
  <nav>
    <router-link to="/cliente">Cliente</router-link> |
    <router-link to="/pastelero" @click="$store.commit('actualizarGraficas')">Pastelero</router-link>
  </nav>
  <router-view/>
</template>

<style>
body{
  margin: 0;
  background-image: url(./assets/fondo.png);
}
h2{
    display: inline;
    font-weight: 700;
    font-size: 35px;
    text-transform: uppercase;
    color: #F5881F;
    text-shadow: -2px 2px 5px #000000;
}
h3{  
  font-weight: 700;
  font-size: 33px;
  line-height: 39px;
  color: #149086;
  text-shadow: -2px 2px 5px #000000;
}
nav {
  display: inline;
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #DEB887;
}
nav a.router-link-exact-active {
  color: #fff;
}
a{
    text-decoration: none;
}
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #DEB887;
}
</style>
