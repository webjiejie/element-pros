<template>
    <div class="quickstart">
        <div class="quickstart-t">快速上手</div>
        <div class="quickstart-c">引入 elementPros</div>
        <div class="quickstart-t2">完整引入</div>
        <div>在 main.js 中写入以下内容：</div>
        <pre v-highlight><code class="language-javascript hljs quickstart-v" >{{ code }}</code></pre>
        <div class="quickstart-t2">按需引入部分组件</div>
        <div>在 main.js 中写入以下内容：</div>
        <pre v-highlight><code class="language-javascript hljs quickstart-v" >{{ code2 }}</code></pre>
        <div class="quickstart-t2">注意事项</div>
        <div>由于本插件跳转用的vue-router，所以需自己安装引入vue-router</div>
        <div>Methods是在组件上使用@加方法名,如：@change</div>
        <div>RefMethods是要获取组件的ref实例后调用其上带的方法名，如：this.$refs.domRef.change()</div>
    </div>
</template>
<script>
export default {
    name:'quickstartName',
    data(){
        return {
            code:`import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import elementPros from 'element-pros';
import 'element-pros/dist/index.css';

Vue.use(ElementUI);
Vue.use(elementPros);

new Vue({
  el: '#app',
  render: h => h(App)
});`,
            code2:`import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {menuPro, menuTabbar, breadcrumbPro, formPro, modalForm, tablePro, layoutPro} from 'element-pros';
import 'element-pros/dist/index.css';

Vue.use(ElementUI);
Vue.use(menuPro);
Vue.use(menuTabbar);
Vue.use(breadcrumbPro);
Vue.use(formPro);
Vue.use(modalForm);
Vue.use(tablePro);
Vue.use(layoutPro);

new Vue({
  el: '#app',
  render: h => h(App)
});`
        }
    },
}
</script>
<style scoped lang="scss">
.quickstart{
    min-height: 100%;
    color: #1f2f3d;
    padding:16px;
    background: #fff;
    &-t{
        font-size: 28px;
    }
    &-t2{
        font-size: 22px;
        margin: 24px 0 12px;
    }
    &-c{
        font-weight: 400;
        font-size: 22px;
        margin-top: 32px;
    }
    &-v{
        padding: 18px 24px;
        color: #000;
        background-color: #fafafa;
    }
}
</style>
