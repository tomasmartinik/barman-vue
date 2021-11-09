import { createStore } from 'vuex'
import { VuexPersistence} from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    alcoholic: [null, null, null, null, null, null],
    nonAlcoholic: [null, null, null, null],
  },
  mutations: {
    setAlcoholic(state, payload){
      state.alcoholic[payload.drinkIndex] = payload.drink;
    },
    setNonAlcoholic(state, payload){
      state.nonAlcoholic[payload.drinkIndex] = payload.drink;
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
