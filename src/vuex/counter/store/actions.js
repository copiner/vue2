/*
Action 类似于 mutation，不同在于：

Action 提交的是 mutation，而不是直接变更状态。
Action 可以包含任意异步操作

Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
因此你可以调用 context.commit 提交一个 mutation，
或者通过 context.state 和 context.getters 来获取 state 和 getters


Action 通过 store.dispatch 方法触发 store.dispatch('increment')

store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
*/

function getsth() {
    var r = 0;
    return new Promise(function(resolve) {
        setTimeout(function() {
            r = Math.ceil(Math.random()*10)
            resolve(r);
        },3000)
    })
}

export const increment = ({ commit }) => {
  commit('increment')
}
export const decrement = ({ commit }) => {
  commit('decrement')
}

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export const incrementBy = async ({ commit }) => {
    commit('incrementBy', await getsth())
}


// export const increment = ({ commit }) => {
//   commit({
//     type: 'increment',
//     amount: 10
//   })
// }
