<template>
    <div class="el-table-pro">
        <div class="el-table-pro-t" v-if="searchConfig">
            <el-form-pro v-bind="searchConfig" @search="search" @reset="reset"></el-form-pro>
        </div>
        <div class="el-table-pro-v">
            <div class="el-table-pro-vt" v-if="toolBarRender.length">
                <span class="el-table-pro-button" v-for="(item,index) in toolBarRender" :key="item.key||index" >
                    <el-modal-form v-if="item.isDefaultActionsColumns" :defaultVaue="item.openBefore" :text="item.text" v-bind="{...(item.props||{})}" :columns="insertColumns" :save="(val)=>modalSave(item,val)"></el-modal-form>
                    <el-button v-else @click="toolClick(item.onClick)" v-bind="{size:'small',...(item.props||{})}">{{ item.text }}</el-button>
                </span>
            </div>
            <el-table
            :data="tableData"
            v-loading="loading"
            ref="tableRef"
            element-loading-spinner="el-icon-loading"
            v-bind="tableProps"
            @selection-change="handleSelectionChange"
            >
                <el-table-column
                type="selection"
                v-if="hasSelect" 
                v-bind="hasSelect">
                </el-table-column>
                <el-table-column
                v-if="hasIndex"
                type="index"
                v-bind="hasIndex">
                </el-table-column>
                <el-table-column
                    v-for="(item,index) in tableColumns"
                    :key="rowKey?item[rowKey]:index"
                    :prop="item.dataIndex"
                    :label="item.title"
                    v-bind="{align,...item.columnProps}"
                    >
                    <template slot-scope="scope">
                        <renderComponent :item="item" :scope="{row:scope.row,$index:scope.$index}"></renderComponent>
                    </template>
                </el-table-column>
                <el-table-column
                    v-if="showOperate"
                    v-bind="actionsColumnsProp"
                    >
                    <template slot-scope="scope">
                        <span class="el-table-pro-button" v-for="(item,index) in actionsColumns" :key="index" >
                            <renderItem v-if="typeof item === 'function'" :renderFn="item" :params="[scope.row,scope.$index]"></renderItem>
                            <el-modal-form v-else-if="!item.popconfirm && item.isDefaultActionsColumns" :defaultVaue="()=>{return item.openBefore(scope.row)}" :text="item.text" :buttonProps="getButtonPropsFn(item,scope.row)" v-bind="{...(item.props||{})}" :columns="item.key==='update'?updateColumns:previewColumns" :save="(val)=>modalSave(item,val,scope.row[rowKey])"></el-modal-form>
                            <el-button v-else-if="!item.popconfirm" v-bind="{...getButtonPropsFn(item,scope.row,true)}" @click="item.onClick(scope.row,scope.$index)">{{ item.text }}</el-button>
                            <el-popconfirm
                            v-else
                            :title="item.popconfirm"
                            @confirm="item.onClick(scope.row,scope.$index)"
                            >
                                <el-button class="delete" slot="reference" v-bind="{size:actionsColumnsProp.size,...getButtonPropsFn(item,scope.row,true)}" >{{ item.text }}</el-button>
                            </el-popconfirm>
                        </span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="el-table-pro-vf" v-if="paginationObj">
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                v-bind="paginationObj"
                >
                </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import {isPromiseLike, isType} from "../../util/utils";
import renderComponent from "./component/renderComponent.js";
import renderItem from "../../common/renderItem.js";
let pageKeys = []; // 当前页有的唯一key
let selectKeys = {}; // 勾选的唯一key
let toggleRowSelectionLoading = false; // 是否正在回显选中中
export default {
    name:'ElTablePro',
    components:{
        renderComponent,
        renderItem
    },
    props:{
        configObj:{
            type:Object,
            default:()=>{
                return {};
            }
        },
        tableObj:{
            type:Object,
            default:()=>{
                return {};
            }
        },
        selects:{ // 手动设置的勾选值
            type:Array,
            default:()=>{
                return [];
            }
        }
    },
    data(){
        return {
            hasSelect:undefined, // 是否渲染table多选框
            searchObj:undefined, // 搜索框的值
            searchConfig:{ // 查询框的配置
                columnNum:3,
                searchType:'all',
                columns:[],    
            },
            tableProps:{ // table的配置
                border:true
            },
            align:'center',
            toolBarRender:[], // table和search中间的操作按钮
            actionsColumns:[], // 每排新增的操作按钮
            actions:{}, // table的每排的操作按钮，应该有查看详情，编辑，删除
            actionsColumnsProp:{
                label:'操作',
                size:'small',
            }, // table的操作行配置
            tableColumns:[], // table的渲染
            insertColumns:[], // 新增时弹窗表单的
            updateColumns:[], // 修改时弹窗表单的
            previewColumns:[], // 详情时弹窗表单的
            hasIndex:undefined, // 是否渲染序列号
            rowKey:'', // table列的唯一值的key
            defaultActionsColumns:{ // 默认的列表按钮
                insert:{
                    text:'新增',
                    key:'insert',
                    isDefaultActionsColumns:true
                },
                preview:{
                    text:'详情',
                    key:'preview',
                    props:{
                        disabled:true
                    },
                    isDefaultActionsColumns:true
                },
                update:{
                    text:'修改',
                    key:'update',
                    isDefaultActionsColumns:true
                },
                delete:{
                    text:'删除',
                    key:'delete',
                    popconfirm:'确定删除该条数据？',
                    onClick:this.deleteFn,
                },
            },
            tableData:[], // 列表数据
            loading:false,
            isReload:false,
            paginationObj:undefined, // 分页的配置
            hasButtonObj:{ // 是否存在这些按钮
                hasInsert:true, // 新增
                hasPreview:false, // 预览
                hasUpdate:false, // 修改
                hasDelete:false, // 删除
                hasMultipleDelete:false, // 多删除
            },
            buttonPropsCache:new Map(), // buttonProps的缓存,防止重复触发渲染函数
        }
    },
    watch:{
        selects(){
            this.initSelectKeys();
            if(!this.isReload){ // 如果不是在加载中就更新界面上的勾选值
                this.setSelects();
            }
        }
    },
    created(){
       this.init();
    },
    computed:{
        showOperate(){ // 是否显示列表后的操作
            return this.actionsColumns.length;
        }
    },
    methods:{
        init(){ // 处理tableObj参数
            const {
                rowKey,
                search={},
                columns=[],
                toolBarRender=[],
            } = this.tableObj;
            // 下面处理注意顺序！！！
            this.align = this.configObj.align || 'center'
            this.rowKey = rowKey;
            this.initTableProps();
            this.initHasSelect();
            this.initHasIndex();
            this.initPagination();
            this.initSearch(search);
            this.initActionsAndActionsColumns();
            this.initToolBarRender(toolBarRender); // 这个需在initActionsAndActionsColumns后执行
            this.initColumns(columns);
            this.initSelectKeys();
            this.reload();
            this.clearDefault();
        },
        initSelectKeys(){ // 同步手动勾选的值
            selectKeys = {}
            if(this.selects){
                this.selects.forEach(item=>{
                    selectKeys[item] = item;
                })
            }
        },
        initHasSelect(){ // 初始化勾选项
            if (this.tableObj.select) {
                const defaultObj = {
                    align: this.align,
                    width: 60,
                }
                if (isType(this.tableObj.select, '[object Object]')) {
                    const {pagination,...obj} = this.tableObj.select;// eslint-disable-line no-unused-vars
                    this.hasSelect = {
                        ...defaultObj,
                        ...obj
                    }
                } else {
                    this.hasSelect = defaultObj;
                }
            }
        },
        initTableProps(){ // 初始化table的配置
            const {tableProps} = this.tableObj;
            if(isType(tableProps,'[object Object]')){
                this.tableProps = {...this.tableProps,...tableProps}
            }
        },
        initHasIndex(){ // 初始化序号
            const {index = false} = this.tableObj;
            if(index){
                const defaultObj = {
                    align:this.align,
                    width:60,
                    label:"序号",
                }
                if(isType(index,'[object Object]')){
                    this.hasIndex = {
                        ...defaultObj,
                        ...index
                    }
                }else{
                    this.hasIndex = defaultObj;
                }
            }
        },
        initPagination(){ // 初始化分页
            const {pagination=true} = this.tableObj;
            if(pagination){
                const defaultPagination = {
                    total:0,
                    background:true,
                    pageSizes:[10, 20, 50, 100],
                    pageSize:10, // 一页多少条
                    currentPage:1,  // 当前第几页
                    layout:"total, sizes, prev, pager, next, jumper",
                }
                if(isType(pagination,'[object Object]')){
                    this.paginationObj = {
                        ...defaultPagination,
                        ...pagination
                    };
                }else{
                    this.paginationObj = defaultPagination;
                }
            }
        },
        initSearch(search){ // 处理查询的
            if(!search){
                this.searchConfig = false; 
            }else{
                this.searchConfig = {...this.searchConfig,...(search||{})};
            }
        },
        initToolBarRender(toolBarRender){ // table表格顶部的按钮
            const toolBarRenderList = [];
            const {openBefore} = this.actions;
            if(this.hasButtonObj.hasInsert){
                let beforeFn = ()=>{
                    return {}
                }
                const fn = openBefore.insert;
                if(typeof fn === 'function'){
                    beforeFn = fn;
                }
                toolBarRenderList.push({...this.defaultActionsColumns.insert,onClick:this.actions.onInsert,openBefore:beforeFn})
            }
            this.toolBarRender = [...toolBarRenderList,...toolBarRender];
        },
        initActionsAndActionsColumns(){ // 处理按钮的配置
            const {
                actions={},
                actionsColumns=[],
                actionsColumnsProp={}
            } = this.tableObj;
            this.actions = actions;
            this.hasButtonObj = {
                hasPreview:!!this.actions.preview, // 是否存在预览按钮
                hasUpdate:!!this.actions.onUpdate, // 是否存在修改
                hasDelete:!!this.actions.onDelete, // 是否存在删除
                hasInsert:!!this.actions.onInsert  // 是否存在新增
            }
            const list = [];
            let width = 50;
            const obj = {  // 看是否存在这些按钮，存在就将其按钮的一些属性拿到
                'hasPreview':'preview',
                'hasUpdate':'update',
                'hasDelete':'delete',
            }
            const addClickObj = { // 需要加入的点击事件
                'update':actions.onUpdate
            }
            const getDefaultActionsColumnsItem = (key1,key2)=>{ // 给列后面的按钮加入用户配置事件
                const {buttonProps={}, modalProps={}, openBefore={}} = this.actions;
                if(this.hasButtonObj[key1]){
                    const defaultActionsColumnsItem = this.defaultActionsColumns[key2];
                    let getButtonProps;
                    let getModalProps = defaultActionsColumnsItem.getModalProps;
                    let beforeFn = ()=>{
                        return {}
                    }
                    if(typeof buttonProps[key2] === 'function'){
                        getButtonProps = buttonProps[key2];
                        this.buttonPropsCache.set(getButtonProps,new Map())
                    }
                    if(typeof openBefore[key2] === 'function'){
                        beforeFn = openBefore[key2];
                    }
                    if(typeof modalProps === 'object'){
                        getModalProps = {...getModalProps||{},...modalProps};
                    }
                    let props = defaultActionsColumnsItem.props;
                    if(getModalProps){
                        if(!props){
                            props = {};
                        }
                        props.modalProps = getModalProps
                    }
                    const result = {...defaultActionsColumnsItem, getButtonProps, props, openBefore:beforeFn};
                    const clickFn = addClickObj[key2];
                    if(clickFn){ // 需要将写的点击事件加上去
                        result.onClick = clickFn;
                    }
                    return result
                }
                return false;
            }
            for(const key in obj){
                const previewObj = getDefaultActionsColumnsItem(key,obj[key]);
                if(previewObj){
                    width += 30;
                    list.push(previewObj)
                }
            }
            this.actionsColumnsProp = {...this.actionsColumnsProp,align:this.align,width,...actionsColumnsProp};
            this.actionsColumns = [
                ...list,
                ...actionsColumns
            ]
        },
        initColumns(columns){ // 处理columns,主要是将这些分类
            const tableColumns = []; // 列表
            const searchColumns = []; // 查询
            const insertColumns = []; // 新增
            const updateColumns = []; // 编辑
            const previewColumns = []; // 详情
            const searchDefault = {};
            const {searchConfig,hasButtonObj:{hasInsert,hasUpdate,hasPreview}} = this;
            columns.forEach((item)=>{
                const {actions={},fieldProps={},formItemProps={},...obj} = item;
                let data = {
                    key:obj.dataIndex,
                    label:obj.title,
                    type:obj.valueType,
                    width: '100%',
                    ...fieldProps
                }
                if(searchConfig && actions.hideInSearch !== true){
                    if(Object.prototype.hasOwnProperty.call(fieldProps,'defaultValue')){
                        searchDefault[data.key] = fieldProps.defaultValue;
                    }
                    searchColumns.push(data);
                }
                data = {...data,...formItemProps};
                if(hasInsert && actions.hideInInsert !== true){
                    insertColumns.push(data);
                }
                if(hasUpdate && actions.hideInUpdate !== true){
                    updateColumns.push(data);
                }
                if(hasPreview && actions.hideInPreview !== true){
                    previewColumns.push(data);
                }
                if(actions.hideInTable !== true){
                    tableColumns.push(obj)
                }
            })
            this.searchObj = searchDefault; // 搜索框里的默认值
            if(searchConfig){
                this.searchConfig.columns = searchColumns;
            }
            this.tableColumns = tableColumns;
            this.insertColumns = insertColumns;
            this.updateColumns = updateColumns;
            this.previewColumns = previewColumns;
        },
        async reload(){ // 触发请求列表函数
            const request = this.tableObj.request;
            if(!request || typeof request !== 'function') return;
            if(!this.configObj.hideLoading){ // 如果不显示加载状态
                this.loading = true;
            }
            this.isReload = true;
            const isSelect = this.tableObj.select // 如果开启勾选项
            if(isSelect && !isSelect.pagination){
                selectKeys = {};
            }
            const params = this.getSearchValue();
            let result = this.tableObj.request(params);
            if(isPromiseLike(result)){
                result = await result;
            }
            const [tableData=[],total=0] = result||[]; // 防止不是这种格式
            this.tableData = tableData;
            if(isSelect){ // 如果开启勾选项
                this.getPageKeys();
                if(isSelect.pagination){ // 如果开启分页也不影响勾选
                    this.setSelects();
                }
            }
            if(this.paginationObj){
                this.paginationObj.total = total;
            }
            this.isReload = false;
            this.loading = false;
        },
        getPageKeys(){ // 获取当前页拥有的唯一值，用于删除后面当前页没勾选的
            const key = this.hasSelect?.key || this.rowKey;
            if(key){
                pageKeys = this.tableData.map(item=>item[key]);
            }else{
                pageKeys = [];
            }
        },
        setSelects(){  // 设置勾选项
            const key = this.hasSelect?.key || this.rowKey;
            if(key){
                toggleRowSelectionLoading = true;
                this.$refs.tableRef.clearSelection()
                this.$nextTick(()=>{
                    this.tableData.forEach(item=>{
                        if(item[key] in selectKeys){
                            this.$refs.tableRef.toggleRowSelection(item);
                        }
                    })
                    toggleRowSelectionLoading = false;
                })
            }else{
                this.$refs.tableRef.clearSelection()
            }
        },
        getSearchValue(){ // 获取查询的值
            const params = {...this.searchObj};
            if(this.paginationObj){
                params.pageSize = this.paginationObj.pageSize;
                params.currentPage = this.paginationObj.currentPage;
            }
            return params
        },
        getSelects(){ // 返回选择的项
            return Object.values(selectKeys);
        },
        handleSelectionChange(val){ // table多选框改变时
            if(toggleRowSelectionLoading) return;
            const key = this.hasSelect?.key || this.rowKey;
            if(key){
                pageKeys.forEach(item=>{
                    if(val.find(ite=>ite[key]===item)){ // 勾选了的
                        if(!(item in selectKeys)){
                            selectKeys[item] = item;
                        }
                    }else{ // 删除当前页的勾选
                        delete selectKeys[item]
                    }
                })
            }
        },
        search(searchObj){ // 搜索
            this.searchObj = searchObj;
            if(this.paginationObj){
                this.paginationObj.currentPage = 1;
            }
            this.reload();
        },
        reset(searchObj){ // 重置
            this.searchObj = searchObj;
            if(this.paginationObj){
                this.paginationObj.currentPage = 1;
            }
            this.reload();
        },
        toolClick(click){ // tool工具栏点击
            if(!click) return;
            const params = this.getSearchValue();
            click(params);
        },
        async modalSave(item,value,id){ // 弹窗的保存
            if(item.onClick){
                const obj = {...value};
                if(this.rowKey && id!==undefined){
                    obj[this.rowKey] = id
                }
                let result = item.onClick(obj);
                if (isPromiseLike(result)) {
                    result = await result;
                }
                if(result){
                    this.reload();
                }
                return result
            }
        },
        async deleteFn(item){ // 删除
            let result = this.actions.onDelete(item);
            const num = this.tableData.length;
            if(isPromiseLike(result)){
                result = await result;
            }
            if(result === false) return;
            if(this.paginationObj && num === 1 && this.paginationObj.currentPage>1){
                this.paginationObj.currentPage = this.paginationObj.currentPage-1;
            }
            this.reload();
        },
        handleSizeChange(val) { // 每页多少条
            this.paginationObj.currentPage = 1;
            this.paginationObj.pageSize = val;
            this.reload();
        },
        handleCurrentChange(val) { // 当前在第几页
            this.paginationObj.currentPage = val;
            this.reload();
        },
        getButtonPropsFn(item,row, bool){ // 防止重复触发渲染函数用的
            const {getButtonProps} = item;
            let obj = {};
            if(getButtonProps){
                const map = this.buttonPropsCache.get(getButtonProps);
                if(map){
                    if(map.has(row)){
                        obj = map.get(row);
                    }else{
                        obj = getButtonProps(row);
                        map.set(row,obj);
                        this.buttonPropsCache.set(getButtonProps,map);
                    }
                }
            }else if(bool){
                obj = item.props||{}
            }
            const result = {type:'text',...obj};
            return result;
        },
        clearDefault(){ // 将不需要的默认配置清除
            delete this.initTableProps;
            delete this.defaultActionsColumns;
            delete this.hasButtonObj;
            delete this.initHasIndex;
            delete this.initPagination;
            delete this.initSearch;
            delete this.initActionsAndActionsColumns;
            delete this.initToolBarRender;
            delete this.initColumns;
            delete this.init;
            delete this.clearDefault;
        }
    }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
<style scoped>
.el-table-pro /deep/ .el-loading-spinner{
    font-size: 32px;
}
</style>
