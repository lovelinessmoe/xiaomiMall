<template>
    <div>
        <span style="font-size: 30px;">手机</span>
        <span style="font-size: 30px;float: right">查看更多 <el-icon><arrow-right /></el-icon></span>
    </div>
    <div class="main">
        <div class="left"></div>
        <div class="right">
            <div class="up">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
            <div class="down">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Phone"
    }
</script>

<style scoped>
    .main {
        height: 400px;
        width: 100%;
        margin: 0 auto;
    }

    .left {
        width: 29%;
        height: 390px;
        float: left;
        background-color: darkgray;
        margin: 5px;
    }

    .right {
        width: 69%;
        height: 390px;
        float: left;
        background-color: rgb(208, 208, 26);
        margin: 5px;
    }

    .right .up {
        height: 195px;
        background-color: aqua;
    }

    .right .down {
        height: 195px;
        background-color: rgb(141, 63, 99);
    }

    .box {
        height: 180px;
        width: 23%;
        background-color: tomato;
        float: left;
        margin: 5px;
    }
</style>
