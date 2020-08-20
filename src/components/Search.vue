<template>
  <div>
      <h2>Cantidad de Juegos disponibles {{games.length}}</h2>
    <input type="text" v-model="search" placeholder="Busca el SKU de tu juego">
    <GameList :games='filterGames'/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import GameList from './GameList'

export default {
  data() {
    return {
      search: null,
    }
  },
  components: {
    GameList
  },
  computed: {
    ...mapState(["games"]),
    ...mapGetters(["findGame"]),
  filterGames() {
    if (this.search) {
      return this.findGame(this.search)
    } else {
      return this.games
    }
  }
  }
}
</script>

<style>
input {
  font-size: 20px;
  padding: 5px 2px;
  margin: 10px auto;
}
</style>