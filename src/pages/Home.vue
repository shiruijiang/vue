<template>
    <div class="home">
        <Header :back='false'>
            <p>沐恩muen</p>
        </Header>
        <Vswiper></Vswiper>
        <div class="icon">
            <dl>
                <dt><i class="el-icon-s-home green"></i></dt>
                <dd>沐恩动态</dd>
            </dl>
            <dl>
                <dt><i class="el-icon-camera-solid green"></i></dt>
                <dd>个人动态</dd>
            </dl>
            <dl>
                <dt><i class="el-icon-message-solid green"></i></dt>
                <dd>小礼品</dd>
            </dl>
            <dl>
                <dt><i class="el-icon-user-solid green"></i></dt>
                <dd>我的列表</dd>
            </dl>
        </div>
        <div class="icon">
            <dl>
                <dt><i class="el-icon-edit green"></i></dt>
                <dd>留言</dd>
            </dl>
            <dl>
                <dt><i class="el-icon-s-tools green"></i></dt>
                <dd>奉献</dd>
            </dl>
            <dl @click="goTotoupiao">
                <dt><i class="el-icon-s-promotion green"></i></dt>
                <dd>投票</dd>
            </dl>
            <dl>
                <dt><i class="el-icon-more green"></i></dt>
                <dd>小组</dd>
            </dl>
        </div>
        <Vrouter />
    </div>
</template>
<script>
import Swiper from 'swiper'
import {} from '../api/api.js'

export default {
    created(){
        this.$nextTick(()=>{
            new Swiper('.swiper-container',{
                autoplay:true,
                loop:true
            })
        })
    },
    methods:{
       goTotoupiao(){
            this.$router.push({path:'/toupiao'})
        }
    }
}
</script>

<style>
    .icon{
        width: 100%;
        height:75px;
        display: flex;
    }
    dl{
        width: 25%;
        height: 75px;
        display: flex;
        flex-direction: column;
    }
    dt{
        text-align: center;
        line-height: 40px;
    }
    dd{
        text-align: center;
        line-height: 25px;
        font-size: 14px;
    }
    dl dt i{
        font-size: 26px;
        
    }
    .green{
        color: rgba(67, 207, 124, 1)
    }
</style>

