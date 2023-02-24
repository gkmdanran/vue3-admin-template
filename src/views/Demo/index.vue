<template>
    <div class="demo-page">
        <ez-query-template :panel-json="panelJson" v-model:search="queryForm" v-model:pagination="pageForm"
            :tableTotal="total" :tableData="tableList" containerColor="#fff" @refresh-table="getTableList">
            <template #searchButton>
                <ez-button icon="Plus" plain @click="exportFile">导 出</ez-button>
            </template>
            <template #desc="scope">
                <ez-collapse-text :text="scope.row.desc" :limit="5"></ez-collapse-text>
            </template>
            <template #hobby="scope">
                <ez-collapse-list :data="scope.row.hobby" :limit="1">
                    <template #default="scope">
                        <ez-icon icon="Plus"></ez-icon>
                        <span>{{ scope.index + 1 }}、</span>
                        <span>类型：{{ scope.row.type }}:</span>
                        <span>详细：{{ scope.row.desc }}</span>
                    </template>
                </ez-collapse-list>
            </template>
            <template #handler="scope">
                <ez-button type="text" :confirm="{ message: '确认删除吗？' }" @confirmClick="confirmDel()">删除
                </ez-button>
            </template>
        </ez-query-template>
    </div>
</template>

<script lang="ts" setup>
import { commonDownload } from '@/utils/common'
import service from '@/service'
import { ref } from 'vue'
import { panelJson } from './pageJson'
import { ElMessage } from 'element-plus'
const tableList = ref<any>([])
const total = ref(0)
const queryForm = ref({
    username: '',
    sex: ''
})
const pageForm = ref({
    page: 1,
    pageSize: 10
})
function getTableList() {
    total.value = 1
    tableList.value = [
        {
            username: 'test01',
            desc: '这是一段描述这是一段描述这是一段描述这是一段描述这是一段描述',
            hobby: [{
                type: '运动',
                desc: '我喜欢运动',
            }, {
                type: '美食',
                desc: '我喜欢美食',
            }]
        }
    ]

}
function confirmDel() {
    service.Delete(`/demo/delete`, {}).then(res => {
        if (res.code == 0) {
            ElMessage({
                type: 'success',
                message: '删除成功'
            })
            getTableList()
        }
    })
}
function exportFile() {
    commonDownload(`/demo/export`)
}

</script>

<style scoped lang="less">
.demo-page {
    height: 100%;
}
</style>

