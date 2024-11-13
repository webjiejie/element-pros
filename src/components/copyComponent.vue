<template>
    <div class="copy-main">
        <div class="title" v-if="$slots.title">
            <slot name="title"></slot>
        </div>
        <div class="copy-main-t">
            <slot></slot>
            <div class="copy-main-tv" v-if="shelter"></div>
        </div>
        <div class="copy-main-v" :style="{height:show?height+'px':''}">
            <div ref="codeView">
                <div v-if="$slots.remark" style="padding: 10px;">
                    <div  class="copy-main-vt" >
                        <slot name="remark"></slot>
                    </div>
                </div>
                <pre v-highlight><code class="html hljs xml" >{{ code }}</code></pre>
            </div>
        </div>
        <div class="copy-main-c" @click="changeShow">
            <i :class="'copy-main-ci '+(show?'el-icon-caret-top':'el-icon-caret-bottom')"></i>
            <span class="copy-main-cs">{{ show?'隐藏':'显示' }}代码</span>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        shelter:{ // 是否可操作顶部example的内容
            type:Boolean,
            default:false,
        },
        code:String,
    },
    data(){
        return {
            show:false,
            height:0,
        }
    },
    mounted(){
        this.height = this.$refs.codeView.offsetHeight
    },
    methods:{
        changeShow(){
            this.show = !this.show;
        }
    }
}
</script>
<style lang="scss" scoped>
.copy-main{
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    background: #fff;
    margin-bottom: 24px;
    &:hover{
        .copy-main-c>i{
            transform: translateX(-40px);
        }
        .copy-main-cs{
            display: inline-block;
        }
    }
    .title{
        padding: 16px 16px 0;
        font-weight: 600;
        font-size: 24;
    }
    &-t{
        position: relative;
        padding: 24px;
        &v{
            position: absolute;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
        }
    }
    &-v{
        background-color: #fafafa;
        border-top: 1px solid #eaeefb;
        overflow: hidden;
        height: 0;
        transition: height .2s;
        &t{
            padding: 20px;
            box-sizing: border-box;
            border: 1px solid #ebebeb;
            border-radius: 3px;
            font-size: 14px;
            line-height: 22px;
            color: #666;
            word-break: break-word;
            background-color: #fff;
        }
    }
    &-c{
        border-top: 1px solid #eaeefb;
        height: 44px;
        line-height: 44px;
        box-sizing: border-box;
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
        text-align: center;
        margin-top: -1px;
        color: #d3dce6;
        cursor: pointer;
        position: relative;
        transition: 0.3s;
        &:hover{
            color: #409eff;
            background-color: #f9fafc;
        }
        &s{
            font-size: 14px;
            line-height: 44px;
            position: absolute;
            display: none;
            transform: translateX(-30px);
        }
    }
    pre{
        margin: 0;
        padding: 0;
        white-space: pre-wrap;
    }
    .hljs{
        background: transparent;
    }
}
</style>


