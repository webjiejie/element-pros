<template>
    <div class="main">
        <copyComponent :code="code">
            <el-table-pro ref="tableRef" :tableObj="tableObj" :selects="selectIds"></el-table-pro>
            <div slot="title">
                复选框（1.7.1版本开始支持）和序列号
            </div>
            <div slot="remark">
                设置select后可开启table多选框<br />
                开启select.pagination后勾选的值在切换分页时也不会清空<br />
                勾选的值会默认返回 rowKey 字段对应的值，也可通过select.key设置需要返回的值<br />
                通过selects参数可手动设置勾选中的值，需和select.key或rowKey对应<br />
                通过getSelects()方法获取勾选中的值
            </div>
        </copyComponent>
    </div>
</template>
<script>
import copyComponent from "@/components/copyComponent.vue"
export default {
    components: {
        copyComponent
    },
    data() {
        return {
            selectIds: [],
            tableObj: {
                rowKey: 'id',
                select: { // 勾选项
                    align: 'center',
                    // key:'name', // 默认会根据rowKey去匹配selects，也可以自己配置字段
                    pagination: true, // 开启后，分页也不影响勾选项
                },
                index: true, // 序号
                // index: { // 可以传el-table-column上的参数
                //     align:'left'
                // },
                request: (data) => { // 获取列表数据
                    console.log(data, "request")
                    return new Promise((reject) => {
                        setTimeout(() => {
                            if (data.currentPage === 1) {
                                reject([[{ id: 1, name: '1', sex: '男', age: 6 }, { id: 2, name: '2', sex: '男', age: 26 }], 3])
                            } else {
                                // selectIds.value = [1,3] // 若请求接口后需要设置默认选中值，请在reject返回结果之前赋值
                                reject([[{ id: 3, name: '3', sex: '男', age: 6 }], 3])
                            }
                        }, 1000)
                    })
                },
                pagination: {
                    pageSizes: [2, 10, 20, 50],
                    pageSize: 2,
                }, // 配置分页
                toolBarRender: [
                    {
                        text: '获取选择项',
                        key: 'select',
                        props: {
                            type: 'primary',
                        },
                        onClick: () => {
                            console.log('选择项：' + this.$refs.tableRef.getSelects())
                        }
                    },
                    {
                        text: '全选',
                        key: 'all',
                        onClick: () => {
                            this.selectIds = [1, 2, 3]
                        }
                    }
                ],
                columns: [
                    {
                        title: '名称',
                        dataIndex: 'name',
                        valueType: 'input',
                    },
                    {
                        title: '性别',
                        dataIndex: 'sex',
                        valueType: 'select',
                        fieldProps: { // 设置查询的
                            options: [
                                {
                                    label: '男',
                                    value: "M"
                                },
                                {
                                    label: '女',
                                    value: "F"
                                }
                            ],
                            defaultValue: 'M'
                        },
                    },
                    {
                        title: '年龄',
                        dataIndex: 'age',
                        valueType: 'input',
                        actions: {
                            hideInSearch: true, // 不是查询字段
                            hideInUpdate: true, // 不是查询字段
                        }
                    },
                ]
            },
            code: `<div>
    <el-table-pro ref="tableRef" :tableObj="tableObj" :selects="selectIds"></el-table-pro>
</div>
<script>
    export default {
        data() {
            return {
                selectIds: [],
                tableObj: {
                    rowKey: 'id',
                    select: { // 勾选项
                        align: 'center',
                        // key:'name', // 默认会根据rowKey去匹配selects，也可以自己配置字段
                        pagination: true, // 开启后，分页也不影响勾选项
                    },
                    index: true, // 序号
                    // index: { // 可以传el-table-column上的参数
                    //     align:'left'
                    // },
                    request: (data) => { // 获取列表数据
                        console.log(data, "request")
                        return new Promise((reject) => {
                            setTimeout(() => {
                                if (data.currentPage === 1) {
                                    reject([[{ id: 1, name: '1', sex: '男', age: 6 }, { id: 2, name: '2', sex: '男', age: 26 }], 3])
                                } else {
                                    // selectIds.value = [1,3] // 若请求接口后需要设置默认选中值，请在reject返回结果之前赋值
                                    reject([[{ id: 3, name: '3', sex: '男', age: 6 }], 3])
                                }
                            }, 1000)
                        })
                    },
                    pagination: {
                        pageSizes: [2, 10, 20, 50],
                        pageSize: 2,
                    }, // 配置分页
                    toolBarRender: [
                        {
                            text: '获取选择项',
                            key: 'select',
                            props: {
                                type: 'primary',
                            },
                            onClick: () => {
                                console.log('选择项：' + this.$refs.tableRef.getSelects())
                            }
                        },
                        {
                            text: '全选',
                            key: 'all',
                            onClick: () => {
                                this.selectIds = [1, 2, 3]
                            }
                        }
                    ],
                    columns: [
                        {
                            title: '名称',
                            dataIndex: 'name',
                            valueType: 'input',
                        },
                        {
                            title: '性别',
                            dataIndex: 'sex',
                            valueType: 'select',
                            fieldProps: { // 设置查询的
                                options: [
                                    {
                                        label: '男',
                                        value: "M"
                                    },
                                    {
                                        label: '女',
                                        value: "F"
                                    }
                                ],
                                defaultValue: 'M'
                            },
                        },
                        {
                            title: '年龄',
                            dataIndex: 'age',
                            valueType: 'input',
                            actions: {
                                hideInSearch: true, // 不是查询字段
                                hideInUpdate: true, // 不是查询字段
                            }
                        },
                    ]
                }
            }
        }
    }
<\/script>` // eslint-disable-line
        }
    },
}
</script>
<style scoped>
.copy-main {
    background: rgba(250, 250, 250, 0.8);
}
</style>