<template>
    <div id="app">
        <TopNavbar/>
        <router-view/>
    </div>
</template>

<style lang="scss">

</style>
<script>
    import TopNavbar from "@/components/ui/TopNavbar";

    export default {
        components: {TopNavbar}
    }
</script>