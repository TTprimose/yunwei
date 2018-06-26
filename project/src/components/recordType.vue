<template>
    <div>
        <img @click="opact=true" class="fen" src="../assets/images/fenlei.png" alt="">
        <div class="opactity"  v-if="opact">
            <div @click="opact=flase" >
            </div>
            <dl class="classify">
                <dt>分类</dt>
                <dd @click="rout(1)">门诊记录</dd>
                <dd @click="rout(2)">入院记录</dd>
                <dd @click="rout(3)">出院记录</dd>
                <dd @click="rout(4)">手术记录</dd>
                <dd @click="rout(5)">护理记录</dd>
                <dd @click="rout(6)">检验检查</dd>
                <dd @click="rout(7)">影像检查</dd>
                <dd @click="rout(8)">医嘱处方</dd>
            </dl>
        </div>
    </div>
</template>
<script>

    export default{
        data(){
            return{
                type:0,
                opact:false, //是否显示隐藏列表
            }
        },
        methods:{
            rout(e){
                this.$router.push({
                    name:"outpatient"
                })
                localStorage.setItem('recordType', e)
                this.$router.go(0)
            }
        }
    }
</script>
<style lang="scss" scoped>
    .fen{
        position: fixed;
        right: 0.75rem;
        top:0.75rem;
        height:0.75rem;
        width:0.9rem;
        z-index: 1000;
    }
    .opactity{
        position: fixed;
        top:0;
        bottom: 0;
        width:100%;
        z-index:1000;
        overflow: auto;
    div{
        width:50%;
        height:100%;
        float: left;
        background-color: rgba(0,0,0,0.1);
    }
    .classify{
        height:100%;
        width:50%;
        position: absolute;
        right: 0;
        line-height: 2.25rem;
        background-color: #fff;
        font-size:0.7rem;
    dt{
        color: #333;
        padding-left: 0.75rem;
        padding-top: 0.25rem;
    }
    dd{
        padding-left: 2rem;
        color: #666;
        border-top: 0.025rem solid #e5e5e5;
    }
    }
    }
</style>