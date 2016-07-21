import * as types from '../mutation-types'

const state = {
  emited: 'nothing'
}

const mutations = {
  [types.LEFT](state) {
    state.emited = 'LEFT'
  },
  [types.RIGHT](state) {
    state.emited = 'RIGHT'
  },
  [types.MIDDLE](state) {
    state.emited = 'MIDDLE'
  },
}

export default {
  state,
  mutations
}
