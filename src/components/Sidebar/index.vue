<template>
    <ez-menu router :menu-json="{ menus: menuList, treeProps: { name: 'description' } }" active-text-color="#fff"
        background-color="#13113a" text-color="#fff">
    </ez-menu>
</template>
  
<script setup lang="ts">
import { ref } from 'vue'
const menuList = ref([
    { description: '测试页面', path: '/demo', id: 1 }
])
</script>
  