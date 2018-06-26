<!--疾病类型-->

<template>
    <div id="department">
        <headers headName="科室"></headers>
        <div class="contentScollr">
            <ul>
                <li @click="check(index)"  v-for="(item,index) in departments" class="list" :class="{'checked':ind === index}">
                    {{item}}
                    <img slot="icon" src="../assets/images/queding.png" />
                </li>
            </ul>
                    <mt-button type="primary" class="bottom" @click="post">确定</mt-button>
        </div>

    </div>
</template>
<script>
    import   headers   from"../components/Header.vue";
    export default{
        data(){
            return{
                departments:["内科","儿科","儿科","儿科","儿科","儿科","儿科","儿科","儿科","儿科"],
                ind:0,
                cont:0,
                objj:{}
            }
        },
        created(){
            this.objj=JSON.parse(localStorage.getItem('objj'))
            for(let i=0;i<this.departments.length;i++){
                if(this.departments[i]==this.objj.depart){
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
                let depart=this.departments[this.ind]
                this.objj.depart=depart
                console.log(depart);
                let asd=JSON.stringify(this.objj)
                localStorage.setItem('objj', asd)
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
        background-color: #eee;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
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