<template>
  <div>
    <GameList :games='availableGames' :displayButton="true"/>
  </div>
</template>

<script>

import GameList from './GameList.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    GameList
  },
  computed: {
    ...mapGetters (['availableGames'])
  }
}
</script>

<style>
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