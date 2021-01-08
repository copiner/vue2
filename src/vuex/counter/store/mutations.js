/*
You can pass an additional argument to store.commit,
which is called the payload for the mutation

一条重要的原则就是要记住 mutation 必须是同步函数
*/

export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}


// export const increment = (state, n) => {
//   state.count++
//   state.history.push('increment')
// }
//
export const incrementBy = (state, payload) => {
  console.log(payload)
  state.count += payload
}
