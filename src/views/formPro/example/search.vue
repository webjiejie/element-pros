<template>
    <div class="main">
        <copyComponent :code="code">
            <el-form-pro :columns="columns" :columnNum="columnNum" :searchType="searchType" @search="search" @reset="reset"></el-form-pro>
            <div slot="title">
                创建搜索
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
            searchType:'all', // 显示查询和重置按钮
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
            }],
            code:`<div>
    <el-form-pro :columns="columns" :columnNum="columnNum" :searchType="searchType" @search="search" @reset="reset"></el-form-pro>
</div>
<script>
    export default {
        data() {
            return {
                columnNum:3, // 每排显示3个formItem
                searchType:'all', // 显示查询和重置按钮
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
                }],
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
        reset(value) {
            console.log('重置',value)
        },
        search(value) {
            console.log('查询',value)
        },
    }
}
</script>

