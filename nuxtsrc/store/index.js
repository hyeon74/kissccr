//import { vuexfireMutations } from 'vuexfire'

export const state = () => ({
    user: null
})

export const mutations = {
  setUser(state, user) {
    if (!user) return (state.user = null)
    state.user = {}
    Object.entries(user).forEach(([k, v]) => {
      //if (typeof v === 'string') state.user[k] = v
      if(k == 'user'){
        state.user = v
      }
    })
  },
  //...vuexfireMutations
}

//0. vuex
//1. vuex-persistedstate
//1. vuexfire
//2. lodash

