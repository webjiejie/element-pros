<template>
    <el-form :class="'el-form-pro '+(isCard?'el-form-pro-card':'')" v-if="list.length" :model="searchForm" v-bind="formProps" :disabled="disabled">
        <div  v-for="(item,index) in list" :key="index" class="el-form-pro-v">
            <div v-for="(ite,dex) in item" :key="dex" :style="{width:`calc(${100*(ite.widthSpan||1)/columnNum}% - ${interval*(columnNum-(ite.widthSpan||1))/columnNum}px)`,marginLeft:dex>0?interval+'px':''}" >
                <div v-if="ite.type === 'blankRow'" style="height: 1px;"></div>
                <el-form-item v-else-if="ite.type === 'searchButton'" class="el-form-pro-button">
                    <el-button v-if="ite.isReset" size="small" @click="reset">重置</el-button>
                    <el-button size="small" type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item v-else :label="ite.label" class="el-form-pro-vc" :prop="ite.key" :rules="ite.rules" :labelWidth="ite.labelWidth||''">
                    <renderItem v-if="ite.render" :renderFn="ite.render" :params="[searchForm]"/>
                    <!-- 文本 -->
                    <div v-else-if="ite.type === 'text'" :style="{width: ite.width || ''}" v-bind="ite.props"></div>
                    <!-- 输入框 -->
                    <el-input v-else-if="ite.type === 'input'" v-model="searchForm[ite.key]" :style="{width: ite.width || ''}" @change="change(ite.key)" v-bind="ite.props"></el-input>
                    <!-- 下拉选择 -->
                    <el-select v-else-if="ite.type === 'select'" v-model="searchForm[ite.key]" :style="{width: ite.width || ''}" @change="change(ite.key)" v-bind="ite.props" >
                        <el-option
                        v-for="(item,index) in optionsObj[ite.key]"
                        :key="index"
                        :label="item[ite.props&&ite.props.props&&ite.props.props.label?ite.props.props.label:'label']"
                        :value="item[ite.props&&ite.props.props&&ite.props.props.value?ite.props.props.value:'value']">
                        </el-option>
                    </el-select>
                    <el-switch
                        v-else-if="ite.type === 'switch'"
                        v-model="searchForm[ite.key]"
                        v-bind="ite.props"
                    />
                    <!-- 级连选择器 -->
                    <el-cascader
                    @change="change(ite.key)"
                    v-else-if="ite.type === 'cascader'"
                    :style="{width: ite.width || ''}"
                    v-model="searchForm[ite.key]"
                    :options="optionsObj[ite.key]"
                    v-bind="ite.props"
                    ></el-cascader>
                    <!-- 时间 -->
                    <el-time-picker
                    @change="change(ite.key)"
                    v-else-if="ite.type === 'time'"
                    :style="{width: ite.width || ''}"
                    v-model="searchForm[ite.key]"
                    v-bind="ite.props">
                    </el-time-picker>
                    <!-- 时间范围 -->
                    <el-time-picker
                    v-else-if="ite.type === 'timerange'"
                    @change="change(ite.key)"
                    isRange
                    :style="{width: ite.width || ''}"
                    v-model="searchForm[ite.key]"
                    v-bind="ite.props">
                    </el-time-picker>
                    <!-- 日期或者日期时间 -->
                    <el-date-picker
                    v-else-if="ite.type === 'date' || ite.type === 'datetime'"
                    @change="change(ite.key)"
                    :style="{width: ite.width || ''}"
                    v-model="searchForm[ite.key]"
                    :type="ite.type"
                    v-bind="ite.props"
                    >
                    </el-date-picker>
                    <!-- 日期或者日期时间 范围 -->
                    <el-date-picker
                    v-else-if="ite.type === 'daterange' || ite.type === 'datetimerange'"
                    @change="change(ite.key)"
                    :style="{width: ite.width || ''}"
                    v-model="searchForm[ite.key]"
                    :type="ite.type"
                    v-bind="ite.props">
                    </el-date-picker>
                    <!-- 单选框 -->
                    <el-radio-group @change="change(ite.key)" v-else-if="ite.type === 'radio'" v-model="searchForm[ite.key]" :style="{width: ite.width || ''}" v-bind="ite.props">
                        <el-radio v-for="(item,index) in optionsObj[ite.key]" :key="index" :label="item.value">{{ item.label }}</el-radio>
                    </el-radio-group>
                    <!-- 复选框 -->
                    <el-checkbox-group @change="change(ite.key)" v-else-if="ite.type === 'checkbox'" v-model="searchForm[ite.key]" :style="{width: ite.width || ''}" v-bind="ite.props">
                        <el-checkbox v-for="(item,index) in optionsObj[ite.key]" :key="index" :label="item"></el-checkbox>
                    </el-checkbox-group>
                    <!-- 上传文件或图片 -->
                    <el-upload
                        v-else-if="ite.type === 'upload'"
                        :class="(searchForm[ite.key]&&searchForm[ite.key].length>=ite.props.limit?'el-upload-end ':'')+('el-upload-pro-'+(ite.props.drag?'drag':''))"
                        :file-list="searchForm[ite.key]"
                        v-bind="ite.props"
                        >
                        <template v-if="ite.props.drag">
                            <i class="el-icon-upload"></i>
                            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                        </template>
                        <el-button v-else-if="ite.props['list-type']==='text'" slot="trigger" type="primary">选取文件</el-button>
                        <i v-else class="el-icon-plus"></i>
                        <div slot="file" slot-scope="{file}" class="upload-file-view" v-if="!ite.props['list-type'] || ite.props['list-type']!=='text'">
                            <el-image
                                class="el-upload-list__item-thumbnail"
                                :src="file.url"
                                style="width: 100%; height: 100%" 
                                fit="scale-down"
                                :initial-index="(searchForm[ite.key]||[]).findIndex(item=>item.url===file.url)"
                                :preview-src-list="(searchForm[ite.key]||[]).map(item=>item.url)"
                            >
                            </el-image>
                            <i class="el-icon-circle-close upload-file-view-del" @click="handleRemove(file,ite.key)"></i>
                        </div>
                        <div v-if="ite.placeholder" slot="tip" class="el-upload__tip" :style="{marginTop:ite.props.drag?'-3px':''}">{{ite.placeholder}}</div>
                    </el-upload>
                </el-form-item>
            </div>
        </div>
        <div  v-if="!searchType && showFoot" class="el-form-pro-f" >
            <slot name="footer"></slot>
            <el-button v-if="!$slots.footer" size="small" @click="cancel">取消</el-button>
            <el-button v-if="!$slots.footer" size="small" type="primary" @click="save">保存</el-button>
        </div>
    </el-form>
</template>
<script>
import {isAlike, clone} from "../../util/utils.js"
import renderItem from "../../common/renderItem.js"
export default {
    name:'ElFormPro',
    components:{
        renderItem
    },
    props:{
        formValues:{
            type:Object,
            default:()=>{
                return {}
            }
        },
        isCard:{ // 是不是el-card的样子
            type:Boolean,
            default:false
        },
        columns:{
            type:Array,
            default:()=>{
                return [];
            }
        },
        searchType:{ // search:显示查询按钮，all：显示查询和重置按钮
            type:String,
        },
        showFoot:{ // 是否显示底部，默认显示（前提是searchType没得值）
            type:Boolean,
            default:true
        },
        columnNum:{ // 有多少列，0:表示只有一排
            type:Number,
            default:2
        },
        props:{ // el-form上的属性
            type:Object,
            default:()=>{
                return {}
            }
        },
        disabled:{ // 是否禁用
            type:Boolean,
            default:false
        },
        interval:{ // 横排的间隔
            type:Number,
            default:0
        }
    },
    data(){
        return {
            defaultValue:{},
            searchForm:{}, // 查询的内容结果
            oldSearchForm:{}, // 用来和searchForm做对比的
            optionsObj:{}, // 收集数组的options
            list:[], // 渲染的列表
            getOptionKeys:['select', 'cascader', 'radio', 'checkbox'], // 需要获取options的类型
            associatedKeys:{}, // 关联字段，变了指定的字段就会触发该字段至空和触发request
            formProps:{
                labelWidth:'100px',
                size:'small',
                ref:"ruleForm"
            },
        }
    },
    watch:{
        formValues:{
            deep:true,
            handler:function(){
                for(const key in this.formValues){
                    this.$set(this.searchForm,key,this.formValues[key]);
                    this.change(key);
                }
            }
        }
    },
    created(){
        this.formProps = {...this.formProps,...this.props};
        this.getList();
    },
    methods:{
        // 处理数据和收集依赖
        getList(){
            // // 默认宽度100%
            // const width100 = ['input', 'select', 'cascader', 'time', 'date', 'datetime', 'timerange', 'daterange', 'datetimerange','upload'];
            const {columns, columnNum, searchType} = this; // 一排多少个
            const associatedKeys = {};
            const defaultValue = {};
            const renderKey = {};
            const button = {
                type:'searchButton',
                isReset:searchType==='all'
            }
            const row = {
                type:'blankRow'
            }
            const dataList = [];
            let listItems = [];
            let count = 0; // 当前在第几个
            columns.forEach((item,index)=>{
                if(!item.widthSpan){
                    item.widthSpan = 1
                }
                if(item.widthSpan>columnNum){
                    item.widthSpan = columnNum
                }
                const key = item.key;
                if(key){
                    if(!('width' in item)){
                        item.width = '100%';
                    }
                    item.props = this.getProps(item.type,item.props);
                    if(item.render){
                        renderKey[key] = 1;
                    }
                    if(Object.prototype.hasOwnProperty.call(item,'defaultValue')){
                        defaultValue[key] = item.defaultValue;
                    }else{
                        const setDefaultValueObj = { // 必须要需要设置默认值的，不然会报错
                            'checkbox':[]
                        }
                        if(Object.prototype.hasOwnProperty.call(setDefaultValueObj,item.type)){
                            defaultValue[key] = setDefaultValueObj[item.type];
                        }
                    }
                    const isAssociatedKeys = item.associatedKeys && item.associatedKeys.length;
                    if(isAssociatedKeys){ // 收集依赖
                        item.associatedKeys.forEach(ite=>{
                            if(!associatedKeys[ite]){
                                associatedKeys[ite] = [];
                            }
                            associatedKeys[ite].push({
                                key,
                                request:item.request,
                                setDefaultValue:item.setDefaultValue, // 用于下拉选项请求接口后设置默认值的
                            });
                        })
                    }
                    if(this.getOptionKeys.includes(item.type)){
                        this.$set(this.optionsObj,key,item.options || [])
                        if(!isAssociatedKeys){
                            this.getOptions(item);
                        }
                    }

                    // ----- 组装显示在哪排 -s -----
                    const widthSpan = item.widthSpan;
                    const addCount = count + widthSpan;
                    if(addCount>columnNum){ // 如果超了，表示当前需要换行存储了
                        const addNum = columnNum-count;
                        for(let i=0;i<addNum;i++){ // 不够的找一个来占位
                            listItems.push(row)
                        }
                        dataList.push(listItems);

                        // 多出来的放到下一排
                        count = widthSpan;
                        listItems = [];
                        listItems.push(item)
                    }else if(addCount === columnNum){ // 刚好相等
                        listItems.push(item);
                        dataList.push(listItems);
                        listItems = [];
                        count = 0;
                    }else{ // 小于的直接放入就行
                        listItems.push(item);
                        count = addCount;
                    }
                    if(index === columns.length-1){ // 最后一个了
                        if(searchType){ // 需要在最后追加搜索按钮
                            // 除去追加的搜索，还需要补充的站位数量
                            const addNum = columnNum - count - 1;
                            for(let i=0;i<addNum;i++){
                                listItems.push(row);
                            }
                            listItems.push(button)
                            dataList.push(listItems);
                        }else if(count){ // 还有没添加的
                            dataList.push(listItems);
                        }
                    }
                    // ----- 组装显示在哪排 -e -----
                }
            })
            this.defaultValue = {...defaultValue};
            // 看使用render渲染且被关联了的值是否有变化，用来触发 -s
            const watchRenderKey = {}; // 收集有render且被关联了(在associatedKeys上)的key
            for(const key in associatedKeys){
                if(renderKey[key]){
                    watchRenderKey[key] = 1;
                }
            }
            let oldSearchForm = clone(this.searchForm); // 旧的this.searchForm，用于下面监听哪个key发生了变化
            if(Object.keys(watchRenderKey).length){ // 有值就开启监听
                this.$watch('searchForm',{
                    deep:true,
                    handler:function(){
                        const searchForm = this.searchForm;
                        for(const key in watchRenderKey){ // 看使用render渲染且被关联了的值是否有变化，用来触发
                            if(!isAlike(searchForm[key], oldSearchForm[key])){
                                this.change(key)
                            }
                        }
                        oldSearchForm = clone(searchForm);
                    }
                })
            }
            // 看使用render渲染且被关联了的值是否有变化，用来触发 -e
            this.associatedKeys = associatedKeys;
            this.list = dataList;
            this.searchForm = {...defaultValue};
        },
        // 处理columns里的props
        getProps(key, props={}){
            let obj = props; 
            if(!key || key === 'input'){
                return {clearable:true,placeholder:'请输入',...props};
            }
            switch(key){
                case 'select':
                    obj = {clearable:true,placeholder:'请选择',...props};
                    break;
                case 'cascader':
                    obj = {clearable:true,placeholder:'请选择',...props};
                    break;
                case 'time':
                    obj = {placeholder:'请选择','value-format':'hh:mm:ss',...props};
                    break;
                case 'date':
                    obj = {placeholder:'请选择','value-format':'yyyy-MM-dd',...props};
                    break;
                case 'datetime':
                    obj = {placeholder:'请选择','value-format':'yyyy-MM-dd hh:mm:ss',...props};
                    break;
                case 'timerange':
                    obj = {'start-placeholder':'开始时间','end-placeholder':'结束时间','value-format':'hh:mm:ss','range-separator':'~',...props};
                    break;
                case 'daterange':
                    obj = {'start-placeholder':'开始日期','end-placeholder':'结束日期','value-format':'yyyy-MM-dd','range-separator':'~',...props};
                    break;
                case 'datetimerange':
                    obj = {'start-placeholder':'开始日期','end-placeholder':'结束日期','value-format':'yyyy-MM-dd hh:mm:ss','range-separator':'~',...props};
                    break;
                case 'upload':
                    obj = {action:'',onChange:(file,fileList)=>{this.upFileChange(file,fileList,key)},'list-type':props.drag?'':'picture-card',...props}
                    break;
                default:
                    break;
            }
            return obj;
        },
        /**
         * 内容改变了会触发
         * @param {string} key 
         */
         change(key){
            const arr = this.associatedKeys[key]
            if(arr){ // 有关联字段的
                arr.forEach(item=>{
                    this.getOptions(item, this.searchForm[key]);
                    if(Object.prototype.hasOwnProperty.call(this.searchForm,item.key)){
                        if(this.searchForm[item.key] !== undefined){
                            this.$set(this.searchForm,item.key,this.defaultValue[item.key])
                            this.change(item.key)
                        }
                    }
                })
            }
            this.$emit('change',this.searchForm,key);
        },
        /**
         * 获取options，初始化或者关联字段变化会触发
         * @param {Object} item 
         * @param {值} value 
         */
        getOptions(item,value){
            if(typeof item.request === 'function'){
                const {key,request,setDefaultValue} = item
                const fn = request(value,this.searchForm);
                const setDefaultValueFn = (arr)=>{ // 设置默认值
                    if(setDefaultValue){
                        const defaultValue = setDefaultValue(arr);
                        this.defaultValue[key] = defaultValue;
                        this.$set(this.searchForm,key,defaultValue)
                        this.change(key)
                    }
                }
                if(Object.prototype.toString.call(fn) === '[object Promise]'){
                    fn.then(res=>{
                        this.optionsObj[key] = res;
                        setDefaultValueFn(res);
                    })
                }else{
                    this.optionsObj[key] = fn;
                    setDefaultValueFn(fn);
                }
            }
        },
        initValue(){ // 重置填写内容
            const oldObj = {...this.searchForm};
            this.searchForm = {...this.defaultValue};
            for(const key in oldObj){ // 这样是为了让一些重新触发请求获取选项
                if(!isAlike(oldObj[key],this.searchForm[key])){ // 如果改变了值
                    this.change(key)
                }
            }
            this.$nextTick(()=>{
                this.$refs[this.formProps.ref].clearValidate();
            })
        },
        reset(){
            this.initValue();
            this.$emit('reset',this.getResult());
        },
        search(){
            this.$refs[this.formProps.ref].validate((valid) => {
                if (valid) {
                    this.$emit('search',this.getResult());
                }
            });
        },
        save(){
            this.$refs[this.formProps.ref].validate((valid) => {
                if (valid) {
                    this.$emit('save',this.getResult());
                }
            });
        },
        getResult(){ // 返货结果
            return clone(this.searchForm);
        },
        cancel(){
            this.initValue();
            this.$emit('cancel');
        },
        upFileChange(file,fileList,key){
            this.$set(this.searchForm,key,fileList)
        },
        handleRemove(file,key) {
            const files = [...(this.searchForm[key]||[])];
            const findIndex = files.findIndex(item=>item.url===file.url)
            if(findIndex!==-1){
                files.splice(findIndex,1);
                this.searchForm[key] = files
            }
            
        },
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>