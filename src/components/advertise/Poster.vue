<template>
<!-- 文章管理 -->
    <div id="poster">
        <!-- 头部面包屑 -->
        <div class="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">广东海洋大学</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">广告管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>海报管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 卡片视图区 -->
        <el-card class="top-card">
            <el-row>
                <el-col :span="8">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="海报名称">
                            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="海报编码">
                            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <div class="btns">
                        <el-button >搜索</el-button>
                        <el-button >取消</el-button>
                        <el-button @click="createPos">+ 新建</el-button>
                    </div> 
                </el-col>
            </el-row>

            
        </el-card>

        <!-- 海报图片区 -->
        <el-row>
            <el-col :span="6" v-for="(o, index) in 6" :key="o" :offset="index > 0 ? 1 : 0">
                <el-card :body-style="{ padding: '0px' }" class="poster-card" shadow="always">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;">
                    <span>好吃的汉堡</span>
                    <div class="bottom clearfix">
                    <time class="time">{{ currentDate }}</time>
                    <el-button type="text" class="button">操作按钮</el-button>
                    </div>
                </div>
                </el-card>
            </el-col>
        </el-row>

        <div style="margin-right:20px; margin-bottom:20px;">
            <div class="block">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
            </div>
        </div>
        
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            formInline: {
                user: '', 
            },
            currentDate: new Date(),
            
          
        }
    },
     methods: {
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterProject(value, row) {
        return row.project === value;
      },
      filterStatus(value, row) {
        return row.status === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      createPos(){
           this.$router.replace('/createPos')

      }
    }
  
}
</script>

<style lang="scss" scoped>
.btns{
    display: flex;
    justify-content: flex-end;
}
.block{
  width: 500px;
  right: 40px;
  position: absolute;
  
}
.top-card{
    height: 80px !important;
}

.poster-card{
    height: 245px !important;
    width: 266px !important;
}
 .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 266px;
    height: 160px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }

</style>