<template>
    <div class="demo">
        <example />
        <pageAndSearchExample />
        <operatesExample />
        <selectExample />
        <toolExample />
        <widthFixedExample />
        <heightExample />
        <renderExample />
        <paginationExample />
        <description />
        <tableObj />
        <configObj />
        <columns />
        <actions />
        <toolBarRender />
        <TableProSelect />
        <TableProColumnItem />
        <refMethods />
    </div>
</template>
<script>
import example from "./example/example.vue";
import pageAndSearchExample from "./example/pageAndSearch.vue";
import operatesExample from "./example/operates.vue";
import selectExample from "./example/select.vue";
import toolExample from "./example/tool.vue";
import widthFixedExample from "./example/widthFixed.vue";
import heightExample from "./example/height.vue";
import renderExample from "./example/render.vue";
import paginationExample from "./example/pagination.vue";
import description from "./description/index.vue"
import tableObj from "./description/tableObj.vue"
import configObj from "./description/configObj.vue"
import columns from "./description/columns.vue"
import actions from "./description/actions.vue"
import toolBarRender from "./description/toolBarRender.vue"
import refMethods from "./description/refMethods.vue"
import TableProSelect from "./description/TableProSelect.vue"
import TableProColumnItem from "./description/TableProColumnItem.vue"
export default {
    name:'tableProName',
    components:{
        example,
        pageAndSearchExample,
        operatesExample,
        selectExample,
        toolExample,
        widthFixedExample,
        heightExample,
        renderExample,
        paginationExample,
        description,
        tableObj,
        configObj,
        columns,
        actions,
        toolBarRender,
        TableProSelect,
        TableProColumnItem,
        refMethods,
    },
}
</script>

