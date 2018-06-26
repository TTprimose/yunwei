<!--疾病科室-->

<template>
    <div id="report">
        <headers headName="类型"></headers>
        <div class="contentScollr">
            <ul>
                <li @click="check(index)"  v-for="(item,index) in reports" class="list" :class="{'checked':ind === index}">
                    {{item}}
                    <img slot="icon" src="../assets/images/queding.png" />
                </li>
            </ul>

            <mt-button type="primary" class="bottom" @click="post">确定
            </mt-button>
        </div>
    </div>

</template>
<script>
    import   headers   from"../components/Header.vue";
    export default{
        data(){
            return{
                reports:["门诊记录","门诊记录","门诊记录","门诊记录"],
                ind:0,
                cont:0,
                objj:{}
            }
        },
        created(){
            this.objj=JSON.parse(localStorage.getItem('objj'))
//            console.log(routerParams.obj.depart);
            for(let i=0;i<this.reports.length;i++){
                if(this.reports[i]==this.objj.report){
                    this.ind=i
                }
            }
        },
        methods:{
            check(e){
//                    console.log(e.currentTarget)
                this.ind = e
            },
            post(){
                let report=this.reports[this.ind]
                this.objj.report=report
                let asd=JSON.stringify(this.objj)
                localStorage.setItem('objj', asd)
                console.log(report);
                this.$router.replace({
                    name: 'uploudRecords',
                })
            }
        },
        components: {
            headers
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    .contentScollr {
        position: absolute;
        top:2.2rem;
        bottom: 0;
        width:100%;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: #eee;
    }
    .list{
        padding:0.75rem 0.6rem;
        font-size: 0.7rem;
        color: #333;
        cursor: pointer;
        border-bottom: 0.025rem solid #e5e5e5;
        background-color:#fff;
    img{
        height:1.3rem;
        width:1.3rem;
        float: right;
        display: none;
    }
    }
    .checked{
        color: #88d5e0;
    img{
        display: block;
    }
    }
    .bottom{
        width:17rem;
        height:2rem;
        margin-left: 0.75rem;
        margin-top: 1.5rem;
        background-color:#4dc8d7 ;
    }
</style>