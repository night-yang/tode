const state ={
  all:[
    {
      id: '1',
      body: '事物1',
      compl: false
    },
    {
      id: '2',
      body: '事物2',
      compl: false
    }
  ],
  currentFilter:'ALL'
}
const mutations = {
  addWork(state, work) {
    state.all.push(work)
  },
  removeWork(state,id){
    state.all = state.all.map(t => {
      if (t.id === id) {t.compl = true}
      return t
    })
  },
  setFilter(state, filter) {
    state.currentFilter = filter
    console.log(filter)
  }
}

const actions = {
  addWork({ commit }, { work }) {
    commit('addWork', work)
  },
  removeWork({commit},{id}){
    commit('removeWork',id)
  },
  setFilter({commit}, filter){
    commit('setFilter', filter)
  }
}

export default {
  state,
  mutations,
  actions
}