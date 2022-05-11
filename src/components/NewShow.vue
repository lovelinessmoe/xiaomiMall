<template>
    <div style="width: 100%;">
        <div class="up">
            <div class="up_first">
                <div class="up_in">
                    <div>
                        <el-icon size="30px">
                            <clock/>
                        </el-icon>
                        <br/>
                        <span>保障服务</span>
                    </div>
                    <div>
                        <el-icon size="30px">
                            <management/>
                        </el-icon>
                        <br/>
                        <span>企业团购</span>
                    </div>
                    <div>
                        <el-icon size="30px">
                            <mostly-cloudy/>
                        </el-icon>
                        <br/>
                        <span>F码通道</span>
                    </div>
                </div>
                <div class="up_in">
                    <div>
                        <el-icon size="30px">
                            <refrigerator/>
                        </el-icon>
                        <br/>
                        <span>米粉卡</span>
                    </div>
                    <div>
                        <el-icon size="30px">
                            <refresh-right/>
                        </el-icon>
                        <br/>
                        <span>以旧换新</span>
                    </div>
                    <div>
                        <el-icon size="30px">
                            <shop/>
                        </el-icon>
                        <br/>
                        <span>话费充值</span>
                    </div>
                </div>
            </div>
            <div><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ab8e5096ac6f08bd632e4d5a15d1792.jpg?w=632&amp;h=340"
                    alt=""></div>
            <div><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c5f019908e21571fe48fdad0ebf79249.jpg?w=632&amp;h=340"
                    alt=""></div>
            <div><img
                    src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/28c13d0d11b38ec17fa5d83bc6ba5912.jpg?w=632&amp;h=340"
                    alt=""></div>
        </div>
        <br/>
        <div class="down">
            <img style="width: 100%"
                 src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0e2b43800d3e1ef40470ac04b3e0140b.jpg?thumb=1&amp;w=1226&amp;h=120&amp;f=webp&amp;q=90"
                 height="120" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "NewShow"
    }
</script>

<style scoped>
    .up {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .up > div {
        flex: 1;
        border: 1px solid black;
        height: 120px;
    }

    .up > div > img {
        width: 100%;
        height: 100%;
    }

    .down {
        width: 100%;
        height: 120px;
    }

    .up_first {

    }

    .up_in {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }

    .up_in > div {
        flex: 1;
        border: 1px solid black;
        height: 59px;
        text-align: center;
    }

</style>
