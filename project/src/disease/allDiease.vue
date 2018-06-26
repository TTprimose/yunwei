<template>
    <div class="all">
        <headers :headName="name"></headers>
        <ul class="list contentScollr">
            <li v-for="(item,index) in Hospital" @click="getDetail(item.id)">
                <ul>
                    <li class="black">{{item.type}}</li>
                    <li>{{item.hospital}} <p class="Data">{{item.time}}</p></li>
                    <li>{{item.department}}</li>
                </ul>
            </li>
        </ul>

    </div>
</template>
<script>
    import   headers   from"../components/Header.vue";
    export default{
        data(){
            return {
                name:"胃炎",
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
                ],
            }
        },
        methods:{
            getDetail(i){
                if (i == 1) {
                    this.$router.push({
                        path: "/outpatientRecords",
                    })
                }
                if (i == 2) {
                    this.$router.push({
                        path: "/doctorAdvice",
                    })
                }
                if (i == 3) {
                    this.$router.push({
                        path: "/prescription",
                    })
                }
                if (i == 4) {
                    this.$router.push({
                        path: "/Img",
                    })
                }
                if (i == 5) {
                    this.$router.push({
                        path: "/medical",
                    })
                }
                if (i == 6) {
                    this.$router.push({
                        path: "/surgery",
                    })
                }
                if (i == 7) {
                    this.$router.push({
                        path: "/into",
                    })
                }
                if (i == 8) {
                    this.$router.push({
                        path: "/out",
                    })
                }
                if (i == 9) {
                    this.$router.push({
                        path: "/nursing",
                    })
                }
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
    .list {
        >li{
             padding: 0.6rem 0.6rem;
             line-height: 1.25rem;
             font-size: 0.7rem;
             color: #666;
             border-bottom: 0.025rem solid #e5e5e5;
    .black{
        color: #333;
    }
    .Data{
        float: right;
    }
        }
    }
    .contentScollr{
        position: absolute;
        top:2.2rem;
        bottom: 0;
        width:100%;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>