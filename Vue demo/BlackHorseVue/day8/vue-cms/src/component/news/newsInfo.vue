<template>
    <div>
        <h1>newsinfo----{{id}}</h1>


    </div>
</template>

<script>
    export default {
        data() {
            return{
                id:this.$route.params.id
            }
        },
        created() {
           
        },
        methods: {
           
        }
    }
</script>

<style lang="scss" scoped>


</style>