<template>
    <div>
        <h3>新闻列表 </h3>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in datalist" :key="item.id">
                <router-link :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3817191486,3276892468&fm=26&gp=0.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>{{item.comment}}</p>
                    </div>
                </router-link>
            </li>

        </ul>


    </div>
</template>

<script>
    export default {
        data() {
            return {
                datalist: [{
                    id: 1,
                    comment: '和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                },{
                    id: 2,
                    comment: '和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                },{
                    id: 3,
                    comment: '和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？'
                }]
            }
        },
        created() {
            this.getLunbotu()
        },
        methods: {
           
        }
    }
</script>

<style lang="scss" scoped>


</style>