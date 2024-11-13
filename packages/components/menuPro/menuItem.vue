<template>
    <div>
        <el-submenu v-if="obj[fields.children] && obj[fields.children].length" :index="index">
            <template slot="title">
                <itemComponent :obj="obj" :fields="fields" />
            </template>
            <menu-item v-for="(item,dex) in obj[fields.children]" :key="dex" :obj="item" :index="index+'-'+(dex)" :fields="fields"></menu-item>
        </el-submenu>
        <el-menu-item v-else :index="index">
            <itemComponent :obj="obj" :fields="fields" />
        </el-menu-item>
    </div>
</template>
<script>
import itemComponent from "./component/itemComponent.vue"
export default{
    name:'menu-item',
    components:{
        itemComponent
    },
    props:{
        obj:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        index:{
            type:String,
        },
        fields:{
            type:Object,
            default:()=>{
                return {}
            }
        }
    }
}
</script>