<template>
  <div id="app">
    <div class="main">
      <el-table-pro :tableObj="tableObj"></el-table-pro>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableObj: {
        search: { // 查询配置
          props: {
            labelWidth: '60px'
          },
          interval: 16, // 查询的每列间距
        },
        request: (data) => { // 获取列表数据
          console.log(data, "request")
          return new Promise((reject) => {
            setTimeout(() => {
              reject([[{ id: 1, name: '123', sex: '男', age: 6 }, { id: 2, name: '333', sex: '男', age: 26 }], 2])
            }, 1000)
          })
        },
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
            actions: {
              hideInSearch: true, // 不是查询字段
            }
          },
        ]
      },
    }
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}

#app {
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
}

div {
  box-sizing: border-box;
}
</style>
