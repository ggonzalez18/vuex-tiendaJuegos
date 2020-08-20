import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 bits",
    subTitle: "Juegos de PC y Consolas",
    sales: [],
    games: [
      { sku: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', onSale: true },
      { sku: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', onSale: false },
      { sku: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', onSale: true },
      { sku: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'gray', onSale: false },
      { sku: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', onSale: false },
      { sku: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', onSale: true }
    ]
  },
  getters: {
    findGame: (state) => (sku) => {
      return state.games.filter(prod => {
        return prod.sku == sku
      })
    },
    availableGames(state) { 
      return state.games.filter((game) => {
        return game.stock > 0
      })
    }
  },
  mutations: {
    DEDUCT_STOCK (state, game) {
      let selectedGame = state.games.find((xgame) => {
        return xgame.sku == game.sku
      })
      selectedGame.stock--
    },
    ADD_SALE(state, game) {
      state.sales.push(game)
    }
  },
  actions: {
    processSale ({ commit }, game) 
    {
      if (game.stock > 0) {
        setTimeout(() => {
          commit("DEDUCT_STOCK", game)
          setTimeout(() => {
            commit("ADD_SALE", { sku: game.sku, name: game.name, price: game.price })
            alert(`La venta del juego ${game.name} - Sku: ${game.sku} ha sido confirmada`)
          }, 1500)
        }, 2000)
      }
    }
  }
});

export default store;
