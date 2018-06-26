
<!--问卷调查-->
<template>
    <div class="add-question">
        <headers headName="问卷填写"></headers>
        <div class="contentScollr">
            <div class="content-box" v-for="(data,x) in dataList">
                <p class="title-name">
                    {{data.title}}
                </p>
                <ul class="form-list">
                    <li class="clear" v-for="(item,i) in data.data">
                        <div v-if="item.type == 'text'">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <p class="add-content">
                                <input type="text" class="txt" v-model="item.value" />
                            </p>
                        </div>
                        <div v-if="item.type == 'radio'">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <p class="add-content clear">
                                <span v-for="(dt,j) in item.options">
                                    <input type="radio" :id="x+'cat'+i+'radio'+j" v-model="item.value" :value="dt" class="input-radio one_sel hidden" />
                                    <label :for="x+'cat'+i+'radio'+j">
                                        <span class="radio-name">{{dt}}</span>
                                    </label>
                                    <!-- <img class="radio-img" src="../assets/images/b2_icon1.png" v-if="item.value == dt" />
                                    <img class="radio-img" src="../assets/images/b2_icon1_p.png" v-else /> -->
                                </span>
                            </p>
                        </div>
                        <div v-if="item.type == 'checkbox'">
                            <p class="title">
                                {{item.title}}(多选)
                            </p>
                            <p class="add-content clear">
                                <span v-for="dt in item.options">
                                    <input type="checkbox" :id="x+'cat'+i+'check'+j" v-model="item.value" :value="dt" :name="dt" hidden class="input-radio one_sel hidden" />
                                    <label :for="x+'cat'+i+'check'+j">
                                        <span class="radio-name">{{dt}}</span>
                                    </label>
                                </span>
                            </p>
                        </div>
                        <div v-if="item.type == 'textarea'">
                            <p class="title">
                                {{item.title}}
                            </p>
                            <p class="add-content clear">
                                <textarea class="txt-area" maxlength="200" v-model="item.value"></textarea>
                            </p>
                        </div>
                    </li>

                </ul>
            </div>
            <p class="sub-btn" @click="subBtn()">
                提交
            </p>
            <mt-datetime-picker ref="picker1" type="date" :startDate="startDate" :endDate="endDate" year-format="{value}" month-format="{value}" date-format="{value}" @confirm="handleConfirm" v-model="pickerValue">
            </mt-datetime-picker>
        </div>
    </div>
</template>
<script>
import headers from "../components/Header";
export default {
  data() {
    return {
      id: this.$route.params.id,
      status: this.$route.params.status,
      type: this.$route.params.type,
      sex: [],
      dataList: [],
      brithday: "1991-02-30",
      startDate: new Date("1900"),
      endDate: new Date(),
      pickerValue: "",
      blood: 4,
      marry: 1,
      educational: 4,
      occupation: "企业主管",
      userName: "刘丽",
      idNum: "21010199102309203",
      address: "上海市徐汇区桂林路182号5栋1单元16号",
      telNum: "18483928392",
      nation: "汉"
    };
  },
  mounted() {
    this.BaseSet.getToken(this);
    if (this.type == 0) {
      this.getMoudle();
    } else {
      this.getAnswer();
    }
  },
  methods: {
    //修改问卷获取答案
    getAnswer() {
      var that = this;
      var that = this;
      that.$ajax
        .get("/questionnaire/" + that.status)
        .then(function(res) {
          console.log(res.data);
          for (var i = 0; i < res.data.data.length; i++) {
            var dt = res.data.data[i];
            var te = {
              data: [],
              title: dt.title
            };
            for (var j = 0; j < dt.data.length; j++) {
              var item = dt.data[j];
              te.data.push(item);
            }
            that.dataList.push(te);
            console.log(that.dataList);
          }
        })
        .catch(function(err) {});
    },
    //填写问卷获取模板
    getMoudle() {
      var that = this;
      that.$ajax
        .get("/questionnaire/category/" + that.id)
        .then(function(res) {
          console.log(res.data);
          if (res.data.status == 200) {
            for (var i = 0; i < res.data.data.data.length; i++) {
              var dt = res.data.data.data[i];
              var te = {
                data: [],
                title: dt.title
              };
              for (var j = 0; j < dt.data.length; j++) {
                var item = dt.data[j];
                var temp = {
                  id: item.id,
                  type: item.type,
                  title: item.title,
                  options: item.options,
                  category: item.category,
                  value: ""
                };
                if (temp.type == "radio") {
                }
                if (temp.type == "checkbox") {
                  temp.value = [];
                }
                te.data.push(temp);
              }
              that.dataList.push(te);
            }
          }
        })
        .catch(function(err) {
          that.BaseSet.linkLogin(that);
        });
    },
    openDatePicker() {
      this.$refs.picker1.open();
    },
    handleConfirm(res) {
      console.log(res);
      let d = new Date(res);
      this.brithday =
        d.getFullYear() +
        "-" +
        (d.getMonth() + 1 > 9 ? d.getMonth() + 1 : "0" + (d.getMonth() + 1)) +
        "-" +
        (d.getDate() > 9 ? d.getDate() : "0" + d.getDate());
    },
    //提交表单
    subBtn() {
      var values = [];

      var that = this;
      for (var i = 0; i < that.dataList.length; i++) {
        var questions = that.dataList[i];
        for (var j = 0; j < questions.data.length; j++) {
          var question = questions.data[j];
          if (!question.value) {
            that.$toast("信息填写不完整");
            return false;
            break;
          } else {
            values.push(question);
          }
        }
      }
      for (var i = 0; i < values.length; i++) {
          values[i].options= values[i].options==null?"":values[i].options.join();
      }
      if (this.type == 0) {
        that.$ajax
          .post("/questionnaire", {
            _me: "user-api",
            questionnaire_temp_id: that.id,
            data: values
          })
          .then(function(res) {
            if (res.data.status == 200) {
              that.status = res.data.id;
              that.$toast("问卷填写成功");
              that.$router.push({
                name: "BaseQuestion",
                params: { id: that.id, status: that.status }
              });
            }
          })
          .catch(function(err) {
            that.BaseSet.linkLogin(that);
          });
      } else {
        that.$ajax
          .put("/questionnaire/" + that.status, { data: values })
          .then(function(res) {
            if (res.data.status == 200) {
              that.$toast("问卷修改成功");
              that.status = res.data.id;
              that.$router.push({
                name: "BaseQuestion",
                params: { id: that.id, status: that.status }
              });
            }
          })
          .catch(function(err) {
            that.BaseSet.linkLogin(that);
          });
      }
    }
  },
  components: { headers }
};
</script>
<style lang="scss" scoped>
.hidden {
  display: none;
}
.input-radio + label {
  position: relative;

  line-height: 2rem;
}
.input-radio + label::before {
  background: url("../assets/images/b2_icon1_p.png") no-repeat left 0rem;
  content: "";
  background-size: 1rem;
  position: absolute;
  width: 1rem;
  height: 1rem;
  top: 0.25rem;
}
.input-radio:checked + label::before {
  background-image: url("../assets/images/b2_icon1.png");
}
.add-question {
  background: #fff;
  padding-bottom: 0.8rem;
  .contentScollr {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }
  .title-name {
    font-size: 0.8rem;
    color: #444;
    line-height: 2rem;
    padding-left: 0.8rem;
    border-bottom: 1px solid #ebebeb;
  }
  .form-list {
    li {
      padding: 0 0.8rem 0.8rem 0.8rem;
      border-bottom: 1px solid #ebebeb;
      .title {
        line-height: 2rem;
        font-size: 0.7rem;
        color: #333;
      }
      .add-content {
        > span {
          position: relative;
          float: left;
        }
        .txt {
          width: 17.3rem;
          height: 2rem;
          padding: 0 0.4rem;
          font-size: 0.7rem;
          box-sizing: border-box;
          background: #eee;
          border-radius: 0.3rem;
        }
        .txt-area {
          width: 17.3rem;
          height: 6rem;
          padding: 0 0.4rem;
          font-size: 0.7rem;
          box-sizing: border-box;
          background: #eee;
          border-radius: 0.3rem;
          resize: none;
        }
        .address {
          height: 3.8rem;
          resize: none;
          padding: 0.5rem;
          box-sizing: border-box;
        }
      }
      .input-radio,
      .radio-img {
        width: 1rem;
        height: 1rem;
        // position: absolute;
        // right: 1.8rem /* 70/40 */;
        // top: .4rem;
      }
      img {
        vertical-align: middle;
        margin-right: 0.3rem;
        margin-top: -0.3rem; /* -10/40 */
      }
      //   .input-radio {
      //     position: absolute;
      //     z-index: 100;
      //     top: 0.5rem;
      //   }
      .radio-name {
        padding-left: 1.25rem;
        // float: left;
        font-size: 0.7rem;
        color: #666;
        margin-right: 0.8rem;
      }
      .name {
        font-size: 0.7rem;
        color: #333333;
        float: left;
      }
    }
  }
  .sub-btn {
    width: 17.3rem;
    margin: 0 auto;
    margin-top: 0.8rem;
    text-align: center;
    color: #fff;
    background: #4cc6d8;
    border-radius: 0.3rem;
    line-height: 2rem;
    font-size: 0.8rem;
  }
}
</style>
