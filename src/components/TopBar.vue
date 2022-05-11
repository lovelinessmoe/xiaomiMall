<template>
    <div class="topBar">
        <div style="margin: 0 100px">
            <div style="float: left">
                <a v-for="item in MenuItem" :href="item.url" target="_blank">
                    <span>{{item.name}}</span>
                    <span v-if="item.name !== 'Select Location'">|</span>
                </a>
            </div>
            <div style="float: right">
                <a> <span>登陆</span> <span>|</span> </a>
                <a> <span>注册</span> <span>|</span> </a>
                <a> <span>消息通知</span> </a>
                <a style="background-color: #424242;border-radius: 3px;height: 30px">
                    <el-icon>
                        <goods/>
                    </el-icon>
                    <span>购物车(0)</span> </a>
            </div>
        </div>

    </div>
</template>

<script setup>
    import {ref} from "vue";

    let MenuItem = ref([
        {name: "小米商城", url: "www.mi.com/index.htm"},
        {name: "MIUI", url: "www.miui.com"},
        {name: "IoT", url: "iot.mi.com"},
        {name: "云服务", url: "i.mi.com"},
        {name: "天星数科", url: "airstar.com/home"},
        {name: "有品", url: "youpin.mi.com"},
        {name: "小爱开放平台", url: "xiaoai.mi.com"},
        {name: "企业团购", url: "qiye.mi.com"},
        {name: "资质证照", url: "www.mi.com/aptitude/list/?id=88"},
        {name: "协议规则", url: "www.mi.com/aptitude/list"},
        {name: "下载app", url: "www.mi.com/appdownload"},
        {name: "Select Location", url: ""}
    ]);
</script>

<style scoped>
    .topBar {
        width: 100%;
        height: 30px;
        background-color: #333;
    }

    .topBar a {
        color: #b0b0b0;
        font-size: 14px;
        margin: 5px;
    }
</style>

