<!--
 * @Description: 
 * @Author: Ronda
 * @Date: 2023-12-29 09:56:39
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-31 15:43:55
-->
<template>
  <div>
    <!-- 操作行 -->
    <div class="options-div">
      {{ searchParams }}
      <el-button type="primary" @click="toAdd">添加</el-button>
      <el-button type="danger" @click="toBatchDelete">批量删除</el-button>
      <el-input style="width:120px" placeholder="请输入名称" v-model="searchParams.fhName" clearable>
      </el-input>
      <el-button type="text" @click="toSearch">搜索</el-button>
    </div>
    <!-- 表格 -->
    <div>
      {{ multipleSelection }}
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="fhId" label="编号" width="280">
        </el-table-column>
        <el-table-column prop="fhName" label="名称" width="80">
        </el-table-column>
        <el-table-column prop="fhTime" label="创建时间">
        </el-table-column>
        <el-table-column prop="fhDesc" label="描述" width="450">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.row)">移除</el-button>
            <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
            <el-popover placement="right" width="400" trigger="click">
              <el-button slot="reference" @click="handleDetail(scope.row)">详情</el-button>
              <div style="font-weight: bold;">
                <span>【{{ hurdlesName }}】： 栏舍详情</span>
              </div>
              <div style="font-weight: bold;">栏舍描述：{{ hurdlesDesc }}</div>
              <div>
                栏圈信息：
                <el-table :data="hurdles">
                  <el-table-column prop="hName" label="栏圈名称" width="150">
                  </el-table-column>
                  <el-table-column prop="hMax" label="容量" width="100">
                  </el-table-column>
                  <el-table-column prop="hDesc" label="栏圈描述" height="150">
                  </el-table-column>
                </el-table>
              </div>

            </el-popover>

          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div class="page-div">
      {{ pageParams }}
      <el-pagination background :current-page.sync="pageParams.pageNum" :page-sizes="[3, 5, 10, 20]"
        :page-size.sync="pageParams.pageSize" layout="total,prev,pager,next,sizes" :total="total">
      </el-pagination>
    </div>
    <!-- 抽屉 -->
    <el-drawer title="添加栏舍信息" :visible.sync="drawer" direction="rtl" :before-close="handleClose">
      {{ ruleForm }}
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="名称" prop="fhName">
          <el-input v-model="ruleForm.fhName"></el-input>
        </el-form-item>
        <el-form-item label="检疫时间" prop="fhTime">
          <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"
            v-model="ruleForm.fhTime" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item label="描述" prop="fhDesc">
          <el-input v-model="ruleForm.fhDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="toCancel">取消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { upFileUrl } from "@/utils/common";
import { get } from "@/utils/request";
import { findByPage } from "@/api/faGe";
import { saveOrUpdate } from "@/api/faGe";
import { deletById } from "@/api/faGe";
import { batchDelete } from "@/api/faGe";
import { findHurdles } from "@/api/faGe";

// import {
//   batchDelete,
// } from "@/api/quarantineRegistration.js";
export default {
  data() {
    return {
      upFileUrl,
      // 批次数据
      batchData: [],
      hurdles: [],
      hurdlesDesc: '',
      hurdlesName: '',

      ruleForm: {

        fhId: "",
        fhName: "",
        fhTime: "",
        fhDesc: "",

      },
      rules: {

        fhName: [
          { required: true, message: "名称", trigger: "blur" },
        ],
        fhTime: [
          { required: true, message: "创建时间", trigger: "change" },
        ],
        fhDesc: [
          { required: true, message: "描述", trigger: "blur" }
        ],

      },

      // -------详情标签---------


      // 抽屉的可见性
      drawer: false,

      // 总条数
      total: 0,
      // 搜索表单数据参数
      searchParams: {
        // 猪舍名称
        fhName: "",
      },
      // 分页参数
      pageParams: {
        pageNum: 1,
        pageSize: 10,
      },

      input: "",
      value: "",
      options: [
        {
          value: "合格",
          label: "合格",
        },
        {
          value: "不合格",
          label: "不合格",
        },
      ],

      tableData: [
      ],
      multipleSelection: [],
    };
  },

  computed: {},

  watch: {
    pageParams: {
      handler() {
        // 发请求......
        // console.log(this.pageParams);
        this.init();
      },
      deep: true,
    },
  },
  methods: {

    //----------------------详情标签-----------
    async handleDetail(row) {

      let res = await findHurdles(row.fhId);
      console.log(res);
      this.hurdles = res.data.mhs;
      this.hurdlesName = res.data.fhName;
      this.hurdlesDesc = res.data.fhDesc;
    },

    //批量删除按钮：判断用户有没有选择数据，如果选择了数据，询问用户确认删除吗？如果确认删除，执行批量删除操作。提示用户，刷新数据。
    toBatchDelete() {
      if (this.multipleSelection.length > 0) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            let res = await batchDelete(this.multipleSelection);
            if (res.code == 200) {
              //提示用户
              this.$notify.success({
                title: "成功",
                message: res.message,
              });
              // 刷新数据
              this.init();
            }
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除",
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "请选择要删除的数据",
        });
      }
    },


    // 取消按钮
    toCancel() {
      this.resetForm("ruleForm");
      this.drawer = false;
    },
    // 获取批次数据
    async findBatch() {
      let res = await get("/batch/queryAllUnquarantined");
      console.log(res);
      // res.data是批次数组
      this.batchData = res.data;
    },


    // 确定按钮
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        // 表单通过验证
        if (valid) {
          // 获取用户输入的数据，发送给后台进行保存。保存成功后，刷新表格数据，提示用户保存成功，隐藏抽屉。
          // 用户输入的数据this.ruleForm
          let res = await saveOrUpdate(this.ruleForm);
          console.log(res, "=====保存结果");
          if (res.code == 200) {
            //保存成功：
            //提示用户
            this.$notify.success({
              title: "成功",
              message: res.message,
            });
            //刷新表格数据
            this.toSearch();
            /*  //表单重置
            this.resetForm("ruleForm");
            //隐藏抽屉
            this.drawer = false; */
            this.toCancel();
          } else {
            //保存失败，提示用户
            this.$notify.error({
              title: "错误",
              message: res.message,
            });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 重置表单
    resetForm(formName) {
      // 重置表单数据，重置表单验证
      this.$refs[formName].resetFields();
    },
    // 登记按钮
    toAdd() {
      //获取批次的数据
      this.findBatch();
      // 重置表单数据
      this.ruleForm = {
        // 编号
        fhId: "",
        // 名称
        fhName: "",
        // 时间
        fhTime: "",
        // 描述
        fhDesc: "",
      };
      // 显示抽屉
      this.drawer = true;
    },
    // 抽屉关闭前的回调函数
    handleClose(done) {
      this.resetForm("ruleForm");
      // 继续往后执行关闭的操作
      done();
      /* this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {}); */
    },
    // 搜索按钮
    toSearch() {
      // 重置页码为1，再查询数据
      this.pageParams.pageNum = 1;
      this.init();
    },

    // 表格复选框改变的时候触发的事件处理程序
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.fhId);
    },
    // 修改：设置表单数据，展示抽屉
    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.drawer = true;
      // console.log(row);
    },
    // 删除
    async handleDelete(row) {
      // console.log(index, row);
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await deletById(row.fhId);
        if (res.code == 200) {
          this.$notify.success({
            title: '删除成功',
            message: 'res.message'
          });
          // 刷新数据
          this.init();
        }
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    // 获取数据
    async init() {
      // 合并对象
      let temp = {
        ...this.searchParams, // ...扩展运算符用来展开对象，获取其内部的所有属性
        ...this.pageParams,
      };
      // 删除属性   遍历对象  key是属性名  删除没有值的属性
      for (let key in temp) {
        //temp[key]获取属性值
        if (!temp[key]) {
          // 删除属性
          delete temp[key];
        }
      }
      //import {get} from '@/utils/request'  //js代码的第一行
      // let res = await get('/sss',temp);
      let res = await findByPage(temp);
      console.log(res);
      console.log(res.data.list);
      console.log(res.data.total);
      // 数据展示到页面上
      this.tableData = res.data.list;
      this.total = res.data.total;
      // 从后端接受到的数据，存到数据模型中，供页面使用。
    },
  },
  created() {
    this.init();
  },
  mounted() { },
};
</script>
<style scoped>
/* 操作组div flex容器 */
.options-div {
  display: flex;
  /* 项目在主轴的对齐方式 */
  justify-content: flex-end;
  padding-right: 10px;
}

/* 选择.options-div的所有子代  >子代  *所有 */
.options-div>* {
  margin-left: 10px;
}

.page-div {
  text-align: right;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>