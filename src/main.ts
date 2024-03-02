import { createApp } from 'vue'
import './styles/index.css'
import App from './App.vue'

import { setupStore } from './store'
import { setupRouter } from './router'

bootstrap()

function bootstrap() {
  const app = createApp(App)

  // router
  setupRouter(app)

  // store
  setupStore(app)

  // mount
  app.mount('#app')
}
