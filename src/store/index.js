import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {
   setValue(state, value){
     state.count = value 
   }
  },
  getters:{
    getCount(state){
      return state.count;
    }
  },
  actions: {
     addAction(context){
      context.commit('setValue', this.getters.getCount+1)
     },
     removeAction(context){
      context.commit('setValue', this.getters.getCount-1)
     }
  },
  modules: {
  
  }
})
