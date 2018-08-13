<template>
    <div id="app">
        {{message}}
        <router-view />
    </div>
</template>
<script>
    export default {
        name: 'App',
        data () {
            return {
                message: 'i am app.vue'
            }   
        }
    }
</script>
<style type="scss">
    #app {
        overflow: hidden;
    }
</style>

