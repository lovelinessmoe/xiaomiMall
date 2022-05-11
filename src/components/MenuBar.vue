<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
    >
        <el-menu-item index="1">
            <img style="width: 60px;height: 60px;"
                 src="../assets/img/logo.svg" alt="">
        </el-menu-item>
        <el-menu-item index="2">Xiaomi 手机</el-menu-item>
        <el-menu-item index="3">Redmi 红米</el-menu-item>
        <el-menu-item index="4">电视</el-menu-item>
        <el-menu-item index="5">笔记本</el-menu-item>
        <el-menu-item index="6">平板</el-menu-item>
        <el-menu-item index="7">家电</el-menu-item>
        <el-menu-item index="8">路由器</el-menu-item>
        <el-menu-item index="9">服务</el-menu-item>
        <el-menu-item index="10">社区</el-menu-item>
        <el-menu-item index="11">
            <div>
                <el-input v-model="val" size="large" placeholder="请输入验证码"
                          suffix-icon="Search"/>

            </div>
        </el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "MenuBar"
    }
</script>

<style scoped>

</style>
