<template>
  <div>
    <ul>
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index"><b> Cod.:</b> {{game.sku}} | <b>Nombre del Juego:</b> {{game.name}} - <b>stock:</b> {{game.stock}} -- <b>Valor:</b> $ {{game.price}}
      <button v-if="displayButton" @click="emitSale(game)">Vender</button></li>
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
  },
  methods: {
    emitSale(game) {
      this.$emit('emit-sale', game)
    }
  }
}
</script>

<style scoped>

li {
  font-size: 20px;
  padding: 5px 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
}

button {
  border: 1px solid;
    padding: .325rem .72rem;
    font-size: 0.9rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    margin-left: 20px;
}
</style>