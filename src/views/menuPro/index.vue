<template>
    <div class="demo">
        <example />
        <fieldNamesPro />
        <menuPro />
        <menuList />
        <fieldNames />
        <methods />
    </div>
</template>
<script>
import example from "./example/example.vue";
import fieldNamesPro from "./example/fieldNames.vue"
import menuPro from "./description/index.vue"
import menuList from "./description/menuList.vue"
import fieldNames from "./description/fieldNames.vue"
import methods from "./description/methods.vue"
export default {
    name:'menuProName',
    components:{
        example,
        fieldNamesPro,
        menuPro,
        menuList,
        fieldNames,
        methods,
    },
}
</script>
