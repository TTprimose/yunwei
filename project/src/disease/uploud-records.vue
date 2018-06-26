<!-- 192.168.0.128-->
<!--电子病历上传-->
<template>
    <div id="uploud-records">
        <headers headName="电子病历上传"></headers>
        <div class="view">
            <div class="line"></div>
            <ul class="recordsName">
                <li>
                    病历名称
                    <input v-model="objj.diseaseName" type="text" placeholder="请输入病历名称">
                </li>
                <li>
                    检查机构
                    <input v-model="objj['name']" type="text" placeholder="请填写检查机构">
                </li>
                <li @click="departer">
                    科室
                    <p>{{objj['depart']}}<img src="../assets/images/c13_liebiao.png" alt=""></p>
                </li>
                <li @click="reporter">
                    类型
                    <p>{{objj['report']}}<img src="../assets/images/c13_liebiao.png" alt=""></p>
                </li>
                <li>
                    检查时间
                    <mt-button @click.native="open('picker')" size="large" class="dis">{{value | formatDate}}
                    </mt-button>
                    <mt-datetime-picker class="picker_show"
                                        ref="picker"
                                        type="date"
                                        v-model="value"
                                        :startDate="startDate"
                                        :endDate="endDate"
                    ></mt-datetime-picker>
                    <p>{{value | formatDate}}<img src="../assets/images/c13_liebiao.png" alt=""></p>
                </li>
                <li class="upLoud">
                    <div>
                        <p @click="fileClick">
                            添加图片
                        </p>
                        <input  @change="fileChange($event)" type="file" id="upload_file" multiple
                               style="display: none"/>
                    </div>
                    <ul class="upload_warp_img clear">
                        <li class="upload_warp_img_div" v-for="(item,index) of imgList"  v-show="imgList.length!=0">
                            <div class="upload_warp_img_div_top">
                                <img src="../assets/images/c37_guanbi.png" class="upload_warp_img_div_del"
                                     @click="fileDel(index)">
                            </div>
                            <img class="Img" :src="item.file.src">
                        </li>
                        <li>
                            <img @click="fileClick" class="Img" src="../assets/images/c37_tianjia.png" alt="">
                        </li>
                    </ul>
                </li>
            </ul>
            <mt-button type="primary" class="bottom">上传
            </mt-button>

            <!--<img class="head-img" :src="headImg" @click="uploadImg" />-->
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import   headers   from"../components/Header.vue";
    import {formatDate} from '../assets/js/date.js';
    import axios from  'axios';




    export default{
        filters: {                    //时间转换
            formatDate(time) {
                var date = new Date(time);
                return formatDate(date, 'yyyy-MM-dd');
            }
        },
        data(){
            return {
                objj: {
                    diseaseName:"",
                    Name:"",
                    depart: "请选择科室",
                    report: "请选择报告类型"
                },
                value: new Date(),          //定义显示时间
                visible: false,
                startDate: new Date('2000-01-22'),      //设置开始时间
                endDate: new Date(),   //设置结束时间
                imgList: [],
                size: 0,
                imgLimit: 5, //限制图片数量
                headImg:"../assets/images/c13_liebiao.png"

            }
        },
        created () {
            // 将数据放在当前组件的数据内
            if(localStorage.hasOwnProperty("objj")){
                this.objj=JSON.parse(localStorage.getItem('objj'))
            }
            if(localStorage.hasOwnProperty("imgList")){
                this.imgList=JSON.parse(localStorage.getItem('imgList'))
            }


        },
        components: {
            headers
        },
        methods: {
            departer(){
                this.$router.push({
                    name: 'department'
                })
            },
            reporter(){
                this.$router.push({
                    name: 'report'
                })
            },
            open(picker) {
                this.$refs[picker].open();    //设置开始
            },
            fileClick() {
                console.log(this.imgLimit);
                if(this.imgList.length<5){
                    document.getElementById('upload_file').click()
                }else{
                    this.$toast("最多上传"+this.imgList.length+"张图片")
                }

            },
            fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = ''
            },
            fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            //文件夹处理
            folders(files) {
                let _this = this;
                //判断是否为原生file
                if (files.kind) {
                    files = files.webkitGetAsEntry();
                }
                files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                })
            },
            foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                    _this.fileAdd(file)
                })
            },
            fileAdd(file) {
                if (this.imgLimit !== undefined) this.imgLimit--;
                if (this.imgLimit !== undefined && this.imgLimit < 0) return;
                //总大小
                this.size = this.size + file.size;
                //判断是否为图片文件
                if (file.type.indexOf('image') == -1) {
                    file.src = 'wenjian.png';
                    this.imgList.push({
                        file
                    });
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload = function () {
                            let width = image.width;
                            let height = image.height;
                            file.width = width;
                            file.height = height;
                            _this.imgList.push({
                                file
                            });
//                            console.log(_this.imgList);
                        };
                        image.src = file.src;
                    }
                }

            },
            fileDel(index) {
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
                if (this.imgLimit !== undefined) this.imgLimit = this.imgList.length;
            },
            bytesToSize(bytes) {
                if (bytes === 0) return '0 B';
                let k = 1000, // or 1024
                        sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                        i = Math.floor(Math.log(bytes) / Math.log(k));
                return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
            },
            dragenter(el) {
                el.stopPropagation();
                el.preventDefault();
            },
            dragover(el) {
                el.stopPropagation();
                el.preventDefault();
            },
            drop(el) {
                el.stopPropagation();
                el.preventDefault();
                this.fileList(el.dataTransfer);
            }
        },
        beforeRouteLeave(to, from, next){
            //打开详情页（或者下一个任意界面）之前，把筛选条件保存到localStorage，如果离开列表页并且打开的不是详情页则清除，也可以选择不清除
            if (to.name == 'department' || to.name == 'report') {
                let asd=JSON.stringify(this.objj)
                let img=JSON.stringify(this.imgList)
                localStorage.setItem('objj', asd)
                localStorage.setItem('imgList', img)
//                console.log(condition);
            } else {
                localStorage.removeItem('objj')
                localStorage.removeItem('imgList')
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
    #uploud-records {
        position: fixed;
        background: #eee;
        height: 100%;
        width: 100%;

    .line {
        height: 0.5rem;
        background-color: #eee;
    }

    .recordsName {
        background-color: #fff;

    >
    li {
        height: 2.25rem;
        padding: 0 0.75rem;
        line-height: 2.25rem;
        font-size: 0.7rem;
        position: relative;
        color: #333333;
        border-bottom: 0.025rem solid #e5e5e5;

    .dis {
        position: absolute;
        height: 2.25rem;
        right: 0;
        top: 0;
        opacity: 0;
        z-index: 100;
    }

    input {
        float: right;
        border: none;
        outline: none;
        text-align: right;
        height: 2.25rem;
        line-height: 4rem;
        font-size: 0.7rem;
        color: #999;
    }

    >
    p {
        float: right;
        text-align: right;
        color: #999;

    img {
        margin-left: 0.5rem;
        height: 0.7rem;
        margin-top: 0.75rem;
    }

    }
    }
    .upLoud {
        background-color: #fff;
        padding: 1.25rem 0.75rem;
        border: none;

    p {
        color: #bbb;
        font-size: 0.7rem;
        text-align: left;
    }

    li {
        float: left;
        margin-right: 0.25rem;
        margin-top: 0.4rem;
        position: relative;

    .Img {
        width: 4rem;
        height: 4rem;
        background-size: contain;
    }

    .upload_warp_img_div_top {

    img {
        height: 1rem;
        width: 1rem;
        position: absolute;
        right: 0.25rem;
        top: 0.25rem
    }

    }

    }
    }
    }
    .bottom {
        width: 17rem;
        height: 2rem;
        margin-left: 0.75rem;
        margin-top: 1.5rem;
        background-color: #4dc8d7;
    }

    }
    .view {
        position: absolute;
        top: 2.2rem;
        bottom: 0;
        width: 100%;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
    }

</style>