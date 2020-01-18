<template>
<!--新建轮播-->
<div id="createCar">
    <!--头部面包屑-->
    <div class="header">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">广东海洋大学</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">广告管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>轮播管理</el-breadcrumb-item>
            <el-breadcrumb-item>轮播编辑</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <!--卡片视图区-->
    <!--卡片视图区-->
    <el-card>

        <el-row>
            <el-col :span="23">
                <div class="back">
                    <el-button @click="carousel">← 返回</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="conform">
        <el-row>    
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="广告名称:">
            </el-form-item>
            </el-form>
            </el-col>    
            <el-col :span="12">
            <el-form ref="form" :model="form" label-width="100px" >
                <el-input v-model="form.name" placeholder="给广告位起个名字" ></el-input>
            </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="权重设置:">
            </el-form-item>
            </el-form>
            </el-col>
            <el-col :span="5">
            <el-input-number v-model="num" 
            controls-position="right" 
            @change="handleChange" 
            :min="1" :max="10"></el-input-number>
            </el-col>
            <el-col :span="1" style="float:left">
            <el-form ref="form" :model="form">
            <el-form-item label="%">
            </el-form-item>
            </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="关联文章:">
            </el-form-item>
            </el-form>
            </el-col>
            <el-col :span="12">
            <el-input v-model="form.about" placeholder="请填写关联文章的编码，如：12345"></el-input>
        
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="关联项目:">
            </el-form-item>
            </el-form>
            </el-col>

            <el-col  :span="2">
            <el-checkbox
            :indeterminate="isIndeterminate"
            v-model="checkAll" 
            @change="handleCheckAllChange">全选</el-checkbox>
            </el-col>
            <el-col  :span="8">
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="投放时间:">
            </el-form-item>
            </el-form>
            </el-col>
            <el-col  :span="10">
                <el-date-picker
                v-model="value1"
                type="datetimerange"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['12:00:00']">
            </el-date-picker>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="启用状态:">
            </el-form-item>
            </el-form>
            </el-col>
            <el-checkbox-group v-model="checkList">
            <el-checkbox label="启用" ></el-checkbox>
            <el-checkbox label="禁用" ></el-checkbox>>
            </el-checkbox-group>
        </el-row>
        </div>
        <!--我把删除那个button_group和上面的分开了-->
    <div class="choice">
         <div style="margin-right:20px; margin-bottom:20px;">
             <el-row>
                <el-col span="4">
                <el-button class="btn_delete">删除</el-button>
                </el-col>
                <el-col span ="16" class="back">
                <el-button class= "btn_cancel">取消</el-button>
                <el-button class = "btn_submit">提交</el-button>
                </el-col>
             </el-row>
         </div>
    </div>
    </el-card>
</div>

</template>

<style lang="scss" scoped>

.conform{
    padding: 50px 0;
}

.back{
    //float: right;
    display: flex;
    justify-content: flex-end;
}
.forms{
    display: flex;
    justify-content: flex-end;
}
.btn_delete{
    border: 1px solid red;
    background-color: #fff;
    color: red;
    &:hover{
        background-color: red;
        color: #fff;
    }
}

.btn_submit{
    color: #fff;
    background-color: #fdd22a;
}
/deep/ .el-checkbox__label{
    line-height: 40px ;
    border-color: #fdd22a;
    color: #000;
    &:hover{
    border-color: #fdd22a;
    
    }

}
/deep/ .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #fdd22a;
    border-color: #fdd22a;
    color: #000;
}
/deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #fdd22a;
}
/deep/ .el-checkbox__input.is-checked+.el-checkbox__label {
    color: #000;
}

.radious{
    border-radius: 25px;
}
.choice{
    padding:20px 50px 20px 200px;
}

</style>
<script>
const cityOptions = ["恩特打印", "恩特预约", "恩特维修"];
  export default {
    data() {
      return {
        num: 1,
        checkAll: false,
        checkedCities: [],
        checkList: [],
        cities: cityOptions,
        isIndeterminate: false,
        form:{
            name:'',
            about:'',
            value1:''
        }
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
      onSubmit(){
          console.log('submit!')
      },
      submitForm(formName) {
          this.$refs[formName].validate((valid) => {
              if (valid) {
                  alert('submit!');
          } else {
              console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
          this.$refs[formName].resetFields();
      },
     handleCheckAllChange(val) {
         this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
          let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
    carousel(){
         this.$router.replace('/carousel')

    }
      }
  };

</script>
