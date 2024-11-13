<template>
    <div class="main">
        <copyComponent :code="code">
            <el-modal-form text="详情" :buttonProps="buttonProps" :defaultVaue="getDefaultVaue" disabled :columns="columns" />
            <el-modal-form text="编辑" :buttonProps="buttonProps" :defaultVaue="getDefaultVaue" :columns="columns" :save="save" />
            <div slot="title">详情/编辑</div>
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
                key: 'ruleType',
                type: 'checkbox',
                label: '评价类型',
                rules:[
                    { required: true, message: '请填写活动形式' }
                ],
                options:[
                    '类型1',
                    '类型2',
                ]
            }, {
                key: 'ruleName',
                type: 'input',
                label: '评价事项',
                defaultValue:'123',
                render:(obj)=>{
                    return <el-input v-model={obj.ruleName}></el-input>
                }
            }, {
                key: 'startAt',
                type: 'daterange',
                label: '评价日期',
            }],
            buttonProps:{
                type:'text'
            },
            code:`<div>
    <el-modal-form text="详情" :buttonProps="buttonProps" :defaultVaue="getDefaultVaue" disabled :columns="columns" />
    <el-modal-form text="编辑" :buttonProps="buttonProps" :defaultVaue="getDefaultVaue" :columns="columns" :save="save" />
</div>
<script>
    export default {
        data() {
            return {
                columns: [{
                    key: 'ruleType',
                    type: 'checkbox',
                    label: '评价类型',
                    rules:[
                        { required: true, message: '请填写活动形式' }
                    ],
                    options:[
                        '类型1',
                        '类型2',
                    ]
                }, {
                    key: 'ruleName',
                    type: 'input',
                    label: '评价事项',
                    defaultValue:'123',
                    render:(obj)=>{
                        return <el-input v-model={obj.ruleName}></el-input>
                    }
                }, {
                    key: 'startAt',
                    type: 'daterange',
                    label: '评价日期',
                }],
                buttonProps:{
                    type:'text'
                }
            }
        },
        methods:{
            getDefaultVaue(){ // 可以用接口获取后返回对象
                return Promise.resolve({
                    ruleType:['类型1']
                })
            },
            save(value) { // 返回是否保存成功
                console.log('值：',value)
                return true;
            },
        }
    }
<\/script>` // eslint-disable-line
        }
    },
    methods:{
        getDefaultVaue(){ // 可以用接口获取后返回对象
            return Promise.resolve({
                ruleType:['类型1']
            })
        },
        save(value) { // 返回是否保存成功
            console.log('值：',value)
            return true;
        },
    }
}
</script>

