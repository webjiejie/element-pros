<template>
    <div class="demo">
        <example1 />
        <example2 />
        <example3 />
        <layoutPro />
        <hearderProps />
        <methods />
    </div>
</template>
<script>
import example1 from "./example/example.vue";
import example2 from "./example/fieldNames.vue";
import example3 from "./example/slot.vue";
import layoutPro from "./description/index.vue"
import hearderProps from "./description/hearderProps.vue"
import methods from "./description/methods.vue"
export default {
    name:'layoutProName',
    components:{
        example1,
        example2,
        example3,
        layoutPro,
        hearderProps,
        methods,
    },
}
</script>

