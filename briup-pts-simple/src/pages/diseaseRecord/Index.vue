<!--
 * @Description: 病症记录页面
 * @Author: Ronda
 * @Date: 2023-06-25 09:10:22
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 10:09:28
-->
<template>
  <div>
    <!-- 操作行 -->
    <div class="options-div" style="height:45px">
      <el-button @click="toAdd" type="primary" style="height: 36px;">添加</el-button>
      <el-button @click="toBatchDelete" type="danger" style="height: 36px;">批量删除</el-button>
      <el-select clearable v-model="searchParams.drDId" placeholder="病症" style="width: 150px">
        <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-select clearable v-model="searchParams.drStatus" placeholder="治疗状态" style="width: 150px">
        <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button type="text" @click="toSearch" style="height: 36px;">搜索</el-button>
    </div>
    <!-- 表格 -->
    <div class="table-div">
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="50" fixed="left">
        </el-table-column>
        <el-table-column prop="drAnimalId" label="动物编号" width="260" fixed="left">
        </el-table-column>
        <el-table-column prop="disease.dId,disease.dName" label="病症编号/病症名称" width="200">
          <template slot-scope="scope">
            {{ scope.row.disease.dId }}/{{ scope.row.disease.dName }}
          </template>
        </el-table-column>
        <el-table-column prop="drDesc" label="病症描述">
        </el-table-column>
        <el-table-column prop="drCure" label="治疗过程">
        </el-table-column>
        <el-table-column prop="drTime" label="录入时间" width="160">
        </el-table-column>
        <el-table-column prop="drStatus" label="状态" width="80">
        </el-table-column>
        <el-table-column label="操作" fixed="right" width="160">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.row)">移除</el-button>
            <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 分页 -->
    <div>
      <div class="page-div">
        <el-pagination background :current-page.sync="pageParams.pageNum" :page-sizes="[2, 10, 15, 30, 50, 80]"
          :page-size.sync="pageParams.pageSize" layout="total, prev, pager, next, sizes" :total="total">
        </el-pagination>
      </div>
    </div>
    <!-- 抽屉 -->
    <div>
      <el-drawer title="添加病症记录信息" :visible.sync="drawer" :direction="rtl" :before-close="handleClose" size='35%'>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item style="padding-left: 20px;" label="动物编号" prop="drAnimalId">
            <el-input v-model="ruleForm.drAnimalId"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 20px" label="病症" prop="drDId">
            <el-select v-model="ruleForm.drDId" placeholder="请选择病症">
              <el-option v-for="item in options1" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item style="padding-left: 20px" label="上报时间" prop="drTime">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择上报时间"
              v-model="ruleForm.drTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item style="padding-left: 20px" label="病症描述" prop="drDesc">
            <el-input type="textarea" v-model="ruleForm.drDesc"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 20px" label="当前病症诊疗过程" prop="drCure">
            <el-input type="textarea" v-model="ruleForm.drCure"></el-input>
          </el-form-item>
          <el-form-item style="padding-left: 20px" label="诊疗状态" prop="drStatus">
            <el-radio-group v-model="ruleForm.drStatus">
              <el-radio label="未治疗"></el-radio>
              <el-radio label="治疗中"></el-radio>
              <el-radio label="已治疗"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button @click="toCancel()">取消</el-button>
            <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
  </div>
</template>

<script>
import { findByPage, saveOrUpdate, deleteById, batchDelete } from '@/api/diseaseRecord.js';
export default {
  data() {
    return {
      total: 0,
      drawer: false,
      value: '',
      multipleSelection: [],

      //搜索表单数据
      searchParams: {
        drDId: '',
        drStatus: '',
      },
      pageParams: {
        pageNum: 1,
        pageSize: 10
      },
      ruleForm: {
        "drAnimalId": '',
        "drDId": '',
        "drDesc": '',
        "drCure": '',
        "drTime": '',
        "drStatus": '',
        "disease": {},
      },
      rules: {
        drAnimalId: [
          { required: true, message: '请输入动物编号', trigger: 'blur' },
        ],
        drDId: [
          { required: true, message: '请选择病症', trigger: 'change' }
        ],
        drTime: [
          { required: true, message: '请选择日期', trigger: 'change' }
        ],
        drDesc: [
          { required: true, message: '请输入病症描述', trigger: 'blur' }
        ],
      },
      tableData: [],
      options1: [{
        value: 12,
        label: '流行性感冒',
      }, {
        value: 14,
        label: '传染性胃肠炎',
      }, {
        value: 15,
        label: '猪瘟',
      }, {
        value: 16,
        label: '咬尾巴',
      }, {
        value: 17,
        label: '维生素A缺乏症',
      }],

      options2: [
        {
          value: '未治疗',
          label: '未治疗',
        },
        {
          value: '治疗中',
          label: '治疗中',
        },
        {
          value: '已治疗',
          label: '已治疗',
        },
      ]
    }
  },
  watch: {
    pageParams: {
      handler() {
        this.init();
      },
      deep: true,
    },

  },
  computed: {},
  methods: {
    //批量删除
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
      } else {
        this.$message({
          type: 'info',
          message: '请选择要删除的数据'
        });
      }
    },
    //删除
    async handleDelete(row) {
      this.$confirm('此操作将永久删除该文件，是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await deleteById(row.drId);
        console.log(res);
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
    //修改
    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.drawer = true;
    },
    //搜索
    toSearch() {
      //重置页码为1，再查询数据
      this.pageParams.pageNum = 1;
      this.init();
    },
    //获取数据
    async init() {
      let temp = {
        ...this.searchParams,
        ...this.pageParams,
      };
      for (let key in temp) {
        if (!temp[key]) {
          //删除属性
          delete temp[key];
        }
      };
      let res = await findByPage(temp);
      // console.log(res.data.list);
      // console.log(res.data.total);
      console.log(res);
      this.tableData = res.data.list;
      this.total = res.data.total;
    },
    toCancel() {
      this.resetForm('ruleForm');
      this.drawer = false;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let res = await saveOrUpdate(this.ruleForm);
          console.log(res, '====保存结果====');
          if (res.code == 200) {
            //提示成功
            this.$notify.success({
              title: '保存成功',
              message: res.message
            })
            //刷新表格数据
            this.toSearch();
            this.toCancel();
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toAdd() {
      this.ruleForm = {
        "drAnimalId": '',
        "drDId": '',
        "drDesc": '',
        "drCure": '',
        "drTime": '',
        "drStatus": '',
        "disease": {},
      };
      //显示抽屉
      this.drawer = true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => { });
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.drId);
    },
  },
  created() {
    this.init();
  },
  mounted() { },
};
</script>
<style scoped>
.el-form-item_label {
  width: 140px;
}


.page-div {
  text-align: right;
}

.options-div {
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
}

.options-div>* {
  margin-left: 10px;
}
</style>