<!--体检数据详情-->
<template>
    <div class="details">
        <headers :headName="name"></headers>
        <recordType></recordType>
        <ul class="routBox">
            <li> <router-link to="/medicalInform1" replace>尿常规</router-link> </li>
            <li> <router-link to="/medicalInform2" replace>血常规</router-link> </li>
            <li>原始图片</li>
        </ul>
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
                name:"体检数据"
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


</style>