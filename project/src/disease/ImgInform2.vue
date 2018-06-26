<!--检查图像详情2-->
<template>
    <div class="inform">
        <h5>2017-5-20</h5>
        <ul class="user">
            <li><span>姓名</span>：阿拉丁<span class="type">（男，42岁）</span></li>
            <li><span>临床诊断</span>：心功能不全</li>
            <li><span>检查时间</span>：2017年5月20号</li>
        </ul>
        <div class="line"></div>

        <div class="img">
            <span>检查图</span>
            <!--<img src="" alt="">-->
            <div>

            </div>
        </div>
        <div class="text">
            <p>
                <span>检查所见：</span>
                对方身份的神色放松放松放松对方身份的神色放松放松放松对方身份的神色放松放松放松
            </p>
            <p>
                <span>印象：</span>
                放大师傅师傅师傅师傅师傅师傅师傅师傅告诉告诉范德萨
            </p>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {

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
        height:100%;
        background-color:#fff;
    h5 {
        height: 2rem;
        padding-left: 0.75rem;
        line-height: 2rem;
        font-size: 0.7rem;
        color: #999;
        background-color: #fff;
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
    .line {
        height: 0.5rem;
        background-color: #eee;
    }
    .img{
        padding:0.75rem;
        color: #333;
        font-size: 0.8rem;
    img{
        width:100%;;
        height:auto;
        margin-top: 0.8rem;
        border-radius: 0.2rem;
        background-color: black;
    }
    div{
        width:100%;;
        height:8rem;
        margin-top: 0.7rem;
        border-radius: 0.2rem;
        background-color: black;
    }
    }
    .text{
        padding:0.75rem;
        color: #666;
        line-height: 1.25rem;
        font-size: 0.7rem;
    p{
        margin-bottom: 0.8rem;
    span{
        color: #333;

    }
    }

    }
    }
</style>