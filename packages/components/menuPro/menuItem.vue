<template>
    <div>
        <el-submenu v-if="obj[fields.children] && obj[fields.children].length" :index="index">
            <template slot="title">
                <renderItem class="el-menu-item-icon" v-if="obj.renderIcon" :renderFn="obj.renderIcon"></renderItem>
                <i v-else-if="obj[fields.icon]" :class="obj[fields.icon]"></i>
                <span>{{obj[fields.title]}}</span>
            </template>
            <menu-item v-for="(item,dex) in obj[fields.children]" :key="dex" :obj="item" :index="index+'-'+(dex)" :fields="fields"></menu-item>
        </el-submenu>
        <el-menu-item v-else :index="index">
            <renderItem class="el-menu-item-icon" v-if="obj.renderIcon" :renderFn="obj.renderIcon"></renderItem>
            <i v-else-if="obj[fields.icon]" :class="obj[fields.icon]"></i>
            <template slot="title">
                {{obj[fields.title]}}
            </template>
        </el-menu-item>
    </div>
</template>
<script>
import renderItem from "../../common/renderItem.js"
export default{
    name:'menu-item',
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
<style lang="scss" scoped>
.el-menu-item-icon{
    margin-right: 5px;
}
</style>