import { createApp } from 'vue'
import { createPinia } from 'pinia'

import Page1 from './Page1.vue'
import Page2 from './Page2.vue'
import router from './router'

const config = document.getElementById('app-config');
// put config into store etc

const PageOneEle = document.getElementById('PageOne');
if (PageOneEle) {
  const app = createApp(Page1, { globalConfig: config?.dataset, customValue: PageOneEle.dataset.paramForPage1  })
  app.use(createPinia()) // could be reused
  app.use(router)
  app.mount('#PageOne')
};

const PageTwoEle = document.getElementById('PageTwo');
if (PageTwoEle) {
  const app = createApp(Page2, { globalConfig: config?.dataset, customValue: PageTwoEle.dataset.paramForPage2 })
  app.use(createPinia())
  app.use(router)
  app.mount('#PageTwo')
};


