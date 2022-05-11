<template>
    <div class="main">
        <div class="img_in">
            <span class="left icon"><el-icon><arrow-left-bold /></el-icon></span>
            <span class="right icon"><el-icon><arrow-right-bold /></el-icon></span>
            <span class="buttom">
                <el-icon><circle-check-filled /></el-icon>
                <el-icon><circle-close-filled /></el-icon>
                <el-icon><circle-close-filled /></el-icon>
                <el-icon><circle-close-filled /></el-icon>
                <el-icon><circle-close-filled /></el-icon>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RollImgShow"
    }
</script>

<style scoped>
    body {
        margin: 0;
    }

    .main {
        margin: 0 auto;
        width: 100%;
        height: 560px;
        border: 3px solid;
    }

    .img_in {
        width: 100%;
        height: 100%;
        background-image: url('https://s2.loli.net/2022/04/03/NxQafWFpP5YkTm3.jpg');
        background-size: cover;
        text-align: center;
    }

    .left {
        float: left;
    }

    .right {
        float: right;
    }

    .icon {
        position: relative;
        top: 40%;
    }

    .buttom {
        margin: 0 auto;
        border-radius: 10px;
        background-color: rgb(181, 190, 200);
        position: relative;
        top: calc(100% - 30px);
    }
</style>
