<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/newslist">
                    <img src="../../img/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="home/photolist">
                    <img src="../../img/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div>
                </router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../img/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div>
                </a></li>
        </ul>
    </div>
</template>

<script>
    import {
        Toast
    } from 'mint-ui'

    export default {
        data() {
            return {
                lunbotuList: []
            }
        },
        created() {
            this.getLunbotu()
        },
        methods: {
            getLunbotu() {
                this.$http.get().then(result => {
                    if (result.body.status === 0) {
                        this.lunbotuList = result.body.message;
                    } else {
                        Toast('获取信息失败')
                    }
                })
            }
        }
    }
</script>


<style lang="scss" scoped>
    .mint-swipe {
        height: 200px;
        background-color: white;
        .mint-swipe-item {
            &:nth-child(1) {
                background-color: red
            }

            &:nth-child(2) {
                background-color: black
            }

            &:nth-child(3) {
                background-color: aqua;
            }
        }
    }
    .mui-grid-view{
        border: 0;
        background-color: white;
        img{
            width: 60px;
            height: 60px;
        }
    }
</style>