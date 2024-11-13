<template>
    <div class="el-layout-pro">
        <div class="el-layout-pro-l" :style="{width:menuWidth+'px'}">
            <div v-if="hearderConfig.isFixed || hearderConfig.title || hearderConfig.image.src">
                <div class="el-layout-pro-title" :style="{boxShadow:hearderConfig.isFixed?'':'0 0 10px 0 #2255bc1a'}">
                    <el-image :class="'el-layout-pro-title-l '+(collapse?'el-layout-pro-title-collapse-l':'')" v-if="!hearderConfig.isFixed && hearderConfig.image.src" v-bind="hearderConfig.image"></el-image>
                    <div :class="'el-layout-pro-title-r '+(collapse?'el-layout-pro-title-collapse-r':'')" v-if="!hearderConfig.isFixed && hearderConfig.title">{{ hearderConfig.title }}</div>
                </div>
            </div>
            <div class="el-layout-pro-lc">
                <el-menu-pro :menuList="menuList" :routerBase="routerBase" :fieldNames="menuConfig.fieldNames||{}" :props="{collapse,...(menuConfig.props||{})}" @change="menuChange"/>
            </div>
            <div class="el-layout-pro-li" @click="showFn" v-if="menuConfig.collapseShow">
                <i :class="collapse?'el-icon-arrow-right':'el-icon-arrow-left'"></i>
            </div>
        </div>
        <div class="el-layout-pro-r" :style="{width:`calc(100% - ${menuWidth}px)`, position:hearderConfig.isFixed?'':'relative'}">
            <div class="el-layout-pro-rt" v-if="hearderConfig.show">
                <div class="el-layout-pro-rtl" v-if="hearderConfig.isFixed && (hearderConfig.title || hearderConfig.image.src)"  >
                    <div class="el-layout-pro-title" >
                        <el-image :class="'el-layout-pro-title-l '+(collapse?'el-layout-pro-title-collapse-l':'')" v-if="hearderConfig.image.src" v-bind="hearderConfig.image"></el-image>
                        <div class="el-layout-pro-title-r" v-if="hearderConfig.title">{{ hearderConfig.title }}</div>
                    </div>
                </div>
                <div class="el-layout-pro-rtr" :style="{maxWidth:hearderConfig.isFixed?`calc(100% - ${menuWidth}px)`:''}">
                    <div class="el-layout-pro-rtrl">
                        <slot name="headerLeft"></slot>
                    </div>
                    <el-dropdown @command="handleCommand">
                        <slot name="headerRight"></slot>
                        <div v-if="!$slots.headerRight" class="el-layout-pro-rtrr">
                            <el-avatar v-if="hearderConfig.avatar" class="el-layout-pro-rtrri" size="medium" :src="hearderConfig.avatar" >
                                <i class="el-icon-s-custom"></i>
                            </el-avatar>
                            <span>
                            {{ hearderConfig.name }}
                            </span>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item v-for="(item,index) in hearderConfig.dropdownList" :key="index" :command="item">
                                <renderItem v-if="item.render" :renderFn="item.render"/>
                                <div v-else>
                                    <i v-if="item.icon" :class="item.icon"></i>
                                    <span>{{ item.name }}</span>
                                </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
            <div class="el-layout-pro-rc" :style="{marginTop:hearderConfig.show?'':'0'}">
                <slot name="topTab"></slot>
                <div v-if="!$slots.topTab && topTabType" class="el-layout-pro-rct">
                    <el-menu-tabbar v-if="topTabType==='tabbar'" :menuList="menuList" :routerBase="routerBase" @change="tabbarChange" v-bind="{fieldNames:menuConfig.fieldNames||{},...tabbarProps}"></el-menu-tabbar>
                    <el-breadcrumb-pro v-else-if="topTabType==='breadcrumb'" :menuList="menuList" :routerBase="routerBase" v-bind="{fieldNames:menuConfig.fieldNames||{},...breadcrumbProps}"></el-breadcrumb-pro>
                </div>
                <div class="el-layout-pro-rcv">
                    <slot></slot>
                    <keep-alive v-if="!$slots.default" :include="routers">
                        <router-view />
                    </keep-alive>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import renderItem from "../../common/renderItem.js"
export default {
    name:'ElLayoutPro',
    components:{
        renderItem
    },
    props:{
        menuList:{
            type:Array,
            default:()=>{
                return []
            }
        },
        routerBase:{ // 路由的base
            type:String,
            default:'',
        },
        hearderProps:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        menuProps:{ // 菜单的其他参数
            type:Object,
            default:()=>{
                return {}
            }
        },
        keepRouter:{
            type:Array,
            default:()=>{
                return []
            }
        },
        topTabType:{ // 显示的类型，tabbar或者面包屑，tabbar ｜ breadcrumb
            type:String,
            default:'tabbar',
        },
        tabbarProps:{ // tabbar的其他参数
            type:Object,
            default:()=>{
                return {}
            }
        },
        breadcrumbProps:{ // 面包屑的其他参数
            type:Object,
            default:()=>{
                return {}
            }
        }
    },
    data(){
        return {
            collapse:false, // 是否收起菜单
            routers:[], // keep-alive的router路径
            menuConfig:{ // 左边菜单的配置
                width: 200, // 菜单的宽度
                collapseShow: true, // 是否显示菜单的收入展开按钮
                fieldNames:undefined,
                props:undefined
            },
            hearderConfig:{ // 顶部hearder的配置
                show:true, // 是否显示
                isFixed: false, // 是否浮动
                title:'', // 系统标题
                image:{
                    src:'',
                    fit:'cover',
                    style:"width: 30px;height:30px"
                }, // 系统的icon图片
                avatar:'', // 用户头像
                name:'', // 用户名字
                dropdownList:[]
            }
        }
    },
    computed:{
        menuWidth(){
            return this.collapse?64:this.menuConfig.width
        }
    },
    watch:{
        keepRouter(){
            this.routers = this.keepRouter;
        }
    },
    created(){
        this.initMenu();
        this.initHearder();
    },
    methods:{
        initMenu(){
            for(const key in this.menuConfig){
                if(Object.prototype.hasOwnProperty.call(this.menuProps,key)){
                    this.menuConfig[key] = this.menuProps[key];
                }
            }
        },
        initHearder(){
            for(const key in this.hearderConfig){
                const item = this.hearderProps[key];
                if(key === 'image'){
                    this.hearderConfig[key] = {...this.hearderConfig[key],...(item||{})}
                }else if(item){
                    this.hearderConfig[key] = item;
                }
            }
        },
        showFn(){
            this.collapse = !this.collapse;
        },
        handleCommand(item){ // 下拉的功能按钮
            item.click && item.click();
        },
        menuChange(e){ // 菜单变化了
            this.$emit('menuChange',e)
        },
        tabbarChange(e){ // mentTabbar新增或删除
            this.$emit('tabbarChange',e)
        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>