<template>
    <div class="user-info">
        <ez-icon icon="Avatar" :size="20"></ez-icon>
        <div class="realname">admin</div>
        <el-button type="text" @click="logout">退 出</el-button>
    </div>
</template>
  
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import Cookies from 'js-cookie';

const router = useRouter()

function logout() {
    Cookies.remove('TOKEN')
    router.push('/login')
}
</script>
<style scoped lang="less">
.user-info {
    display: flex;
    align-items: center;

    .realname {
        font-size: 16px;
        color: #797979;
        margin: 0 15px 0 8px;
    }

    .el-button {
        font-size: 15px;
    }
}
</style>