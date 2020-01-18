<template>
<!--新建文章-->
<div id="createPos">
    <!--头部面包屑-->
    <!--顶层盒子-->

    <div class="header">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">广东海洋大学</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">广告管理</a></el-breadcrumb-item>
            <el-breadcrumb-item>海报管理</el-breadcrumb-item>
            <el-breadcrumb-item>海报编辑</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
        
  <!--卡片视图区-->
    <el-card>

        <el-row>
            <el-col :span="23">
                <div class="back">
                    <el-button @click="poster">← 返回</el-button>
                </div>
            </el-col>
        </el-row>
        <div class="conform">
        <el-row>    
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="海报名称:">
            </el-form-item>
            </el-form>
            </el-col>    
            <el-col :span="12">
            <el-form ref="form" :model="form" label-width="100px" >
                <el-input v-model="form.names" placeholder="给海报起个标题" ></el-input>
            </el-form>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="7" class="back">
            <el-form ref="form" :model="form">
            <el-form-item label="上传海报:">
            </el-form-item>
            </el-form>
            </el-col>
            <el-col :span="12">
            <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <div class="icon-plus">
            <i class="el-icon-plus"></i>
            </div>
            <!--

            -->
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            </el-col>
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

.choice{
    padding:210px 50px 20px 200px;
}

/deep/ .el-upload--picture-card{
    width: 50px;
    height: 50px;
}

.icon-plus{
    width: 50px;
    height: 50px;
    padding: 10px;
}
/deep/ [class*=" el-icon-"], [class^=el-icon-]{
    display: flex;
}
</style>
<script>
const cityOptions = ["恩特打印", "恩特预约", "恩特维修"];
  export default {
    data() {
      return {
        form:{
            names:'',
            dialogImageUrl: '',
            dialogVisible: false
        }
      };
    },
     methods: {
      onSubmit() {
        console.log('submit!');
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      poster(){
          this.$router.replace('/poster')
      }
    }
  };

</script>