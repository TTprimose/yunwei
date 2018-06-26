<!--疾病各个记录公用页面-->

<template>
    <div id="outpatient">
        <headers :headName="name"></headers>
        <recordType></recordType>
        <div class="filter-box clear">
            <p class="hospital" @click="openPopup(1)" :title="hospitalVal">
                <span>{{hospitalVal}}</span><img src="../assets/images/c12_xiala.png" v-if="currentXiaLa!=1"/>
                <img src="../assets/images/c12_xiala_p.png" v-if="currentXiaLa==1"/>
            </p>
            <p class="department" @click="openPopup(2)" :title="departmentVal">
                <span>{{departmentVal}}</span><img src="../assets/images/c12_xiala.png" v-if="currentXiaLa!=2"/>
                <img src="../assets/images/c12_xiala_p.png" v-if="currentXiaLa==2"/>
            </p>
            <p class="date" @click="openPopup(3)" :title="dateVal">
                <span>{{dateVal | formatDate}}</span><img src="../assets/images/c12_xiala.png" v-if="currentXiaLa!=3"/>
                <img src="../assets/images/c12_xiala_p.png" v-if="currentXiaLa==3"/>
            </p>
        </div>
        <mt-popup v-model="popupStatus1" position="bottom" :closeOnClickModal='closeType'>
            <div class="popup-box">
                <p class="head clear">
                    <span class="cancel" @click="closePopup()">取消</span>
                    <span class="title" v-if="currentXiaLa==1">选择医院</span>
                    <span class="sure" @click="sureValue(1)">确认</span>
                </p>
                <mt-picker :slots="hospitalArr" valueKey="title" @change="onValuesChange1"></mt-picker>
            </div>
        </mt-popup>
        <mt-popup v-model="popupStatus2" position="bottom" :closeOnClickModal='closeType'>
            <div class="popup-box">
                <p class="head clear">
                    <span class="cancel" @click="closePopup()">取消</span>
                    <span class="title" v-if="currentXiaLa==2">选择科室</span>
                    <span class="sure" @click="sureValue(2)">确认</span>
                </p>
                <mt-picker :slots="departmentArr" valueKey="title" @change="onValuesChange2"></mt-picker>
            </div>
        </mt-popup>
        <!--<mt-popup v-model="popupStatus3" position="bottom" :closeOnClickModal='closeType'>-->
            <!--<div class="popup-box">-->
                <!--<p class="head clear">-->
                    <!--<span class="cancel" @click="closePopup()">取消</span>-->
                    <!--<span class="title" v-if="currentXiaLa==3">选择时间</span>-->
                    <!--<span class="sure" @click="sureValue(3)">确认</span>-->
                <!--</p>-->
                <!--<mt-picker :slots="dateArr" valueKey="title" @change="onValuesChange3"></mt-picker>-->
            <!--</div>-->
        <!--</mt-popup>-->
        <mt-datetime-picker
                            class="picker_show"
                            ref="picker"
                            type="date"
                            v-model="dateVal"
                            :startDate="startDate"
                            :endDate="endDate"
        ></mt-datetime-picker>
        <div class="line"></div>
        <div class="contentScollr">

            <ul class="data">
                <li v-for="item in showHospital" @click="getDetail(item.id)">
                    <dl>
                        <dt>{{item.type}}</dt>
                        <dd>{{item.hospital}} <p>{{item.time}} &nbsp; 12.00</p></dd>
                        <dd>{{item.department}}</dd>
                    </dl>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import   headers   from"../components/Header.vue";
    import   recordType   from"../components/recordType.vue";
    import {formatDate} from '../assets/js/date.js';

    export default{
        filters: {                    //时间转换
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            }
        },
        data(){
            return {
                type: "",
                name: "",
                patientId: "",
                temId: "",
//                dateVal: "选择时间",
                dateId: "",
                dateChangeVal: "",
                dateVal: new Date(),          //定义显示时间
                visible: false,
                startDate: new Date('2000-01-22'),      //设置开始时间
                endDate: new Date(),   //设置结束时间
                hospitalVal: "全部医院",
                hospitalId: "",
                hospitalChangeVal: "",
                departmentVal: "全部科室",
                departmentId: 0,
                departmentChangeVal: "",
                departmentData: "",
                popupStatus1: false,
                popupStatus2: false,
                popupStatus3: false,
                currentXiaLa: 0,
                closeType: false,
                dataList: [],
                currentPage: 1,
                per_page: 6,
                total_page: 0,
                allLoaded: false, //分页
                topStatus: false, //分页
                url: "",
                scrollMode: "auto", //分页滚动
                hospitals:[
                    {
                        name: "全部医院",
                        departs:["全部科室",  "科室11", "科室12", "科室13", "科室14", "科室21", "科室22", "科室23", "科室24", "科室25"],
                    }, {
                        name: "医院1",
                        departs: ["全部科室", "科室11", "科室12", "科室13", "科室14"]
                    },
                    {
                        name: "医院2",
                        departs: ["全部科室", "科室21", "科室22", "科室23", "科室24", "科室25"]
                    }],
                dateArr: [
                    {
                        flex: 1,
                        values: ['2015', '2016', '2017', '2018', '2019', '2020'],
                        className: "slot1",
                        textAlign: "center"
                    },
                    {
                        flex: 1,
                        values: ['1', '2', '3', '4', '5', '6'],
                        className: 'slot2',
                        textAlign: "center"
                    },
                    {
                        flex: 1,
                        values: ['1', '2', '3', '4', '5', '6', "7", "8", "9"],
                        className: "slot3",
                        textAlign: "center"
                    }
                ],
                hospitalArr: [
                    //医院列表
                    {
                        flex: 1,
                        values: ["全部医院","医院1","医院2"],
                        className: "slot1",
                        textAlign: "center"
                    }
                ],
                departmentArr: [
                    {
                        //科室列表
                        flex: 1,
                        values: ["全部科室",  "科室11", "科室12", "科室13", "科室14", "科室21", "科室22", "科室23", "科室24", "科室25"],
                        className: "slot1",
                        textAlign: "center"
                    },
                    {
                        divider: true,
                        content: "-",
                        className: 'slot2'
                    },
                    {
                        flex: 1,
                        values: ["全部科室",  "科室11", "科室12", "科室13", "科室14", "科室21", "科室22", "科室23", "科室24", "科室25"],
                        className: "slot3",
                        textAlign: "center"
                    }
                ],
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
                showHospital:[]
            }
        },
        methods: {
//            打开选项框
            openPopup(id) {
                if (id == 1) {
                    this.popupStatus1 = true;
                    this.currentXiaLa = id;
                } else if (id == 2) {
                    if (this.hospitalVal == "全部医院") {
                        this.$toast("请先选择医院");
                        this.popupStatus1 = true;
                        this.currentXiaLa = 1;
                    } else if (this.hospitalArr[0].values.length > 0) {
                        this.popupStatus2 = true;
                        this.currentXiaLa = id;
                    }
                } else {
//                    this.popupStatus3 = true;
                    this.currentXiaLa = id;
                    this.$refs["picker"].open();    //设置开始
                }
            },
//            关闭选项框
            closePopup() {
                this.popupStatus3 = false;
                this.popupStatus1 = false;
                this.popupStatus2 = false;
                this.currentXiaLa = 0;
            },
//            确定选择
            sureValue(id) {
                this.popupStatus1 = false;
                this.popupStatus2 = false;
                this.popupStatus3 = false;
                this.currentXiaLa = 0;
                if (id == 1) {
                    var that = this;
                    if (this.hospitalChangeVal) {
                        //获取旧id
                        var id = this.hospitalId;
                        this.hospitalVal = this.hospitalChangeVal[0];
//                        this.hospitalId = this.hospitalChangeVal[0];\
//                        更改科室
                        this.hospitals.forEach(function (item,index) {
//                            console.log(item);
                            if(that.hospitalVal==item.name){
                                that.departmentArr[0].values=item.departs
                                that.departmentArr[2].values=item.departs
                            }
                        })
//                        更改显示的数据
                        this.showHospital=[]
                        if(this.hospitalVal=="全部医院"){
                            this.showHospital=this.Hospital
                        }else{
                            this.Hospital.forEach(function (item,index) {
                                if(item.hospital==that.hospitalVal){
                                    that.showHospital.push(item)
                                }
                            })
                        }

                        //   //判断url中是否有该参数
                        //   if (this.url.indexOf("&e_s[hospital_id]=" + id) == -1) {
                        //     this.dataList = [];
                        this.currentPage = 1;
                        //     this.url = this.url + "&e_s[hospital_id]=" + this.hospitalId;
                        //   } else {
                        //     this.url = this.url.replace("&e_s[hospital_id]=" + id, "");
                        //     this.url = this.url + "&e_s[hospital_id]=" + this.hospitalId;
                        //   }
                        //   this.url = this.url.replace("&page=" + oldPage, "");
                        //   this.url = this.url + "&page=" + this.currentPage;
//                        this.getList();
                    }
                } else if (id == 2) {
                    let that=this
                    var id = this.departmentId;
                    this.departmentVal = this.departmentChangeVal[1];
//                    更改显示的数据
                    this.showHospital=[]
                    if(this.departmentVal=="全部科室"){
                        this.Hospital.forEach(function (item,index) {
                            if(item.hospital==that.hospitalVal){
                                that.showHospital.push(item)
                            }
                        })
                    }else{
                        this.Hospital.forEach(function (item,index) {
                            if(item.hospital==that.hospitalVal&&item.department==that.departmentVal){
                                that.showHospital.push(item)
                            }
                        })
                    }
//                    this.departmentId = this.departmentChangeVal[1].id;
//                    console.log(this.departmentChangeVal[1]);
                    //判断url中是否有该参数
                    // if (this.url.indexOf("&e_s[department]=" + id) == -1) {
                    //   this.dataList = [];
                    this.currentPage = 1;
                    //   this.url = this.url + "&e_s[department]=" + this.departmentId;
                    // } else {
                    //   this.url = this.url.replace("&e_s[department]=" + id, "");
                    //   this.url = this.url + "&e_s[department]=" + this.departmentId;
                    // }
                    // this.url = this.url.replace("&page=" + oldPage, "");
                    // this.url = this.url + "&page=" + this.currentPage;
//                    this.getList();

                } else {

                    console.log(this.dateChangeVal);
                    this.dateVal = this.dateChangeVal[0] + "-" + this.dateChangeVal[1] + "-" + this.dateChangeVal[2]

                    //判断url中是否有该参数
                    // if (this.url.indexOf("&e_s[department]=" + id) == -1) {
                    //   this.dataList = [];
                    this.currentPage = 1;
                    //   this.url = this.url + "&e_s[department]=" + this.departmentId;
                    // } else {
                    //   this.url = this.url.replace("&e_s[department]=" + id, "");
                    //   this.url = this.url + "&e_s[department]=" + this.departmentId;
                    // }
                    // this.url = this.url.replace("&page=" + oldPage, "");
                    // this.url = this.url + "&page=" + this.currentPage;
//                    this.getList();
                }
            },
//            picker的默认函数
            onValuesChange1(picker, values) {
                this.hospitalChangeVal = values;
                this.departmentVal = '全部科室';
                this.departmentId = 0;

            },
            onValuesChange2(picker, values) {
                this.departmentChangeVal = values;
            },
            onValuesChange3(picker, values) {
                this.dateChangeVal = values
            },
//            跳转详情
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
            headers,
            recordType
        },
        created(){
            //从localStorage中读取条件并赋值给查询表单
            let condition = localStorage.getItem('recordType')
            this.type = condition
            if (this.type == 1) {
                this.name = "门诊记录"
            }
            if (this.type == 2) {
                this.name = "入院记录"
            }
            if (this.type == 3) {
                this.name = "出院记录"
            }
            if (this.type == 4) {
                this.name = "手术记录"
            }
            if (this.type == 5) {
                this.name = "护理记录"
            }
            if (this.type == 6) {
                this.name = "检验检查"
            }
            if (this.type == 7) {
                this.name = "影像检查"
            }
            if (this.type == 8) {
                this.name = "医嘱处方"
            }
            this.showHospital=this.Hospital
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>


    .filter-box {
        background: #fff;
        padding: 0.6rem /* 22/40 */ 0;
        position: fixed;
        top: 2.2rem;
        border-bottom: 1px solid #e5e5e5;

    p {
        float: left;
        width: 5.6rem /* 249/40 */;
        font-size: 0.7rem /* 28/40 */;
        color: #666;
        line-height: 0.9rem /* 36/40 */;
        height: 0.9rem;
        text-align: center;
        padding: 0 0.3rem /* 10/40 */;

    >
    img {
        width: 0.5rem /* 20/40 */;
        height: 0.3rem /* 11/40 */;
        vertical-align: middle;
        margin-left: 0.2rem /* 8/40 */;
    }

    }
    .department,
    .hospital {
        border-right: 1px solid #dcdcdc;
    }

    .hospital {

    span {
        width: 4.6rem;
        height: 0.9rem;
        display: inline-block;
        overflow: hidden;
    }

    img {
        margin-top: -0.3rem /* -14/40 */;
    }

    }
    }
    .doctor-list {
        background: #fff;

    li {
        padding: 0.8rem /* 30/40 */;
        border-bottom: 1px solid #e5e5e5;

    .left {
        float: left;
    }

    img {
        width: 2.5rem /* 100/40 */;
        height: 2.5rem /* 100/40 */;
        border-radius: 50%;
        margin-right: 0.6rem /* 22/40 */;
    }

    .name {
        font-size: 0.7rem /* 28/40 */;
        color: #333;
        line-height: 0.7rem /* 28/40 */;
        margin-bottom: 0.3rem /* 14/40 */;

    span {
        font-size: 0.6rem /* 24/40 */;
        color: #666;
    }

    }
    p {
        font-size: 0.6rem /* 24/40 */;
        color: #666;
        line-height: 0.6rem /* 24/40 */;
    }

    .department {
        margin-bottom: 0.3rem /* 13/40 */;
    }

    }
    }
    .mint-popup {
        width: 100%;
    }

    .popup-box {
        width: 100%;

    .head {
        line-height: 3rem /* 120/40 */;
        padding: 0 0.8rem /* 33/40 */;
        border-bottom: 1px solid #e5e5e5;

    .cancel {
        font-size: 0.8rem /* 30/40 */;
        color: #999;
        float: left;
    }

    .sure {
        font-size: 0.8rem /* 30/40 */;
        color: #999;
        float: right;
    }

    .title {
        font-size: 0.9rem /* 36/40 */;
        color: #4cc6d8;
        float: left;
        width: 13.8rem;
        text-align: center;
    }

    }
    .popup-list {
        padding-top: 5.2rem /* 208/40 */;

    li {
        line-height: 1.6rem /* 64/40 */;
        text-align: center;
        font-size: 0.9rem /* 36/40 */;
        color: #333;
        border-bottom: 1px solid #e5e5e5;

    &
    :first-child {
        border-top: 1px solid #e5e5e5;
    }

    }
    }
    }
    .line {
        height: 0.5rem;
        background-color: #eee;
    }

    .data {
        background-color: #fff;

    li {
        padding: 0.5rem 0.75rem;
        font-size: 0.7rem;
        line-height: 1rem;
        border-bottom: 0.025rem solid #e5e5e5;

    dt {
        color: #333;
    }

    dd {
        color: #666;

    p {
        float: right;
        color: #999;
    }

    }
    }
    }
    .contentScollr {
        position: absolute;
        top: 4.7rem;
        bottom: 0;
        width: 100%;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>