<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro :tableObj="tableObj"></el-table-pro>
            <div slot="title">
                操作按钮
            </div>
            <div slot="remark">
                配置actions可以控制自带的制操作按钮<br />
                配置actionsColumns可以自定义操作按钮
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue"
export default {
    components:{
        copyComponent
    },
    data(){
        return {
            tableObj:{
                rowKey:'id',  // 唯一字段，修改保存时会返回这个的
                search: {
                    props: { // 搜索框的label宽度
                        labelWidth: '50px',
                    },
                    interval: 24, // 间距
                },
                request: (data) => { // 获取列表数据
                    console.log(data,"request")
                    return new Promise((reject)=>{
                        setTimeout(()=>{
                            reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                        },1000)
                    })
                },
                actionsColumnsProp:{ // 操作栏的配置
                    width:250, // 设置宽度
                },
                actionsColumns:[ // 自定义操作按钮
                    (row,index)=>{ // react写法
                        const cs = ()=>{
                            console.log(row,index)
                        }
                        return <el-button type="text" onClick={cs}>
                            自定义1
                        </el-button>
                    },
                    { // 这种也是可以的
                        text:'自定义2',
                        props:{
                            size:'mini'
                        },
                        onClick:(row,index)=>{
                            console.log(row,index)
                        }
                    }
                ],
                actions:{ // 操作按钮配置
                    modalProps:{ // 给modal弹窗增加class名
                        class:'modalClass',
                    },
                    buttonProps: { // 自带操作按钮的控制
                        delete: (item) => {
                            console.log(item,"delete")
                            return { disabled: item.name === '123' };
                        },
                    },
                    openBefore:{ // 打开modal弹窗请求接口获取详情之类用的
                        update:(item)=>{
                            console.log(item,'openBefore')
                            return new Promise((reject)=>{
                                setTimeout(()=>{
                                    reject({
                                        name:123
                                    })
                                },2000)
                            })
                        }
                    },
                    onInsert: (values) => { // 新增
                        console.log(values,"onInsert")
                        return Promise.resolve(true);
                    },
                    onDelete: (values) => { // 删除
                        console.log(values,"onDelete")
                        return Promise.resolve(true);
                    },
                    preview:true, // 显示详情按钮
                    onUpdate: (values) => { // 修改
                        console.log(values,"onUpdate")
                        return Promise.resolve(true);
                    },
                },
                columns:[
                    {
                        title: '名称',
                        dataIndex: 'name',
                        valueType: 'input',
                        formItemProps:{ // 新增、修改、详情弹窗里的label宽度
                            labelWidth:'60px'
                        }
                    },
                    {
                        title: '性别',
                        dataIndex: 'sex',
                        valueType: 'select',
                        fieldProps:{ // 设置查询的
                            options:[
                                {
                                    label:'男',
                                    value:"M"
                                },
                                {
                                    label:'女',
                                    value:"F"
                                }
                            ],
                            defaultValue:'M'
                        },
                        formItemProps:{
                            labelWidth:'60px'
                        }
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        valueType: 'input',
                        actions:{
                            hideInSearch:true, // 不是查询字段
                            hideInUpdate:true, // 不是修改字段
                        },
                        formItemProps:{
                            labelWidth:'60px'
                        }
                    },
                ]
            },
            code:`<div>
    <el-table-pro :tableObj="tableObj"></el-table-pro>
</div>
<script>
    export default {
        data() {
            return {
                tableObj:{
                    rowKey:'id',  // 唯一字段，修改保存时会返回这个的
                    search: {
                        props: { // 搜索框的label宽度
                            labelWidth: '50px',
                        },
                        interval: 24, // 间距
                    },
                    request: (data) => { // 获取列表数据
                        console.log(data,"request")
                        return new Promise((reject)=>{
                            setTimeout(()=>{
                                reject([[{id:1,name:'123',sex:'男',age:6},{id:2,name:'333',sex:'男',age:26}],2])
                            },1000)
                        })
                    },
                    actionsColumnsProp:{ // 操作栏的配置
                        width:250, // 设置宽度
                    },
                    actionsColumns:[ // 自定义操作按钮
                        (row,index)=>{ // react写法
                            const cs = ()=>{
                                console.log(row,index)
                            }
                            return <el-button type="text" onClick={cs}>
                                自定义1
                            </el-button>
                        },
                        { // 这种也是可以的
                            text:'自定义2',
                            props:{
                                size:'mini'
                            },
                            onClick:(row,index)=>{
                                console.log(row,index)
                            }
                        }
                    ],
                    actions:{ // 操作按钮配置
                        modalProps:{ // 给modal弹窗增加class名
                            class:'modalClass',
                        },
                        buttonProps: { // 自带操作按钮的控制
                            delete: (item) => {
                                console.log(item,"delete")
                                return { disabled: item.name === '123' };
                            },
                        },
                        openBefore:{ // 打开modal弹窗请求接口获取详情之类用的
                            update:(item)=>{
                                console.log(item,'openBefore')
                                return new Promise((reject)=>{
                                    setTimeout(()=>{
                                        reject({
                                            name:123
                                        })
                                    },2000)
                                })
                            }
                        },
                        onInsert: (values) => { // 新增
                            console.log(values,"onInsert")
                            return Promise.resolve(true);
                        },
                        onDelete: (values) => { // 删除
                            console.log(values,"onDelete")
                            return Promise.resolve(true);
                        },
                        preview:true, // 显示详情按钮
                        onUpdate: (values) => { // 修改
                            console.log(values,"onUpdate")
                            return Promise.resolve(true);
                        },
                    },
                    columns:[
                        {
                            title: '名称',
                            dataIndex: 'name',
                            valueType: 'input',
                            formItemProps:{ // 新增、修改、详情弹窗里的label宽度
                                labelWidth:'60px'
                            }
                        },
                        {
                            title: '性别',
                            dataIndex: 'sex',
                            valueType: 'select',
                            fieldProps:{ // 设置查询的
                                options:[
                                    {
                                        label:'男',
                                        value:"M"
                                    },
                                    {
                                        label:'女',
                                        value:"F"
                                    }
                                ],
                                defaultValue:'M'
                            },
                            formItemProps:{
                                labelWidth:'60px'
                            }
                        },
                        {
                            title: '年龄',
                            dataIndex: 'age',
                            valueType: 'input',
                            actions:{
                                hideInSearch:true, // 不是查询字段
                                hideInUpdate:true, // 不是修改字段
                            },
                            formItemProps:{
                                labelWidth:'60px'
                            }
                        },
                    ]
                }
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    }
}
</script>
<style scoped>
.copy-main{
    background: rgba(250,250,250,0.8);
}
</style>


