import * as components from './components'
// const LibabcVue = {}
// LibabcVue.install = function(Vue, options) {
//     for(let component in components) {
//         Vue.component('libabc'+component, components[component]);
//     }
// }
// export default LibabcVue

export default {
  install: (Vue, options) => {
    // Plugin code goes here
    for(let component in components) {
        console.log('libabc'+component)
        Vue.component('libabc'+component, components[component]);
    }
  }
}
