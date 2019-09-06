<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imgUrl" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    props:{
        imgUrl:{
            type:Array,
            default:()=>{
                return [
                    {
                        img:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=ef6aa9973bd12f2eda08a6322eabbe07/5d6034a85edf8db15f95b4240423dd54564e7433.jpg'
                    },
                    {
                        img:'https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike272%2C5%2C5%2C272%2C90/sign=a61913b4ba4543a9e116f29e7f7ee1e7/9f2f070828381f30fc2440e9a4014c086e06f0b5.jpg'
                    },
                    {
                        img:'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike933%2C5%2C5%2C933%2C330/sign=3d4aca8a8f8ba61ecbe3c07d205dfc6f/fcfaaf51f3deb48f002b6d9efd1f3a292df57834.jpg'
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
    .swiper-container{
        width: 100%;
        height: 150px;
    }
    .swiper-wrapper.swiper-slide{
        width: 100%;
        height: 100%;
    }
     img{
        width: 100%;
        height: 100%;
    }
</style>


