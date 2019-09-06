<template>

    <div>
        <input type="text" placeholder="请输入用户名" v-model='username'><br/>
        <input type="text" placeholder="请输入真实姓名" v-model='name'><br/>
        <input type="text" placeholder="请输入密码" v-model='password'><br/>

        <input type="text" placeholder="请确认输入密码" v-model='pwd'><br/>
        <button @click="Register">注册</button>
    </div>
</template>

<script>
import Axios from 'axios';
import { Message } from 'element-ui';

export default {
    data(){
        return{
            username:'',
            password:'',
            pwd:'',
            name:''
        }
    },
    methods:{
        
     Register(){
        if(this.password===this.pwd){
            Axios.post('/api/register',{userName:this.username,password:this.password,realName:this.name}).then(res=>{
            console.log(res)
            if(res.data.code===1){
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                     type: 'success'
                 });
                 this.$router.push('/login')
            }
            })
          }else{
            this.$message({
                 showClose: true,
                 message: '两次输入的密码不一致,请重新输入',
                 type: 'error'
             });
          }
        }      
    }
}
</script>

