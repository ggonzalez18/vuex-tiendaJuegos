<template>
  <div>
    <ul v-if="sales.length > 0">
      <li v-for="(sale, index) in sales" :key="index" class="list">
    <b> Cod.:</b> {{sale.sku}} | <b>Nombre del Juego:</b> {{sale.name}} | <b>Valor:</b> $ {{sale.price}}
      </li>
      <h2 class="list"><b>Ventas realizadas:</b> $ {{sales.length}}</h2>
      <h2 class="list"><b>Total en ventas:</b> $ {{totalSales}}</h2>
    </ul>
    <div v-else>
      <p class="list">No hay ventas registradas</p>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(["sales"]),
    totalSales() {
      return this.sales.reduce((accumulator, currentValue) => 
      accumulator + currentValue.price, 0)
    } 
  }
}
</script>

<style scoped>

.list {
color: black;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
}
</style>