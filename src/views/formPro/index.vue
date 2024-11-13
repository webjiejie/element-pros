<template>
    <div class="demo">
        <example />
        <exampleSearch />
        <exampleRule />
        <exampleSpan />
        <formPro />
        <columnsItem />
        <refMethods />
    </div>
</template>
<script>
import example from "./example/example.vue";
import exampleSearch from "./example/search.vue";
import exampleRule from "./example/rule.vue";
import exampleSpan from "./example/span.vue";
import formPro from "./description/index.vue"
import columnsItem from "./description/columnsItem.vue"
import refMethods from "./description/refMethods.vue"
export default {
    name:'formProName',
    components:{
        example,
        exampleSearch,
        exampleRule,
        exampleSpan,
        formPro,
        columnsItem,
        refMethods,
    },
}
</script>
