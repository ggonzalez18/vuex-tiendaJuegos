<template>
  <div>
     <h2>Cantidad de Juegos disponibles {{availableGames.length}}</h2>
    <GameList :games='availableGames' :displayButton="true" @emit-sale="initSale"/>
  </div>
</template>

<script>

import GameList from './GameList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    GameList
  },
  computed: {
    ...mapGetters (['availableGames'])
  },
  methods: {
    ...mapActions(['processSale']),
    initSale(game) {
      this.processSale(game)
    },
    
  }
}
</script>