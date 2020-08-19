<template>
  <div>
    <ul>
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index"><b> Cod.:</b> {{game.sku}} - <b>Nombre del Juego:</b> {{game.name}} - <b>stock:</b> {{game.stock}} <b>Valor:</b> $ {{game.price}}</li>
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