<template>
    <div class="demo">
        <example />
        <fieldNamesExample />
        <stylesExample />
        <menuPro />
        <menuTabbar />
        <fieldNames />
        <styles />
        <methods />
    </div>
</template>
<script>
import example from "./example/example.vue";
import fieldNamesExample from "./example/fieldNames.vue"
import stylesExample from "./example/styles.vue"
import menuPro from "./description/index.vue"
import menuTabbar from "./description/menuTabbar.vue"
import fieldNames from "./description/fieldNames.vue"
import styles from "./description/styles.vue"
import methods from "./description/methods.vue"
export default {
    name:'menuTabbarName',
    components:{
        example,
        fieldNamesExample,
        stylesExample,
        menuPro,
        menuTabbar,
        fieldNames,
        styles,
        methods,
    },
}
</script>
