<template>
    <div class="main">
        <copyComponent :code="code">
            <el-form-pro :columns="columns" @save="save" @cancel="cancel"></el-form-pro>
            <div slot="title">
                必填检验
            </div>
            <div slot="remark">
                选择的值不能为""、null、undefined，不然无法通过检验<br />
                开关switch如果设置了必填检验，需设置一个默认值，否则直接提交检验不会通过
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
                width: '100%',
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
                width: '100%',
                label: '楼层',
                rules:[
                    { required: true, message: '请选择楼层' }
                ],
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
                key: 'yz',
                type:'input',
                label: '自定义校验',
                rules:[
                    { required: true, validator: (rule, value, callback) => {
                        console.log(value,111)
                        if (value === ''||value === undefined) {
                            callback(new Error('请输入自定义校验'));
                        } else {
                            callback();
                        }
                    },}
                ],
                props: { props: { label: 'floorName', value: 'floorId' } },
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
                    rules:[
                        { required: true, message: '请选择楼层' }
                    ],
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
                    key: 'yz',
                    type:'input',
                    label: '自定义校验',
                    rules:[
                        { required: true, validator: (rule, value, callback) => {
                            console.log(value,111)
                            if (value === ''||value === undefined) {
                                callback(new Error('请输入自定义校验'));
                            } else {
                                callback();
                            }
                        },}
                    ],
                    props: { props: { label: 'floorName', value: 'floorId' } },
                }]
            }
        },
        methods: {
            reset(value) {
                console.log('重置',value)
            },
            search(value) {
                console.log('查询',value)
            },
        }
    }
<\/script>` // eslint-disable-line
        }
    },
    methods:{
        save(value) {
            console.log('确定',value)
        },
        cancel(value) {
            console.log('取消',value)
        },
    }
}
</script>

