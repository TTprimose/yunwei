<!--检查图像详情-->
<template>
    <div class="details">
        <headers :headName="name"></headers>
        <recordType></recordType>
        <ul class="routBox">
            <li> <router-link to="/intoInform" replace>入院记录</router-link> </li>
            <li>原始图片</li>
        </ul>
        <div class="line"></div>
        <div class="view">

            <router-view></router-view>
        </div>

    </div>
</template>
<script>

    import   headers   from"../components/Header.vue";
    import   recordType   from"../components/recordType.vue";

    export default{
//        el:".details",
        data(){
            return{
                name:"入院记录"
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
//        router:routers
    }
</script>
<style lang="scss" scoped>
    .routBox{
        display: flex;
        top:2.2rem;
        height:2rem;
        width:100%;
        background-color: #fff;
        justify-content: space-around;
    li{
        width:auto;
        height:1.9rem;
        line-height: 2rem;
        color: #666;
        font-size: 0.7rem;
    a{
        color: #666;
        font-size: 0.7rem;
    }
    .router-link-active{
        display: inline-block;
        height:1.9rem;
        color: #4dc7d9;
        border-bottom: 0.1rem solid #4dc7d9;

    }
    }
    }
    .line{
        height:0.5rem;
        background-color: #d5d5d5;
    }
    .view{
        position: absolute;
        top:4.7rem;
        bottom: 0;
        width:100%;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
    }
</style>