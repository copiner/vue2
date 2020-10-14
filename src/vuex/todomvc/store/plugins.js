import { STORAGE_KEY } from './mutations'
import createLogger from 'vuex/dist/logger'

const localStoragePlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, { todos }) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
