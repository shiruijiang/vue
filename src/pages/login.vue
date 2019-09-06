<template>
    <div>
        <el-input v-model="username" placeholder="请输入用户名" id="inp">用户名:</el-input>

        <el-input v-model="password" placeholder="请输入密码" type="password" show-password='true'>用户名:</el-input>
        <el-button type="primary"  @click="goTo">立即登陆</el-button>
    </div>
</template>
<script>
import {login} from '../api/api.js'
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
       async goTo(){
          const res= await login({
                userName:this.username,
                password:this.password
            })
                if(res.code===1){
                    window.localStorage.setItem('token',res.token)
                    let redirect=this.$route.query.redirect
                    if(redirect){
                        this.$router.push({path:redirect})
                    }
                }else{
                        this.$router.push({path:'/register'})
                    }
        }
    }
}
</script>
<style scoped>
#inp{
    width: 80%;
    margin-bottom: 20px;
}
</style>


