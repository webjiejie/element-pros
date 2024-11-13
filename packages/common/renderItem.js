
import {isType} from "../util/utils.js"
export default {
    name:'render-item',
    props:{
        renderFn:{
            type:Function,
            default:()=>{}
        },
        params:{
            type:Array,
            default:()=>{
                return []
            }
        },
    },
    data(){
        return {
            isChange:true, // 是否需要更新缓存
            cacheDom:undefined, // 缓存的返回dom
            // oldParams:{},
        }
    },
    watch:{
        params:{
            deep:true,
            handler:function(){
                this.isChange = true
            }
        }
    },
    render(h){
        if(!this.isChange){
            return this.cacheDom;
        }
        let cache = undefined;
        if(this.renderFn){
            const result = this.renderFn(...this.params);
            if(isType(result,'[object Object]')){
                cache = result;
            }else{
                cache = h('span',null,result);
            }
        }
        this.cacheDom = cache;
        this.isChange = false;
        return cache;
    }
}
