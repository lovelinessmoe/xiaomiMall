import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

app.use(ElementPlus)
import * as ElIconModules from '@element-plus/icons-vue'
// 统一注册el-icon图标
for (let iconName in ElIconModules) {
    app.component(iconName, ElIconModules[iconName])
}

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';

import './assets/reset.css';

app.use(Avue)

app.mount('#app')
