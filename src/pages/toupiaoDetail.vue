<template>
    <div class="toupiao">
        <Header :back='true'>
            <p>发起投票</p>
        </Header>
        <div class="center">
            <el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="标题" placeholder="输入标题">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
   <el-form-item label="描述">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
    <div class="xuanxiang">
        <div>选项一:沿着胡字走一圈</div> 
       <div> 选项二:蠢字直线行驶</div>
    </div>
    <el-input v-model="domain.value" label="选项"></el-input>
  <el-input
  type="text"
  placeholder="请输入选项内容,最长输入20个字"
  v-model="text"
  maxlength="20"
  show-word-limit
>
</el-input> <button class="tinajia">+</button>
<div>请选择单选多选 <select name="" id="">
    <option value="">单选</option>
    <option value="">多选</option>
</select></div> 
<div>是否匿名<select name="" id="">
    <option value="">是</option>
    <option value="">否</option>
</select></div> 

 <el-form-item label="截止日期">
    <el-col :span="11">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 200px;"></el-date-picker>
    </el-col>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">发布</el-button>
  </el-form-item>
</el-form>

        </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
          domain: {
            value: ''
          } ,
          email: '',
        text: '',
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      }
    }

  }
</script>
<style scoped>
.toupiao{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.center{
    width: 90%;
    margin-top: 10px;
}
p{
    margin-left: -150px;
}
.el-input__inner{
    margin-left: -100px;
}
.xuanxiang{
    width: 375px;
    height: 80px;
}
.tianjia{
    display: inline-block
}
</style>

