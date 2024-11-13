<template>
    <div class="flex-align">
        <renderItem v-if="obj.renderIcon" :renderFn="obj.renderIcon"></renderItem>
        <div v-else-if="icon">
            <i :class="icon"></i>
        </div>
        <span>{{obj[fields.title]}}</span>
    </div>
</template>
<script>
import renderItem from "../../../common/renderItem.js"
export default{
    components:{
        renderItem
    },
    props:{
        obj:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        fields:{
            type:Object,
        }
    },
    data(){
        return {
            icon:'',
        }
    },
    created(){
        const icon = this.obj[this.fields.icon];
        if(icon){
            this.icon = icon + '';
        }
    }
}
</script>
<style lang="scss" scoped>
.flex-align{
    display: flex;
    align-items: center;
}
.menu-icon{
    display: flex;
    align-items: center;
}
</style>