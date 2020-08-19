<template>
  <div>
    <GameList :games='games'/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GameList from './GameList'

export default {
  components: {
    GameList
  },
  computed: {
    ...mapState(["games"])
  }
}

</script>