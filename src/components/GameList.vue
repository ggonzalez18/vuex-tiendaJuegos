<template>
  <div>
    <ul>
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index"> Cod.: {{game.sku}} - Nombre del Juego: {{game.name}} - Valor: $ {{game.price}}</li>
    </ul>
  </div>
</template>

<script>
export default {
props: {
    games: {
      type: Array,
      required: true
   }
  }
}
</script>

<style>

li {
  font-size: 20px;
}
</style>