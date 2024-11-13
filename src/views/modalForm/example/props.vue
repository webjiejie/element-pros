<template>
    <div class="main">
        <copyComponent :code="code">
            <el-modal-form text="保存失败" :buttonProps="buttonProps" :modalProps="modalProps" :formProps="formProps" :columns="columns" :save="save" />
            <div slot="title">保存失败</div>
            <div slot="remark">
                buttonProps、modalProps、formProps分别是按钮、弹窗、表单的配置项<br />
                save函数返回false或者Promise的false就是失败，这时不会关闭按钮
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
                type:'primary'
            },
            modalProps:{
                width:'80%',
                'close-on-click-modal':false
            },
            formProps:{
                columnNum:3
            },
            code:`<div>
    <el-modal-form text="保存失败" :buttonProps="buttonProps" :modalProps="modalProps" :formProps="formProps" :columns="columns" :save="save" />
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
                    type:'primary'
                },
                modalProps:{
                    width:'80%',
                    'close-on-click-modal':false
                },
                formProps:{
                    columnNum:3
                },
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
        save(value) { // 返回失败
            console.log('值：',value)
            return new Promise((reject)=>{
                setTimeout(()=>{
                    reject(false); // 返回false就是失败，这时不会关闭按钮
                    this.$message.error("保存失败")
                },2000)
            })
        },
    }
}
</script>

