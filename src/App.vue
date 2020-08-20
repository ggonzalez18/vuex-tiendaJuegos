<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
    <ul>
      <li><router-link :to="{name: 'Home'}">Inicio</router-link></li>
      <li><router-link :to="{name: 'Search'}">Búsqueda</router-link></li>
      <li><router-link :to="{name: 'Sales'}">Ventas</router-link></li>
      <li><router-link :to="{name: 'TotalSale'}">Total de Ventas</router-link></li>
    </ul></nav>
    <transition name="vista">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
}
</script>

<style scoped>

.vista-enter-active, .vista-leave-active {
    transition: opacity .1s;
}
.vista-enter, .vista-leave-to{
    opacity: 0;
}
ul {
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: #333333;
}

li {
float: left;
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
}
 
li a {
    font-size: 20px;
display: block;
color: white;
text-align: center;
padding: 15px;
text-decoration: none;
font-family: Arial, Helvetica, sans-serif;
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
}

input {
  font-size: 20px;
  padding: 5px 2px;
  margin: 10px auto;
}
</style>
