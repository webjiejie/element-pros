<template>
    <div class="update-log">
        <div class="update-log-v" v-for="(item,index) in list" :key="index">
            <div class="update-log-vt">
                <div class="update-log-vtl">
                    {{ item.version }}
                </div>
                <div class="update-log-vtr">
                    {{ item.time }}
                </div>
            </div>
            <div class="update-log-vc">
                <div class="update-log-vct">
                    Bug 修复
                </div>
                <div class="update-log-vcv" v-for="(ite,dex) in item.list" :key="dex">
                    <div class="update-log-vcvl">{{ ite.title }}</div>：
                    <div class="update-log-vcvr">{{ ite.remark }}</div>。
                </div>
            </div>
            
        </div>
    </div>
</template>
<script >
export default{
    data(){
        return {
            list:[
                {
                    version:'1.8.0',
                    time:'2024-10-22',
                    type:'Bug 修复',
                    list:[
                        {
                            title:'表单上传图片/文件',
                            remark:'修复显示问题和逻辑处理',
                        },
                        {
                            title:'FormPro表单的formItem宽度',
                            remark:'考虑多数情况都会设置成100%，优化后默认值会设置成100%',
                        }
                    ]
                },
                {
                    version:'1.8.1',
                    time:'2024-10-24',
                    type:'优化',
                    list:[
                        {
                            title:'formPro表单',
                            remark:'优化widthSpan占多少列的算法',
                        }
                    ]
                },
                {
                    version:'1.8.2',
                    time:'2024-11-07',
                    type:'优化',
                    list:[
                        {
                            title:'formPro表单',
                            remark:'增加text文本类型',
                        }
                    ]
                },
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.update-log {
    min-height: 100%;
    color: #1f2f3d;
    padding: 16px;
    background: #fff;
    &-v{
        margin-bottom: 16px;
        border:1px solid #ddd;
        &t{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:1px solid #ddd;
            padding: 15px 30px;
            &l{
                font-size: 20px;
                color: #333;
                font-weight: 700;
            }
            &r{
                font-size: 16px;
                color: #666;
            }
        }
        &c{
            padding: 30px 30px 30px 50px;
            &t{
                font-size: 18px;
                font-weight: 700;
                margin-bottom: 18px;
            }
            &v{
                position: relative;
                display: flex;
                font-size: 16px;
                padding-bottom: 12px;
                color: #555;
                word-break: break-all;
                &l{
                    white-space: nowrap;
                }
                &r{
                    white-space: wrap;
                }
                &::before{
                    position: absolute;
                    top:8px;
                    left:-10px;
                    display: block;
                    content: "";
                    width: 4px;
                    height: 4px;
                    border-radius: 50%;
                    background-color:#555;
                }
            }
        }
    }
}
</style>
