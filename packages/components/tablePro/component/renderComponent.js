import {isType} from "../../../util/utils.js"
export default {
    name:'render-component',
    props:{
        item:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        scope:{
            type:Object,
            default:()=>{
                return {}
            }
        },
    },
    data(){
        return {
            isChange:true, // 是否需要更新缓存
            cacheDom:undefined, // 缓存的返回dom
        }
    },
    watch:{
        'scope.row':{
            deep:true,
            handler:function(){
                this.isChange = true
            }
        },
        'scope.$index'(){
            this.isChange = true
        }
    },
    render(h){
        if(!this.isChange){
            return this.cacheDom;
        }
        const {render, dataIndex, } = this.item;
        const {row={}, $index } = this.scope;
        let text = row[dataIndex]
        let dom,cache;
        if(render){
            dom = render(text,row,$index)
        }else if(dataIndex in row){
            dom = text;
        }else{
            dom = "-";
        }
        if(isType(dom,'[object Object]')){
            cache = dom;
        }else{
            cache = h('span',null,dom)
        }
        this.cacheDom = cache;
        this.isChange = false;
        return cache;
    }
}