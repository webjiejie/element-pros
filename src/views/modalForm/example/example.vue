<template>
    <div class="main">
        <copyComponent :code="code">
            <el-modal-form text="modalForm按钮" :columns="columns" :save="save" v-model="open" />
            <el-button @click="open=!open">外边直接控制model的显示与否</el-button>
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
            open:false,
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
            code:`<div>
    <el-modal-form text="modalForm按钮" :columns="columns" :save="save" v-model="open" />
    <el-button @click="open=!open">外边直接控制model的显示与否</el-button>
</div>
<script>
    export default {
        data() {
            return {
                open:false,
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
            }
        },
        methods:{
            save(value) { // 等2秒后返回成功，关闭弹窗
                console.log('值：',value)
                return new Promise((reject)=>{
                    setTimeout(()=>{
                        reject(true)
                    },2000)
                })
            },
        }
    }
<\/script>` // eslint-disable-line
        }
    },
    methods:{
        save(value) {
            console.log('值：',value)
            return new Promise((reject)=>{
                setTimeout(()=>{
                    reject(true)
                },2000)
            })
        },
    }
}
</script>

