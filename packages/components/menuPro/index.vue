<template>
    <el-menu
    :default-active="activeIndex"
    @select="handleSelect"
    class="el-menu-pro"
    v-bind="props"
    >
        <submenuComponent v-for="(item,index) in menuList" :key="index" :obj="item" :index="index+''" :fields="fields"></submenuComponent>
    </el-menu>
</template>
<script>
import submenuComponent from "./menuItem.vue"
export default {
    name:'ElMenuPro',
    components:{
        submenuComponent
    },
    props:{
        menuList:{ // 菜单数组
            type:Array,
            default:()=>{
                return []
            }
        },
        fieldNames:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        disabled:{ // 是否禁用，点击不生效
            type:Boolean,
            default:false,
        },
        routerBase:{ // 路由的base
            type:String,
            default:'',
        },
        props:{ // element菜单的其他配置
            type:Object,
            default:()=>{
                return {};
            }
        }
    },
    data(){
        return {
            activeIndex:'',
            findObj:undefined, // 当前选中的菜单对象
            fields:{ title: 'title', children: 'children', icon: 'icon', path:'path'}
        }
    },
    computed:{
        isHash(){
            return location.hash.startsWith('#/');
        }
    },
    watch:{
        '$route.path'(){
            this.getIndex(this.menuList,this.getUrl(),[])
        }
    },
    created(){
        this.fields = {...this.fields,...this.fieldNames}
        this.getIndex(this.menuList,this.getUrl(),[])
    },
    methods:{
        getUrl(){
            let url;
            if(this.isHash){
                url = location.hash.slice(1);
            }else{
                url = location.pathname.slice(this.routerBase.length-location.pathname.length);
            }
            if(!url.startsWith('/')){
                url = '/'+url;
            }
            return url;
        },
        getRouter(){
            if(this.disabled) return;
            const arr = this.activeIndex.split('-');
            let list = this.menuList;
            let findObj;
            while(arr.length){
                findObj = list[arr.splice(0,1)[0]];
                const children = findObj[this.fields.children]
                if(children){
                    list = children;
                }
            }
            if(findObj){
                const path = findObj[this.fields.path];
                if(path && path !== this.getUrl()){
                    this.$router.push(findObj[this.fields.path])
                }
            }
            this.findObj = findObj;
        },
        getIndex(arr,str,list){ //匹配对应路由
            for (var i=0;i<arr.length;i++){
                const item = arr[i];
                const path = item[this.fields.path]
                const children = item[this.fields.children]
                if(path == str){
                    list.push(i);
                    this.activeIndex = list.join('-');
                    this.findObj = item;
                    this.$emit('change',{
                        index:this.activeIndex,
                        menuItem:this.findObj
                    });
                    break;
                }else if(children && children.length){
                    let new_list = [...list];
                    new_list.push(i);
                    this.getIndex(children,str,new_list);
                }
            }
        },
        handleSelect(key) {
            if(this.activeIndex === key) return ;
            this.activeIndex = key;
            this.getRouter();
        }
    }
}
</script>
<style scoped>
.el-menu-pro{
    height: 100%;
    border-right: none;
}
</style>
