<template>
    <div id="app">
        <TopNavbar/>
        <router-view/>
    </div>
</template>

<script>
    import TopNavbar from "@/components/ui/TopNavbar";

    export default {
        components: {TopNavbar}
    }
</script>

<style lang="scss">

</style>