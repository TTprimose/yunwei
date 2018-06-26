<!--疾病管理-->

<template>
    <div id="records">
        <headers headName="健康档案"></headers>
        <router-link :to="{path: '/uploudRecords'}">
            <p class="archives">健康上传</p>
        </router-link>
        <div class="contentScollr">
            <div class="user">
                <p class="color"></p>
                <ul>
                    <li><img src="../assets/images/3.jpg" alt=""></li>
                    <li>ddddd</li>
                    <li><span>性别&nbsp女</span>&nbsp <span>年龄&nbsp41</span></li>
                </ul>
            </div>
            <ul class="history">
                <li @click="rout(1)">
                    <img src="../assets/images/c36_icon1.png" alt="">
                    <p>门诊记录</p>
                </li>
                <li  @click="rout(2)">
                    <img src="../assets/images/c36_icon2.png" alt="">
                    <p>入院记录</p>
                </li>
                <li @click="rout(3)">
                    <img src="../assets/images/c36_icon3.png" alt="">
                    <p>出院记录</p>
                </li>
                <li @click="rout(4)">
                    <img src="../assets/images/c36_icon4.png" alt="">
                    <p>手术记录</p>
                </li>
                <li @click="rout(5)">
                    <img src="../assets/images/c36_icon5.png" alt="">
                    <p>护理记录</p>
                </li>
                <li @click="rout(6)">
                    <img src="../assets/images/c36_icon6.png" alt="">
                    <p>检验检查</p>
                </li>
                <li @click="rout(7)">
                    <img src="../assets/images/c36_icon7.png" alt="">
                    <p>影像检查</p>
                </li>
                <li @click="rout(8)">
                    <img src="../assets/images/c36_icon8.png" alt="">
                    <p>医嘱处方</p>
                </li>
            </ul>
            <div class="line"></div>
            <dl class="allDisease">
                <router-link to="/allDiease">
                    <dt>疾病总览</dt>
                </router-link>
                <dd v-for="item in Hospital" @click="getDetail(item.id)">
                        <ul class="list">
                            <li class="black">{{item.type}}</li>
                            <li>{{item.hospital}}<p class="Data">{{item.time}}</p></li>
                            <li>{{item.department}}</li>
                            <li>
                                <ul class="hist  clear">
                                    <li>{{item.type}}记录1</li>
                                    <li>{{item.type}}记录2</li>
                                    <li>{{item.type}}记录3</li>
                                </ul>
                            </li>
                        </ul>
                </dd>

            </dl>
        </div>
    </div>
</template>
<script>
    import   headers   from"../components/Header.vue";
    export default{
        data(){
            return{
                ind:0,
                Hospital: [
                    {
                        hospital: "医院1",
                        id: 1,
                        type: "门诊",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室11"
                    },
                    {
                        hospital: "医院1",
                        id: 2,
                        type: "医嘱",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室12"
                    },
                    {
                        hospital: "医院1",
                        id: 3,
                        type: "处方",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室13"
                    },
                    {
                        hospital: "医院1",
                        id: 4,
                        type: "心电图",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室14"
                    },
                    {
                        hospital: "医院2",
                        id: 5,
                        type: "糖尿病检查",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室21"
                    },
                    {
                        hospital: "医院2",
                        id: 6,
                        type: "手术",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室22"
                    },
                    {
                        hospital: "医院2",
                        id: 7,
                        type: "入院",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室23"
                    },
                    {
                        hospital: "医院2",
                        id: 8,
                        type: "出院",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室24"
                    },
                    {
                        hospital: "医院2",
                        id: 9,
                        type: "护理",
                        time: "2017-05-24",
                        date: "12:00",
                        department: "科室25"
                    }
                ]
            }
        },
        methods:{
          rout(e){
                this.ind=e
                this.$router.push({
                    name: 'outpatient'
                })
            },
            getDetail(i){
                if (i == 1) {
                    this.$router.push({
                        path: "/outpatientRecords"
                    })
                }
                if (i == 2) {
                    this.$router.push({
                        path: "/doctorAdvice"
                    })
                }
                if (i == 3) {
                    this.$router.push({
                        path: "/prescription"
                    })
                }
                if (i == 4) {
                    this.$router.push({
                        path: "/Img"
                    })
                }
                if (i == 5) {
                    this.$router.push({
                        path: "/medical"
                    })
                }
                if (i == 6) {
                    this.$router.push({
                        path: "/surgery"
                    })
                }
                if (i == 7) {
                    this.$router.push({
                        path: "/into"
                    })
                }
                if (i == 8) {
                    this.$router.push({
                        path: "/out"
                    })
                }
                if (i == 9) {
                    this.$router.push({
                        path: "/nursing"
                    })
                }
            }
        },
        components: {
            headers
        },
        beforeRouteLeave(to, from, next){
            //打开详情页（或者下一个任意界面）之前，把筛选条件保存到localStorage，如果离开列表页并且打开的不是详情页则清除，也可以选择不清除
            if (to.name == 'outpatient') {
                let condition = this.ind
                localStorage.setItem('recordType', condition)
            }else{
                localStorage.removeItem('recordType')
            }
            next()
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    #records {
        position: fixed;
        background-color: #fff;
        height: 100%;
    .archives {
        font-size: 0.75rem;
        color: #fff;
        position: fixed;
        top: 0;
        right: 0.75rem;
        height: 2.2rem;
        line-height: 2.2rem;
        z-index: 1000;
    }
    .contentScollr {
        position: fixed;
        top:2.2rem;
        bottom: 0;
        left: 0;
        right: 0;
        flex: 1;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    .user {
        height: 6.8rem;
        position: relative;

    .color {
        height: 2.1rem;
        background-color: #4cc6d8;
    }

    ul {
        height: 5.5rem;
        position: relative;
        top: -1.65rem;
        text-align: center;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;
    >:nth-child(2) {
        color: #333;
        font-size: 0.7rem;
    }
    :nth-child(3) {
        color: #bdbdbd;
        font-size: 0.7rem;
    }
    img {
        background-color: #ccc;
        width: 3rem;
        height: 3rem;
        border: 0.1rem solid #fff;
        border-radius: 50%;
    }

    }
    }
    .history {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        flex-wrap: wrap;
    li {
        width: 3rem;
        height: 2.5rem;
        overflow: hidden;
        text-align: center;
        line-height: 1.5rem;
        margin:1.5rem 0.8rem;
    img{
        height: 1rem;
        width:auto;
    }
    p {
        font-size: 0.6rem;
        color: #999;
    }
    }
    }
    .line {
        height: 0.6rem;
        background-color: #eee;
    }
    .allDisease{
    dt {
        height: 2rem;
        padding-left: 0.6rem;
        color: #4dc7d9;
        font-size: 0.8rem;
        line-height: 2rem;
    }
    dd {
        /*height: 6rem;*/
        padding: 0.6rem 0.6rem;
        /*box-sizing: border-box;*/
        font-size: 0.7rem;
        color: #666;
        border-top: 0.025rem solid #e5e5e5;
    .list {
        /*height: 4.8rem;*/
        line-height: 1.25rem;
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
        justify-content: space-between;

    .hist {

        height: 1rem;

    li {
        float: left;
        margin-right: 0.5rem;
        padding: 0.2rem 0.3rem;
        text-align: center;
        border: 0.025rem solid #666;
        border-radius: 0.2rem;
        margin-bottom: 0.1rem;
    }
    }
    }
    .black {
        color: #333;
    }
    .Data {
        float: right;
    }
    }
    }
    }
    }






</style>