<template>
    <div class="main">
        <copyComponent :code="code">
            <el-form-pro :columns="columns" @save="save" @cancel="cancel"></el-form-pro>
            <div slot="title">
                表单
            </div>
            <div slot="remark">
                可以设置属性上的props.props对象，指定选择框的别名；<br />
                通过设置associatedKeys字段，可以关联指定字段，关联字段变化后会触发该值的变化<br />
                通过render函数可以自定义渲染内容，写法为jsx写法；
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
            columns: [{
                key: 'buildingId',
                type: 'select',
                label: '楼栋',
                props: { props: { label: 'buildingName', value: 'id' } },
                options: [
                    {
                        buildingName: '楼栋1',
                        id: 1
                    },
                    {
                        buildingName: '楼栋2',
                        id: 2
                    },
                ],
            }, {
                key: 'floorId',
                type: 'select',
                label: '楼层',
                props: { props: { label: 'floorName', value: 'floorId' } },
                associatedKeys: ['buildingId'], // 关联字段，变了这个就会改变，并触发request
                request:(buildingId)=>{
                    console.log('楼栋发生变化',buildingId)
                    const floorObj = {
                        1:[{
                            floorName:'楼栋1的1层',
                            floorId:11
                        }],
                        2:[{
                            floorName:'楼栋2的1层',
                            floorId:11
                        }]
                    }
                    return Promise.resolve(floorObj[buildingId]||[]); // 此处返回Promise<Array> 或者Array都可以
                }
            }, {
                key: 'ruleType',
                type: 'select',
                label: '评价类型',
                defaultValue:'1',
                options: [
                    {
                        label: '有默认值',
                        value: '1'
                    }
                ],
            }, {
                key: 'ruleName',
                type: 'input',
                label: '输入框',
            }, {
                key: 'switch',
                type: 'switch',
                defaultValue:false,
                label: '开关',
            },{
                key: 'time',
                type: 'time',
                label: '时间',
            }, {
                key: 'date',
                type: 'date',
                label: '日期',
            }, {
                key: 'datetime',
                type: 'datetime',
                label: '日期时间',
            }, {
                key: 'timerange',
                type: 'timerange',
                label: '时间范围',
            }, {
                key: 'daterange',
                type: 'daterange',
                label: '日期范围',
            }, {
                key: 'datetimerange',
                type: 'datetimerange',
                label: '日期时间范围',
            },  {
                key: 'speek',
                type: 'checkbox',
                width: '100%',
                label: '多选',
                options:[
                    '类型1',
                    '类型2',
                ]
            }, {
                key: 'choose',
                type: 'radio',
                label: '单选',
                options:[
                    {
                        label: '选择1',
                        value: '1'
                    },
                    {
                        label: '选择2',
                        value: '2'
                    }
                ]
            }, {
                key: 'render',
                label: '自定义渲染',
                render:(obj)=>{
                    const list = [{
                        value: '选项1',
                        label: '黄金糕'
                        }, {
                        value: '选项2',
                        label: '双皮奶'
                    }];
                    return <el-select style="width:100%" v-model={obj.render} placeholder="请选择">
                        {
                            list.map((item,index)=>{
                                return <el-option
                                key={index}
                                label={item.label}
                                value={item.value}>
                                </el-option>
                            })
                        }
                        
                    </el-select>
                }
            },{
                key: 'upload',
                type: 'upload',
                label: '上传图片',
                placeholder:'由于上传地址不正确，请复制代码后自行测试', // 提示
                props:{
                    limit:3, // 限制上传数量
                    listType:'picture-card',
                    action:'/index/index/upFiles', // 上传地址
                }
            },{
                key: 'file',
                type: 'upload',
                label: '上传文件',
                placeholder:'由于上传地址不正确，请复制代码后自行测试', // 提示
                props:{
                    drag:true,
                    action:'/index/index/upFiles',
                }
            }],
            code:`<div>
    <el-form-pro :columns="columns" @save="save" @cancel="cancel"></el-form-pro>
</div>
<script>
    export default {
        data() {
            return {
                columns: [{
                    key: 'buildingId',
                    type: 'select',
                    label: '楼栋',
                    props: { props: { label: 'buildingName', value: 'id' } },
                    options: [
                        {
                            buildingName: '楼栋1',
                            id: 1
                        },
                        {
                            buildingName: '楼栋2',
                            id: 2
                        },
                    ],
                }, {
                    key: 'floorId',
                    type: 'select',
                    label: '楼层',
                    props: { props: { label: 'floorName', value: 'floorId' } },
                    associatedKeys: ['buildingId'], // 关联字段，变了这个就会改变，并触发request
                    request:(buildingId)=>{
                        console.log('楼栋发生变化',buildingId)
                        const floorObj = {
                            1:[{
                                floorName:'楼栋1的1层',
                                floorId:11
                            }],
                            2:[{
                                floorName:'楼栋2的1层',
                                floorId:11
                            }]
                        }
                        return Promise.resolve(floorObj[buildingId]||[]); // 此处返回Promise<Array> 或者Array都可以
                    }
                }, {
                    key: 'ruleType',
                    type: 'select',
                    label: '评价类型',
                    defaultValue:'1',
                    options: [
                        {
                            label: '有默认值',
                            value: '1'
                        }
                    ],
                }, {
                    key: 'ruleName',
                    type: 'input',
                    label: '输入框',
                }, {
                    key: 'switch',
                    type: 'switch',
                    defaultValue:false,
                    label: '开关',
                },{
                    key: 'time',
                    type: 'time',
                    label: '时间',
                }, {
                    key: 'date',
                    type: 'date',
                    label: '日期',
                }, {
                    key: 'datetime',
                    type: 'datetime',
                    label: '日期时间',
                }, {
                    key: 'timerange',
                    type: 'timerange',
                    label: '时间范围',
                }, {
                    key: 'daterange',
                    type: 'daterange',
                    label: '日期范围',
                }, {
                    key: 'datetimerange',
                    type: 'datetimerange',
                    label: '日期时间范围',
                },  {
                    key: 'speek',
                    type: 'checkbox',
                    width: '100%',
                    label: '多选',
                    options:[
                        '类型1',
                        '类型2',
                    ]
                }, {
                    key: 'choose',
                    type: 'radio',
                    label: '单选',
                    options:[
                        {
                            label: '选择1',
                            value: '1'
                        },
                        {
                            label: '选择2',
                            value: '2'
                        }
                    ]
                }, {
                    key: 'render',
                    label: '自定义渲染',
                    render:(obj)=>{
                        const list = [{
                            value: '选项1',
                            label: '黄金糕'
                            }, {
                            value: '选项2',
                            label: '双皮奶'
                        }];
                        return <el-select style="width:100%" v-model={obj.render} placeholder="请选择">
                            {
                                list.map((item,index)=>{
                                    return <el-option
                                    key={index}
                                    label={item.label}
                                    value={item.value}>
                                    </el-option>
                                })
                            }
                            
                        </el-select>
                    }
                },{
                    key: 'upload',
                    type: 'upload',
                    label: '上传图片',
                    placeholder:'由于上传地址不正确，请复制代码后自行测试', // 提示
                    props:{
                        limit:3, // 限制上传数量
                        listType:'picture-card',
                        action:'/index/index/upFiles', // 上传地址
                    }
                },{
                    key: 'file',
                    type: 'upload',
                    label: '上传文件',
                    placeholder:'由于上传地址不正确，请复制代码后自行测试', // 提示
                    props:{
                        drag:true,
                        action:'/index/index/upFiles',
                    }
                }], 
            }
        },
        methods:{
            save(value) {
                console.log('保存',value)
            },
            cancel() {
                console.log('取消')
            },
        }
    }
<\/script>` // eslint-disable-line
        }
    },
    methods:{
        save(value) {
            console.log('保存',value)
        },
        cancel() {
            console.log('取消')
        },
    }
}
</script>

