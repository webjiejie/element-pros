export default{
    name:'my-keep',
    abstract: true,
    props:{
        include:Array | String,
    },
    created(){
        this.cache = {};
        console.log(6666)
    },
    mounted(){
        
    },
    render(res,res2){
        console.log(this,res,res2)
        const slot = this.$slots.default
        const firstDom = slot[0];
        console.log(res,res2,slot,slot.componentOptions)
        const key = firstDom.key || firstDom.tag
        this.key = key;
        console.log(key,this.cache)
        if(this.cache && this.cache[key]){
            console.log(890)
            return this.cache[key];
        }else{
            this.cache[this.key] = firstDom;
            return firstDom;
        }
    }
}