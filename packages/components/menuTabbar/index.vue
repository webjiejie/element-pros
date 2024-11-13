<template>
    <div class="el-menu-tabbar" ref="elMenuTabbar">
        <div class="el-menu-tabbar-c" ref="elMenuTabbarC" :style="{transform:`translateX(${translateX}px)`}">
            <div class="el-menu-tabbar-v" 
            v-for="(item,index) in arr" :key="index" 
            :style="item.path == router_str?activeStyle:defaultStyle"
            :ref="'tabbarV'+index"
            @click="choose(item,index)">
                {{item.title}}
                <i v-if="!inPathArr.includes(item.path)" @click.stop="delRouer(item,index)" class="el-icon-close"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'ElMenuTabbar',
    props:{
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
        notPathArr:{ //不能加入里面的
            typr:Array,
            default:()=>{
                return ['/login']
            }
        },
        inPathArr:{  //务必存在里面的，切不能被删除的
            typr:Array,
            default:()=>{
                return ['/home']
            }
        },
        styles:{ //样式
            type:Object,
            default:()=>{
                return {}
            },
        },
    },
    data(){
        return {
            arr:[], //选中的菜单
            id_s:[], //已经在数组里的菜单id，防止重复放入
            router_str:'', //当前路由的地址
            fields:{ id:'path', title: 'title', path:'path', children:'children'},
            styleObj:{
                background:'#fff',
                activeBackground:'#fff',
                color:'#000',
                activeColor:'#1677ff',
                borderColor:'#e4e7ed',
                activeBorderColor:'#409eff',
            },
            defaultStyle:{}, // 没选中的样式
            activeStyle:{}, // 选中的样式
            moreWidth:0, // 超出的宽度
            translateX:0, // x轴平移量
            time:null,
        }
    },
    computed:{
        isHash(){
            return location.hash.startsWith('#/');
        },
    },
    watch:{
        '$route.path'(e){
            this.router_str = e;
            if(!this.inPathArr.includes(e) && !this.notPathArr.includes(e)){  //在为必存在或不能存在时不走下面
                this.getTranslateX();
                this.getRouter(this.menuList,'');
            }
        },
        'id_s'(){ // 新增或删除路由
            this.$emit('change',this.arr);
            this.$nextTick(this.getWidth);
        }
    },
    created(){
        this.initStyle();
        this.fields = {...this.fields,...this.fieldNames}
        this.router_str = this.getUrl();
        this.getRouter(this.menuList,'',1);
    },
    mounted(){
        window.addEventListener('resize',this.addResize);
    },
    beforeDestroy(){
        window.removeEventListener('resize',this.addResize);
        clearTimeout(this.time)
    },
    methods:{
        addResize(){
            clearTimeout(this.time)
            this.time = setTimeout(()=>{
                clearTimeout(this.time)
                this.getWidth()
            },200)
        },
        initStyle(){
            this.styleObj = {...this.styleObj,...this.styles};
            const {background, activeBackground, color, activeColor, borderColor, activeBorderColor} = this.styleObj;
            this.defaultStyle = {...this.styleObj, color, borderColor, background}
            this.activeStyle = {...this.styleObj, color:activeColor, borderColor:activeBorderColor, background:activeBackground};
        },
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
        getTranslateX(){ // 获取x轴的平移量
            if(this.moreWidth > 0){
                const findIndex = this.arr.findIndex(item=>item.path === this.router_str);
                if(findIndex !== -1){ // 计算当前选中的显示在中间，除非已经移动到最大量了
                    let dom = this.$refs['tabbarV'+findIndex];
                    if(Array.isArray(dom)){
                        dom = dom[0]
                    }
                    let num = this.$refs.elMenuTabbar.clientWidth/2 - dom.offsetLeft - dom.clientWidth/2;
                    if(num>0){
                        num = 0;
                    }else if(num < -this.moreWidth){
                        num = -this.moreWidth;
                    }
                    this.translateX = num
                    return ;
                }
            }
            this.translateX = 0;
        },
        getWidth(){ // 获取宽度是否会超出
            if(this.$refs.elMenuTabbarC){
                this.moreWidth = this.$refs.elMenuTabbarC.clientWidth - this.$refs.elMenuTabbar.clientWidth;
            }else{
                this.moreWidth = 0;
            }
            this.getTranslateX();
        },
        getRouter(arr,str,c_type){  //获取匹配的路由
            for(var i=0;i<arr.length;i++){
                const item = arr[i];
                let router_s = '';
                const path = item[this.fields.path]
                let s_bool = path?.startsWith('/');  //这是判断是不是以绝对路由开始
                if(s_bool){
                    router_s = path;
                }else{
                    router_s = str?(str+'/'+path):path;
                }
                const id = item[this.fields.id];
                if(!this.id_s.includes(id) && this.inPathArr.includes(router_s)){
                    this.arr.splice(this.arr.length,1,{
                        title:item[this.fields.title],
                        path:router_s,
                        id
                    });
                    this.id_s.splice(this.id_s.length,1,id);
                }
                if(router_s == this.router_str){
                    if(this.notPathArr.includes(router_s)){  //这是不能在菜单里面的，考虑到父级菜单路由都不能在，子集更应该不能放入，所以直接break结束循环
                        break;
                    }
                    if(!this.id_s.includes(id)){ //没存在就放进去
                        this.arr.splice(this.arr.length,1,{
                            title:item[this.fields.title],
                            path:router_s,
                            id
                        });
                        this.id_s.splice(this.id_s.length,1,id);
                    }
                    if(!c_type){  //看是否走全部
                        break;
                    }
                }else if(item[this.fields.children] && item[this.fields.children].length){
                    this.getRouter(item[this.fields.children],router_s,c_type);
                }
            }
        },
        choose(e){ //选中该路由
            const path = e.path
            if(path == this.router_str) return;
            this.router_str = path;
            this.$router.push(path);
        },
        delRouer(e,e1){ //删除
            if(this.router_str == e.path){ //删除当前所在，就跳到前面一个路由去
                if(e1-1<0){ // 如果前面一个没用就查看后面一个是否存在
                    const item = this.arr[e1+1];
                    if(item){
                        this.$router.push(item.path);
                    }
                }else{
                    this.$router.push(this.arr[e1-1].path);
                }
            }
            this.id_s.splice(e1,1);
            this.arr.splice(e1,1);
        },
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>