<!--心电图检查-->

<template>
    <div class="records">
        <headers :headName="name"></headers>
        <recordType></recordType>
        <div class="line"></div>
        <ul>
            <li @click="go(1)">
                <img src="../assets/images/c54_icon1.png" alt="">
                肾血流功能显现
                <img class="right" src="../assets/images/c13_liebiao.png" alt="">
            </li>
            <li @click="go(2)">
                <img src="../assets/images/c54_icon2.png" alt="">
                心肌断层显现
                <img class="right" src="../assets/images/c13_liebiao.png" alt="">
            </li>
            <li  @click="go(3)">
                <img src="../assets/images/c41_icon3.png" alt="">
                原始图片
                <img class="right" src="../assets/images/c13_liebiao.png" alt="">
            </li>
        </ul>
    </div>
</template>
<script>
    import   headers   from"../components/Header.vue";
    import   recordType   from"../components/recordType.vue";
    export default{
        data(){
            return{
                name:"检查图像"
            }
        },
        methods:{
            go(i){
                if(i==1){
                    this.$router.push({
                        path:"/ImgInform1"
                    })
                }
                if(i==2){
                    this.$router.push({
                        path:"/ImgInform2"
                    })
                }

            }
        },
        components: {
            headers,
            recordType
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    .records{
        height:100%;
        width:100%;
        background-color: #eee;
    .line{
        height: 0.5rem;
        background-color: #eee;
    }
    li{
        height:3rem;
        background-color: #fff;
        box-sizing: border-box;
        color: #333;
        font-size: 0.7rem;
        border-bottom: 0.025rem solid #e5e5e5;
        padding:1rem 0.75rem;
    img{
        margin-top: 0.09rem;
        margin-right: 0.5rem;
    }
    .right{
        float: right;
        margin-top: 0.1rem;
    }
    }
    }

</style>