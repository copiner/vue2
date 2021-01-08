/*
store 中定义getter（可以认为是 store 的计算属性）

getter 的返回值会根据它的依赖被缓存起来，
且只有当它的依赖值发生了改变才会被重新计算
*/
export const count = state => state.count

export const recentHistory = state => {
  return state.history
    .slice(-5)
    .join(', ')
}
