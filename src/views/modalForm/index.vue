<template>
    <div class="demo">
        <example />
        <propsExample />
        <detailExample />
        <footerExample />
        <layoutPro />
        <refMethods />
    </div>
</template>
<script>
import example from "./example/example.vue";
import propsExample from "./example/props.vue";
import detailExample from "./example/detail.vue";
import footerExample from "./example/footer.vue";
import layoutPro from "./description/index.vue";
import refMethods from "./description/refMethods.vue"
export default {
    name:'modalFormName',
    components:{
        example,
        propsExample,
        detailExample,
        footerExample,
        layoutPro,
        refMethods
    },
}
</script>

