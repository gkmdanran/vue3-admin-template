<template>
    <el-container class="outside">
        <el-header v-if="withHeader">
            <div class="header_right" @click="router.push('/home')">
                <img src="@/assets/logo.png" />
                <div class="title">管理后台</div>
            </div>
            <div>admin</div>
        </el-header>
        <el-container :style="{ height: withHeader ? 'calc(100% - 40px)' : '100%' }">
            <el-aside v-if="withSidebar">
                <Sidebar style="height: 100%;" />
            </el-aside>
            <el-main style="padding:0" v-if="route.meta.paddingPanel === false">
                <div class="pannel">
                    <router-view></router-view>
                </div>
            </el-main>

            <el-main v-else>
                <div class="pannel padding-panel">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Sidebar from '@/components/Sidebar/index.vue'
const router = useRouter()
const route = useRoute()
const withHeader = computed(() => route.meta.withHeader === false ? false : true)
const withSidebar = computed(() => route.meta.withSidebar === false ? false : true)
</script>
<style scoped lang="less">
.outside {
    height: 100%;

    .el-header {
        height: 40px;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header_right {
            cursor: pointer;
            display: flex;
            align-items: center;
            height: 100%;

            img {
                width: 180px;
                height: 100%;
            }

            .title {
                margin-left: 10px;
                font-weight: 700;
                font-size: 18px;
            }
        }
    }

    .el-main {
        background-color: #f7fafc;
    }

    .el-aside {
        height: 100%;
        width: 200px;
    }

    .pannel {
        height: 100%;
    }

    .padding-panel {
        padding: 15px;
        background-color: #fff;
    }
}
</style>
  
  
  