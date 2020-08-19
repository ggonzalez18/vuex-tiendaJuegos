import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 bits",
    subTitle: "Juegos de PC y Consolas",
    games: [
      { sku: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', onSale: true },
      { sku: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', onSale: false },
      { sku: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', onSale: true },
      { sku: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'yellow', onSale: false },
      { sku: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', onSale: false },
      { sku: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', onSale: true }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
});

export default store;
