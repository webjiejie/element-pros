<template>
    <div class="installation">
        <div class="installation-t">安装</div>
        <div class="installation-c">介绍</div>
        <div class="installation-j">基于element-ui封装的vue2组件，可快速、便捷创建后台管理系统</div>
        <div class="installation-c">npm 安装</div>
        <pre v-highlight><code class="html hljs xml installation-v" >{{ code }}</code></pre>
    </div>
</template>
<script>
export default {
    name:'installationName',
    data(){
        return {
            code:`npm i element-pros`
        }
    },
}
</script>
<style scoped lang="scss">
.installation{
    min-height: 100%;
    color: #1f2f3d;
    padding:16px;
    background: #fff;
    &-t{
        color: #1f2f3d;
        font-size: 28px;
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
    &-j{
        margin-top: 8px;
    }
}
</style>
