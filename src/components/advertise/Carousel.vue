<template>
<!-- 轮播管理 -->
    <div id="carousel">
        <!-- 头部面包屑 -->
        <div class="header">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">广东海洋大学</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">广告管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>轮播管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <!-- 卡片视图区 -->
        <el-card>
            <el-row>
                <el-col :span="8">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="轮播名称">
                            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="轮播编码">
                            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="8">
                    <div class="btns">
                        <el-button >搜索</el-button>
                        <el-button >取消</el-button>
                        <el-button @click="createCar" >+ 新建</el-button>
                    </div> 
                </el-col>
            </el-row>
            
            <div>
              <el-button @click="clearFilter">清除所有过滤器</el-button>
                <el-table
                ref="filterTable"
                :data="tableData"
                style="width: 100%"
                max-height="606"
                :default-sort = "{prop: 'openTime', order: 'descending'}"
                >
                <el-table-column
                  fixed
                  prop="id"
                  label="序号"
                  align="center"
                  width="50">
                </el-table-column>
                <el-table-column
                  prop="priority"
                  label="权重"
                  align="center"
                  width="50">
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="名称"
                  align="center"
                  width="100">
                </el-table-column>
                <el-table-column
                  prop="id"
                  label="编码"
                  align="center"
                  width="50"
                  >
                </el-table-column>
                <el-table-column
                  prop="linkman"
                  label="关联文章"
                  align="center"
                  width="80">
                </el-table-column>
                <el-table-column
                  prop="project"
                  label="项目"
                  align="center"
                  width="90"
                  :filters="[{ text: '打印', value: '打印' }, { text: '预约', value: '预约' },{ text: '维修', value: '维修' },{ text: '代拿', value: '代拿' }]"
                  :filter-method="filterProject"
                  filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag disable-transitions>{{scope.row.project}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="recommended"
                  label="展示量"
                  align="center"
                  width="80">
                </el-table-column>
                
                <el-table-column
                  prop="status"
                  label="状态"
                  align="center"
                  width="80"
                  :filters="[{ text: '启用', value: '启用' }, { text: '禁用', value: '禁用' }]"
                  :filter-method="filterStatus"
                  filter-placement="bottom">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.status === '启用' ? 'success' : 'info'"
                      disable-transitions>{{scope.row.status}}</el-tag>
                  </template>
                </el-table-column>

                <el-table-column
                  prop="openTime"
                  label="投放时长"
                  align="center"
                  sortable
                  width="200">
                </el-table-column>
                
                <el-table-column
                  fixed="right"
                  label="操作"
                  align="center"
                  width="100">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      type="text"
                      size="small">
                      启用
                    </el-button>
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, tableData)"
                      type="text"
                      size="small">
                      编辑
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
            
            <div style="margin-right:20px;">
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
            
        </el-card>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
          formInline: {
                user: '', 
            },
          tableData: [{
            id:'1',
            linkman: "邓悦",
            priority:"10",
            name:"海花A504",
            recommended:"是",
            permit:'是',
            openTime:'2019-6-10-2019-12-24',
            visits:'111',
            status:'启用',
            project:'打印'

          },{id:'2',
            linkman: "悦",
            priority:"23332",
            name:"海花A505",
            recommended:"是",
            permit:'是',
            openTime:'2019-10-10',
            visits:'11',
            status:'禁用',
            project:'维修'
          },
          {id:'3',
            linkman: "悦",
            priority:"222",
            name:"海花A505",
            recommended:"是",
            permit:'是',
            openTime:'2019-2-10',
            visits:'141',
            status:'禁用',
            project:'预约'
          },
          {id:'4',
            linkman: "悦",
            priority:"220",
            name:"海花A505",
            recommended:"是",
            permit:'是',
            openTime:'2019-12-10',
            visits:'11422',
            status:'禁用',
            project:'预约'
          },
          ] 
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
      createCar(){
         this.$router.replace('/createCar')

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
  margin-top:40px;
}

</style>