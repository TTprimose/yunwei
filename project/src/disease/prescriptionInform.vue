<template>
    <div class="infom">
        <p class="data">2017-5-20</p>
        <ul>
            <li>姓名：说到底 &nbsp;&nbsp;&nbsp;
                性别：男 &nbsp;&nbsp;&nbsp;
                年龄：42岁
            </li>
            <li>
                大大大大大大大大大
                <p>都是对的所多所多所</p>
            </li>
            <li>
                大大大大大大大大大
                <p>都是对的所多所多所</p>
            </li>
            <li>
                大大大大大大大大大
                <p>都是对的所多所多所</p>
            </li>
            <li>医生签名：李晓峰</li>
        </ul>

    </div>
</template>
<script>


    export default{
        data(){
            return{
            }
        },
//        mounted() {
//            this.BaseSet.getToken(this);
//            this.getData();
//        }
    }
</script>
<style lang="scss" scoped>
    .infom{
        height:100%;
        background-color: #fff;
    }
    .data{
        height: 2rem;
        line-height: 2rem;
        font-size: 0.7rem;
        color: #333;
        border-bottom: 0.025rem solid #e5e5e5;
        padding-left: 0.75rem;
    }
    li{
        font-size: 0.7rem;
        line-height: 1rem;
        padding: 0.3rem  0.75rem;
        margin-top: 0.3rem;
        color:#333;
        p{
            text-align: right;
            color: #666;
        }
    }
</style>