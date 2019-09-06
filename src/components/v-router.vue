<template>
    <div class="router">
        <div class="icon">
            <router-link to="/home" tag="dl">
                <dt><i class="el-icon-s-home"></i></dt>
                <dd>首页</dd>
            </router-link>
            <router-link to="/dongtai" tag="dl">
                <dt><i class="el-icon-s-shop"></i></dt>
                <dd>个人动态</dd>
            </router-link>
            <router-link to="/ziliao" tag="dl">
                <dt><i class="el-icon-video-camera-solid"></i></dt>
                <dd>主内资料</dd>
            </router-link>
            <router-link to="/liuyan" tag="dl">
                <dt><i class="el-icon-edit"></i></dt>
                <dd>留言板</dd>
            </router-link>
            <router-link to="/mine" tag="dl">
                <dt><i class="el-icon-s-custom"></i></dt>
                <dd>我的</dd>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.router{
    width: 100%;
    height: 60px;
    position: fixed;
    left: 0;
    bottom: 0;
}
.icon{
        width: 100%;
        height:60px;
        display: flex;
        border:1px solid #e5e5e5;
    }
    dl{
        width: 20%;
        height: 60px;
        display: flex;
        flex-direction: column;
        color: #a7a7a7;
    }
    dt{
        text-align: center;
        line-height: 30px;
    }
    dd{
        text-align: center;
        font-size: 14px;
        height: 20px;
    }
    dl dt i{
        font-size: 25px;
        
        margin-top: 5px
    }
    .router-link-active{
        color: #000000;
    }
</style>

