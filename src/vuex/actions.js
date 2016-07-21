import * as types from './mutation-types'

export const middleAsync = ({dispatch}) => {
  setTimeout(() => {
    dispatch(types.MIDDLE)
  }, 1000)
}
