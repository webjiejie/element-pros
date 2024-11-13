<template>
    <div class="demo">
        <example />
        <homeComponent />
        <typeComponent />
        <fieldNamesComponent />
        <breadcrumbPro />
    </div>
</template>
<script>
import example from "./example/example.vue";
import homeComponent from "./example/home.vue";
import typeComponent from "./example/type.vue";
import fieldNamesComponent from "./example/fieldNames.vue"
import breadcrumbPro from "./description/index.vue"

export default {
    name:'breadcrumbProName',
    components:{
        example,
        homeComponent,
        typeComponent,
        fieldNamesComponent,
        breadcrumbPro,
    },
}
</script>
