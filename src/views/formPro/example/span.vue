<template>
    <div class="main">
        <copyComponent :code="code">
            <el-form-pro :columns="columns" :columnNum="columnNum" @save="save" @cancel="cancel"></el-form-pro>
            <div slot="title">
                占多列
            </div>
            <div slot="remark">
                可以通过修改widthSpan参数，让一个formItem占多列
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
            columnNum:3, // 每排显示3个formItem
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
                key: 'age',
                type: 'input',
                widthSpan:2,
                label: '占2列',
            }, {
                key: 'ruleName',
                type: 'input',
                label: '输入框',
            }],
            code:`<div>
    <el-form-pro :columns="columns" :columnNum="columnNum" @save="save" @cancel="cancel"></el-form-pro>
</div>
<script>
    export default {
        data() {
            return {
                columnNum:3, // 每排显示3个formItem
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
                    key: 'age',
                    type: 'input',
                    widthSpan:2,
                    label: '占2列',
                }, {
                    key: 'ruleName',
                    type: 'input',
                    label: '输入框',
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

