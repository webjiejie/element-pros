<template>
    <div class="main">
        <el-layout-pro :hearderProps="hearderProps" :menuList="menuList" :routerBase="routerBase"  :keepRouter="keepRouter" @tabbarChange="tabbarChange">
            <div slot="headerLeft">
                <a href="/static/elementProsV3/" class="main-header-vr">点击前往vue3版本的elementProsV3插件</a>
            </div>
            <div slot="headerRight">
                <el-select v-model="version" @change="changeVersion" placeholder="请选择" class="main-hearder-r">
                    <el-option
                    v-for="(item,index) in versions"
                    :key="index"
                    :label="item.version"
                    :value="item.url">
                    </el-option>
                </el-select>
            </div>
        </el-layout-pro>
    </div>
</template>
<script>
import {menuList} from "@/router"
import routerCongif from "@/router/config"
import packageJson from "../../package.json"
export default {
    data() {
        return {
            // version:packageJson.version, // 当前版本号
            keepRouter:[],
            routerBase:routerCongif.routerBase, // router的base
            menuList,
            hearderProps:{
                // name:'游客',
                // avatar:require('@/assets/1.png'),
                title:"elementPros",
                image:{
                    src:'https://cyj.lovewenqin.cn/static/favicon.ico'
                },
                // dropdownList:[
                //     {
                //         // render:()=>{
                //         //     return 123
                //         // },
                //         // icon:'el-icon-switch-button',
                //         name:'退出',
                //         click:()=>{
                //             console.log(1111)
                //         }
                //     }
                // ]
            },
            version:'',
            versions:[
                {
                    version:'1.8.0',
                    url:'/static/versions/elementPros/1.8.0'
                },
                {
                    version:'1.7.1',
                    url:'/static/versions/elementPros/1.7.1'
                }
            ]
        }
    },
    created(){
       this.getVersion(true);
    },
    methods: {
        getVersion(bool){
            const findObj = this.versions.find(item=>{
                return item.version === packageJson.version
            })
            if(findObj){
                this.version = findObj.url
            } else if(bool){
                this.version = this.versions[0].url
            }
        },
        tabbarChange(arr){
            this.keepRouter = arr.map(item=>{
                const paths = item.id.split('/');
                return paths[paths.length-1]
            })
        },
        changeVersion(url){
            location.href = url
            this.$nextTick(this.getVersion(true))
        }
    }
}
</script>

<style lang="scss" scoped>
.main{
    height: 100%;
    overflow: hidden;
    &-header-v{
        display: flex;
        align-items: center;
        &r{
            margin-left: 4px;
            color:#409eff;
            cursor: pointer;
            font-size: 14px;
        }
    }
    &-hearder-r{
        width: 90px;
        ::v-deep(input){
            border: none;
        }
    }
}
</style>
  