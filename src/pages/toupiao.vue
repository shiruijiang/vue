<template>
    <div class="boxx">
        <Header :back='true' class="heads">
            <div>
                <template>
                    <span>投票</span>
                    <span class="next" @click="toDetail">发起投票</span>
                </template>
            </div>
        </Header>
        <div class="cont">
        <div class="tab">
            <span v-for="(item,index) in list" :key="index" @click="fn(item.id)" :class='{active:flag===item.id}'>{{item.name}}</span>
        </div>
        <div class="content">
            <div class="items" v-for="(item,index) in data" :key="index">
                <div class="head"> <span>沐恩恩静</span><br/>
                    {{item.title}}</div>
                    <div class="stop">截止到:{{item.endTime}}</div>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import axios from '../until/http.js'
export default {
    data(){
        return{
            list:[
                {
                    id:1,
                    name:'全部'
                },
                {
                    id:2,
                    name:'已结束'
                },
                {
                    id:3,
                    name:'正在进行'
                }
            ],
            flag:1,
            data:[],
            dataList:[]
        }
       
    },
    created(){
        axios.get('/api/vote/allVote').then(res=>{
            this.data=res
            this.dataList=res
        })
    },
    methods:{
        fn(id){
            this.flag=id
            if(id===1){
                this.data=this.dataList
            }else if(id===2){
               let datas= this.dataList.filter(item=>{
                     let endtime=new Date(item.endTime).getTime()
                     let nowTime =new Date().getTime()
                     let cha=endtime-nowTime
                     return cha<0
                 })
                 this.data=datas
            }else{
                let lists= this.dataList.filter(item=>{
                     let endtime=new Date(item.endTime).getTime()
                     let nowTime =new Date().getTime()
                     let cha=endtime-nowTime
                     return cha>0
                 })
                 this.data=lists
            }   
        },
        toDetail(){
            this.$router.push('/toupiaoDetail')
        }
    }
}
</script>

<style scoped>
.cont{
    margin-top: 50px;
}
.heads{
    position: fixed;
    left: 0;
    top: 0;
}
span{
    text-align: left;
    font-size: 14px
}
.next{
    margin-left:100px;
    color: #2a82e4
}
.tab{
    width: 80%;
    height: 25px;
    margin-left: 10%;
    margin-top: 5px;
}
.tab span{
    display: inline-block;
    width: 80px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    margin-left: 10px;
    border:1px solid rgb(255, 87, 51);
}
.active{
    background: rgb(255, 87, 51);
    color: white;
}
.items{
    width: 250;
    height: 50px;
    margin-top: 10px;
    width: 80%;
    margin-left: 10%;
    border-radius: 5px;
    box-shadow: 5px 5px 3px #e5e5e5;
    display: flex;
}
.content{
    padding-top:5px; 
}
.head{
    width:238px;
    font-size: 14px;
    color: #aaa;
    padding: 8px 22px;
    /* box-sizing: border-box; */
}
.head span{
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
}
.stop{
    font-size: 12px;
    white-space : normal nowrap
}
</style>

