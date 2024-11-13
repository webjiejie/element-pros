<template>
    <el-breadcrumb :separator="separator">
        <el-breadcrumb-item v-for="(item,index) in arr" :key="index">
            <span :style="{color:colors[index]||''}" v-if="type===2">{{item.title}}</span>
            <router-link :to="item.path" v-else-if="item.path && ((!type && !index) || (type===1 && index < arr.length-1))" :style="{color:colors[index]||''}">{{item.title}}</router-link> 
            <span :style="{color:colors[index]||''}" v-else>{{item.title}}</span>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
    name:'ElBreadcrumbPro',
    props:{
        homeName:{
            type:String,
            default:'首页'
        },
        homePath:{
            type:String,
            default:'/'
        },
        menuList:{ // 菜单数组
            type:Array,
            default:()=>{
                return []
            }
        },
        routerBase:{ // 路由的base
            type:String,
            default:'',
        },
        fieldNames:{ // 别名
            type:Object,
            default:()=>{
                return {}
            }
        },
        colors:{ // 颜色控制
            type:Array,
            default:()=>{
                return []
            }
        },
        type:{ // 1:除了最后一个不能点击，2：都不能点击，默认只有第一个能点击
            type:Number,
        },
        separator:{
            type:String,
            default:'/',
        }
    },
    data(){
        return {
            pathname:'',  //当前路由
            arr:[], //显示
            obj:{},  //历史记录
            fields:{ id:'path', title: 'title', path:'path', children:'children'},
        }
    },
    computed:{
        isHash(){
            return location.hash.startsWith('#/');
        }
    },
    watch:{
        '$route.path'(e){
            if(this.obj[e]){
                this.arr = this.obj[e];
            }else{
                this.pathname = e;
                this.getPath();
                this.obj[e] = this.arr;
            }
        }
    },
    created(){
        this.fields = {...this.fields,...this.fieldNames}
        this.pathname = this.getUrl();
        this.getPath();
        this.obj[this.pathname] = this.arr;
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
        getName(arr,title_arr){  //根据当前网址匹配当前面包屑名字
            arr.forEach(item => {
                const my_title_arr = [...title_arr];
                const title = item[this.fields.title]
                const path = item[this.fields.path];
                if(title !== null || title !== undefined){
                    my_title_arr.push({
                        title,
                        path,
                    })
                }
                if(path && path == this.pathname ){
                    this.arr = my_title_arr;
                }else if(item[this.fields.children]){
                    this.getName(item[this.fields.children],my_title_arr);
                }
                
            });
        },
        getPath(){
            const arr = [];
            if(this.homeName){
                arr.push({
                    title:this.homeName,
                    path:this.homePath
                })
            }
            if(this.pathname === this.homePath){
                this.arr = arr;
            }else if(this.menuList){
                this.getName(this.menuList,arr);
            }
        }
    }
}
</script>