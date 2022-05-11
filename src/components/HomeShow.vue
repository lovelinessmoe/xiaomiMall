<template>
    <div>
        <div class="left">
            <el-menu
                    active-text-color="#ffd04b"
                    background-color="#949492"
                    class="el-menu-vertical-demo"
                    default-active="2"
                    text-color="#fff"
                    @open="handleOpen"
                    @close="handleClose"
            >
                <el-menu-item index="1">
                    <span>手机</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <span>电视</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <span>笔记本 平板</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <span>家电</span>
                </el-menu-item>
                <el-menu-item index="5">
                    <span>出行 穿戴</span>
                </el-menu-item>
                <el-menu-item index="6">
                    <span>智能 路由器</span>
                </el-menu-item>
                <el-menu-item index="7">
                    <span>电源 配件</span>
                </el-menu-item>
                <el-menu-item index="8">
                    <span>健康 儿童</span>
                </el-menu-item>
                <el-menu-item index="9">
                    <span>耳机 音响</span>
                </el-menu-item>
                <el-menu-item index="10">
                    <span>生活 箱包</span>
                </el-menu-item>
            </el-menu>
        </div>
        <div class="right">
            <RollImgShow/>
        </div>
        <div style="clear: both"></div>
    </div>
</template>

<script>
    import RollImgShow from "./RollImgShow.vue";
    export default {
        name: "HomeShow",
        components: {RollImgShow}
    }
</script>

<style scoped>
    .left {
        width: 29%;
        float: left;
    }

    .right {
        width: 69%;
        float: right;
    }
</style>
