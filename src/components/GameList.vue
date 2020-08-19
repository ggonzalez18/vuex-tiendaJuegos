<template>
  <div>
    <ul>
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index"><b> Cod.:</b> {{game.sku}} - <b>Nombre del Juego:</b> {{game.name}} - <b>stock:</b> {{game.stock}} <b>Valor:</b> $ {{game.price}}
      <button v-if="displayButton">Vender</button></li>
    </ul>
  </div>
</template>

<script>
export default {
props: {
    games: {
      type: Array,
      required: true
   },
   displayButton: {
     type: Boolean,
     default: false
   }
  }
}
</script>

<style>

li {
  font-size: 20px;
  padding: 5px 15px;
}
</style>