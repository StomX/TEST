import Vue from 'vue'
import App from './App.vue'
import { router } from './routes/index.js'
import { store } from './store/index'

Vue.config.productionTip = false

Vue.filter('striphtml', (value) => {
  var div = document.createElement("div");
  div.innerHTML = value;
  var text = div.textContent || div.innerText || "";
  return text;
})

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
