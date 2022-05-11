<template>
    <div style="margin: 0 100px">
        <MenuBar/>
        <HomeShow/>
        <NewShow/>
        <Phone/>
    </div>
</template>

<script>
    import Phone from "./Phone.vue";
    import MenuBar from "./MenuBar.vue";
    import HomeShow from "./HomeShow.vue";
    import NewShow from "./NewShow.vue";

    export default {
        name: "Home",
        components: {NewShow, HomeShow, MenuBar, Phone},
    }
</script>

<style scoped>

</style>
