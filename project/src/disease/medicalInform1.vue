<template>
    <div class="urine">
        <div class="fix">
            <ul class="head">
                <li>常规检查 <span class="num">12</span></li>
                <li>血常规 </li>
                <li>血常规 </li>
                <li>血常规</li>
                <li @click="key=!key" class="laxia"><img src="../assets/images/c12_xiala.png" alt=""></li>
            </ul>
            <ul class="allType" v-if="key">
                <li>常规检查  <span  class="num">12</span></li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
                <li>常规检查</li>
            </ul>
        </div>
        <ul class="text">
            <li>
                <div class="line"></div>
                <p>常规检查</p>
                <table frame="all" rules="all" width="100%" height="5rem"
                       align="center" cellspacing="1" cellpsdding="1"
                       bordercolor="#e5e5e5">
                    <tr>
                        <th>项目</th>
                        <th>检查值</th>
                        <th>单位</th>
                        <th>参考范围</th>
                        <th>趋势图</th>
                    </tr>
                    <tr v-for="(item,index) in list" :class="{active: index%2==0}">
                        <td>升高</td>
                        <td>多岁的</td>
                        <td>化解简简</td>
                        <td>大大大大</td>
                        <td>1</td>
                    </tr>
                </table>
            </li>
        </ul>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                list:[1,1,1,1,2,2,3],
                key:false
            }
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    .fix{
        background-color: #fff;
        position: fixed;
        top:4.225rem;
        width:100%;
    }
    .urine{
        height:100%;
        background-color: #fff;
    .text{
        position: absolute;
        top:6.225rem;
        bottom: 0;
        left:0;
        right: 0;
        flex: 1;
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
        background-color: #fff;
    li{
    .line{
        height:0.5rem;
        background-color: #eeeeee;
    }
    p{
        height:2rem;
        color: #4dc7d9;
        font-size: 0.8rem;
        line-height: 2rem;
        padding-left: 0.75rem;
    }
    }

    }
        .head{
            height:2rem;
            box-sizing: border-box;
            position: relative;
            font-size: 0.7rem;
            color: #333;
            line-height: 1.25rem;
            text-align: center;
            padding: 0.4rem 0.75rem;
            li{
                height:1.25rem;
                padding: 0 0.2rem;
                border-radius: 0.2rem;
                background-color:#eeeeee ;
                float: left;
                margin-right: 0.4rem;
            }
            .laxia{
                position: absolute;
                right: 0;
                top:0.9rem;
                height:0.2rem;
                width:0.6rem;
                background-color: transparent;
            }
        }
        .allType{
            box-sizing: border-box;
            position: absolute;
            font-size: 0.7rem;
            color: #333;
            line-height: 1.25rem;
            text-align: center;
            padding: 0.4rem 0.75rem;
            background-color: #fff;
            border-top: 0.025rem solid #e5e5e5;
            border-bottom: 0.025rem solid #e5e5e5;
            li{
                height:1.25rem;
                padding: 0 0.2rem;
                border-radius: 0.2rem;
                background-color:#eeeeee ;
                float: left;
                margin-right: 0.4rem;
                margin-bottom: 0.8rem;
            }

        }

    .num{
        display: inline-block;
        height:0.8rem;
        width:0.8rem;
        border-radius: 50%;
        background-color:#ef784d ;
        color: #fff;
        font-size: 0.45rem;
        line-height: 0.8rem;
        position: relative;
        top:-0.1rem;
    }

    }

    table {
        border-top-width: 0.025rem;
        border-bottom-width: 0.025rem;
        border-left-width: 0;
        border-right-width: 0;
        vertical-align: middle;
        width: 100%;

    tr {
        height: 2.25rem;
        line-height: 0.9rem;
        text-align: center;
    }

    .active {
        background-color: #f9f6f7;
    }

    th {
        width:20%;
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

</style>