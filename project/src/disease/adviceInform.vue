<!--基本信息表-->
<template>
    <div class="inform">
        <h5>个人资料</h5>
        <ul class="user">
            <li><span>姓名</span>：阿拉丁<span class="type">（男，42岁）</span></li>
            <li><span>居住地</span>：北京市大兴区西红门镇通化路2号</li>
            <li><span>联系电话</span>：152585655522</li>
        </ul>
        <div class="line"></div>
        <table frame="all" rules="all" width="100%" height="5rem" align="center" cellspacing="1" cellpsdding="1"
               bordercolor="#e5e5e5">
            <tr>
                <th class="tab1">日期</th>
                <th class="tab2">医生签字</th>
                <th class="tab3">医生签字</th>
                <th class="tab4">长期医嘱</th>
                <th class="tab5">停止</th>
            </tr>
            <tr v-for="(item,index) in list" :class="{active: index%2==0}">
                <td>05-09 <br>0.17</td>
                <td>打哈好的</td>
                <td>化解简简</td>
                <td>大大大大</td>
                <td>05-09 <br>0.17</td>
            </tr>
        </table>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                list: [1, 2, 3, 4],
                active: "blue"
            }
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    .inform {

    h5 {
        height: 2rem;
        padding-left: 0.75rem;
        line-height: 2rem;
        font-size: 0.7rem;
        color: #4dc7d9;
        border-bottom: 0.025rem solid #d5d5d5;
    }

    ul {
        background-color: #fff;
    }

    .user {
        height: 5rem;
        box-sizing: border-box;
        padding-left: 0.75rem;
        padding-top: 0.25rem;
        font-size: 0.7rem;
        color: #333;
        line-height: 1.5rem;

    span {
        display: inline-block;
        width: 3rem;
        height: auto
    }

    .type {
        color: #999;
        width: auto
    }

    }
    .line{
        height:0.5rem;
        background-color: #eee;
    }

    table {
        border-top-width: 0.025rem;
        border-bottom-width: 0.025rem;
        border-left-width: 0;
        border-right-width: 0;
        vertical-align: middle;
        width: 100%;
     .tab1,.tab2, .tab3 {
            width: 3rem;
        }
    .tab4{
        width:6rem
    }
    tr {
        height: 2.25rem;
        line-height: 0.9rem;
        text-align: center;
    }

    .active {
        background-color: #f9f6f7;
    }

    th {
        color: #333;
        font-size: 0.7rem;
        font-weight: 400;
        background-color: #fff;
    }

    td {
        color: #666;
        font-size: 0.6rem;

        box-sizing: border-box;
    }

    }
    }

</style>