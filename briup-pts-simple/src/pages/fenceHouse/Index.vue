<!--
 * @Description: 栏舍管理页面
 * @Author: Ronda
 * @Date: 2023-08-14 17:20:03
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 10:09:48
-->
<!--
 * @Description: 栏舍管理页面
 * @Author: Ronda
 * @Date: 2023-08-14 17:20:03
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 10:09:48
-->
<template>
  <div>
    <el-row>
      <el-col :span="tablecol">
        <!-- 操作行 -->
        <div class="options-div">
          <el-button type="primary" @click="toAdd">添加</el-button>
          <el-button type="danger" @click="toBatchDelete">批量删除</el-button>
          <el-input style="width: 150px;" placeholder="请输入栏舍名称" v-model="searchParams.fhName" clearable>
          </el-input>
          <el-button type="text" @click="toSearch">搜索</el-button>
        </div>
        <!-- 表格 -->
        <div>
          <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>

            <el-table-column label="序号" type="index" width="48">
            </el-table-column>

            <el-table-column prop="fhId" label="编号" width="300">
            </el-table-column>

            <el-table-column prop="fhName" label="名称" width="100">
            </el-table-column>

            <el-table-column prop="fhTime" label="创建时间" width="250">
            </el-table-column>

            <el-table-column prop="fhDesc" label="描述">
            </el-table-column>

            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="handleDelete(scope.row)" type="text" size="small">移除</el-button>
                <el-button type="text" size="small" @click="handleEdit(scope.row)">修改</el-button>
                <el-button type="text" size="small" @click="handleDetail(scope.row)">详情</el-button>
              </template>
            </el-table-column>

          </el-table>
        </div>
        <!-- 分页 -->
        <div class="page-div">
          <el-pagination background :current-page.sync="pageParams.pageNum" :page-sizes="[3, 5, 10, 20]"
            :page-size.sync="pageParams.pageSize" layout="total, prev, pager, next, sizes" :total="total">
          </el-pagination>
        </div>
      </el-col>
      <!-- 添加弹窗 -->
      <el-drawer title="添加栏舍信息" :visible.sync="drawer" :direction="direction" :before-close="handleClose">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm"
          style="padding-top: 10px;">
          <el-form-item label="名称" prop="fhName">
            <el-input v-model="ruleForm.fhName" style="width: 98%;"></el-input>
          </el-form-item>
          <el-form-item label="检疫时间" prop="fhTime">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期"
              v-model="ruleForm.fhTime" style="width: 50%;"></el-date-picker>
          </el-form-item>
          <el-form-item label="描述" prop="fhDesc">
            <el-input style="width: 98%;" type="textarea" :rows="10" placeholder="请输入内容" v-model="ruleForm.fhDesc">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="toCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>

      <!-- 卡片 -->
      <el-col :span="card">
        <div class="card-div">
          <el-card class="box-card" style="width: 100%;">
            <div slot="header" class="clearfix">
              <span>【{{ hurdlesName }}】栏舍详情</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="cardgo()">隐藏</el-button>
            </div>
            <div style="width: 100%;">栏舍描述：{{ hurdlesDesc }}</div>
            <div>
              栏圈信息：
              <el-table :data="hurdles" style="width: 100%">
                <el-table-column prop="hName" label="栏圈名称" width="150">
                </el-table-column>
                <el-table-column prop="hMax" label="容量" width="100">
                </el-table-column>
                <el-table-column prop="hDesc" label="栏圈描述" height="150">
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { findFence, saveOrUpdate, deleteById, batchDelete, findHurdles } from '@/api/fenceHouse'

export default {
  data() {
    return {
      tablecol: 24,
      card: 0,
      drawer: false,
      direction: 'rtl',
      total: 0,
      tableData: [],
      hurdles: [],
      hurdlesDesc: '',
      hurdlesName: '',
      multipleSelection: [],
      searchParams: {
        // 栏舍名称
        fhName: '',
      },
      // 分页参数
      pageParams: {
        pageNum: 1,
        pageSize: 10
      },
      ruleForm: {
        //结果
        "fhName": "",
        // 创建时间
        "fhTime": "",
        "fhDesc": ""
      },
      rules: {
        fhName: [
          { required: true, message: '请输入栏舍名称', trigger: 'blur' },
        ],
        fhTime: [
          { required: true, message: '请选择创建时间', trigger: 'change' }
        ],
      }
    };
  },
  computed: {},
  watch: {
    pageParams: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
  methods: {
    cardgo() {
      this.card = 0;
      this.tablecol = 24
    },
    // 获取栏圈数据

    async handleDetail(row) {
      this.card = 7;
      this.tablecol = 17;
      let res = await findHurdles(row.fhId);
      console.log(res);
      this.hurdles = res.data.mhs;
      this.hurdlesName = res.data.fhName;
      this.hurdlesDesc = res.data.fhDesc;
    },
    // 批量删除按钮
    toBatchDelete() {
      if (this.multipleSelection.length > 0) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          let res = await batchDelete(this.multipleSelection);
          if (res.code == 200) {
            this.$notify.success({
              title: '删除成功',
              message: res.message,
            });
          }
        }).catch(() => {
          console.log(2);
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      } else {
        this.$message({
          type: 'info',
          message: '请选择要删除的数据'
        });
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.fhId);
    },
    async handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await deleteById(row.fhId);
        if (res.code == 200) {
          this.$notify.success({
            title: '删除成功',
            message: res.message
          });
          this.init();
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.drawer = true;
    },
    toCancel() {

      this.resetForm('ruleForm');
      // 隐藏抽屉
      this.drawer = false;
    },
    toSearch() {
      //重置页码为1，再查询数据
      this.pageParams.pageNum = 1;
      this.init();
    },

    // 抽屉添加按钮
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        //表单通过验证
        if (valid) {
          //获取用户输入的数据 发送给后台进行保存。保存成功后，刷新表格数据，提示用户保存成功，隐藏抽屉
          //用户输入的数据this.ruleForm
          let res = await saveOrUpdate(this.ruleForm);
          console.log(res, '=====保存结果=====');
          if (res.code == 200) {
            //成功 提示用户 刷新界面
            this.$notify.success({
              title: '保存成功',
              message: res.message
            });
            this.toSearch();
            // 表单
            this.toCancel();
          } else {
            //失败
            this.$notify.error({
              title: '保存失败',
              message: res.message,
            });
            this.toCancel();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 显示抽屉函数
    toAdd() {
      //显示抽屉
      this.drawer = true;
    },
    // 重置抽屉表单函数
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 关闭抽屉函数
    handleClose(done) {
      this.resetForm('ruleForm');
      done();
    },
    // handleSizeChange(val) {
    //   console.log(`每页 ${val} 条`);
    // },
    // handleCurrentChange(val) {
    //   console.log(`当前页: ${val}`);
    // },
    handleClick(row) {
      console.log(row);
    },
    // 获取数据函数
    async init() {
      // 合并对象
      let temp = {
        ...this.searchParams,//...扩展运算符用来展开对象，获取其内部的所有属性
        ...this.pageParams
      };
      // 删除属性。。 遍历对象  key是属性名 删除没有值的属性
      for (let key in temp) {
        if (!temp[key]) {
          // 删除属性
          delete temp[key];
        }
      }
      let res = await findFence(temp);
      console.log(res);
      this.tableData = res.data.list;
      this.total = res.data.total;
    }
  },
  created() {
    this.init();
  },
  mounted() { },
};
</script>
<style scoped>
.card-div {
  padding: 20px;
}

.options-div {
  display: flex;
  justify-content: end;
  padding: 10px;
}

.options-div>* {
  /* 选择所有子代 > 子代 *所有*/
  margin-left: 10px;
}

.page-div {
  text-align: end;
  padding: 10px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 480px;
}
</style>
</style>