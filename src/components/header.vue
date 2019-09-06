<template>
    <header>
        <span v-if="back" @click="fn">&lt;</span>
        <div>
            <slot></slot>
        </div>
    </header>
</template>
<script>
export default {
    props:{
        back:Boolean
    },
    methods:{
        fn(){
            // console.log(this.$router.history.current.fullPath)
            // console.log(this.$router)
            this.$router.history.go(-1)
        }
    }
}
</script>
<style scoped>
header{
    width: 100%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e5e5e5
}
span{
    flex:1
}
div{
    flex: 1;
    text-align: center;
    margin-left: -20px;
}
</style>



