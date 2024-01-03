<template>
  <!-- 操作行 -->
  <div>

    <div class="first">
      <el-button type="primary" @click="toAdd">添加</el-button>
      <el-button type="danger" @click="tochangeStatusBatch">批量启用/禁用</el-button>

      <el-input style="width: 130px;" placeholder="请输入栏圈名称" v-model="searchParams.hName" clearable> </el-input>

      <el-input style="width: 150px;" placeholder="请选择圈栏容量" v-model="searchParams.hMax" clearable></el-input>
      <el-select style="width: 150px;" v-model="searchParams.fhName" clearable placeholder="请选择所属栏舍">
        <el-option v-for="item in options2" :key="item.value2" :label="item.label2" :value="item.value2">
        </el-option>
      </el-select>
      <el-select style="width: 150px;" v-model="searchParams.hEnable" clearable placeholder="请选择是否可用 ">
        <el-option v-for="item in options3" :key="item.value3" :label="item.label3" :value="item.value3">
        </el-option>
      </el-select>
      <el-button type="text" @click="toSearch">搜索</el-button>

    </div>


    <!-- 表格 -->
    <div>


      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="编号" width="50">
        </el-table-column>
        <el-table-column prop="hName" label="栏圈名称" width="180">
        </el-table-column>
        <el-table-column prop="hTime" label="创建时间" width="200">
        </el-table-column>
        <el-table-column prop="hMax" label="栏圈容量" width="200">
        </el-table-column>
        <el-table-column prop="managerFenceHouse.fhName" label="所属栏舍" width="200">
        </el-table-column>



        <el-table-column prop="hEnable" label="状态" width="70">
          <template slot-scope="scope">
            <el-tag :type="scope.row.hEnable === '可用' ? 'primary' : 'danger'">
              {{ scope.row.hEnable === '可用' ? '可用' : '禁用' }}
            </el-tag>
          </template>
        </el-table-column>








        <el-table-column prop="hDesc" label="栏圈描述" width="200">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="tochange(scope.row)"> {{ scope.row.hEnable == "可用" ? "禁用" : "启用" }}</el-button>
            <el-button type="text" @click="handleEdit(scope.row)">修改</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>



    <!-- 分页 -->
    <div class="page-div">
      <!-- {{ pageParams }} -->
      <el-pagination background :current-page.sync="pageParams.pageNum" :page-sizes="[3, 5, 10, 20]"
        :page-size.sync="pageParams.pageSize" layout="total,prev,pager,next,sizes" :total="total">
      </el-pagination>
    </div>

    <div>
      <!-- 抽屉 -->
      <!-- {{ ruleForm }} -->
      <el-drawer title="添加栏圈" :visible.sync="drawer" :with-header="false">


        <!-- {{ ruleForm }} -->

        <br>
        <!-- {{ options4 }}
         -->

        <!-- {{ batchData }} -->
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="圈栏名称" prop="hName">
            <el-input v-model="ruleForm.hName"></el-input>
          </el-form-item>

          <el-form-item label="栏圈容量" prop="hMax">
            <el-input v-model="ruleForm.hMax"></el-input>
          </el-form-item>


          <el-form-item label="栏圈状态" prop="hEnable">
            <el-radio-group v-model="ruleForm.hEnable">
              <el-radio label="可用"></el-radio>
              <el-radio label="禁用"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="所属栏舍" prop="hFenceId">
            <el-select v-model='ruleForm.hFenceId' placeholder="请选择所属栏舍">
              <el-option v-for="item in batchData" :key="item.fhId" :label="item.fhName" :value="item.fhId">
              </el-option>
            </el-select>
          </el-form-item>





          <el-form-item label="栏圈描述" prop="hDesc">
            <el-input type="textarea" v-model="ruleForm.hDesc"></el-input>
          </el-form-item>
          <el-form-item label="检疫时间" prop="hTime">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期时间"
              v-model="ruleForm.hTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
            <el-button @click="toCancel">取消</el-button>
          </el-form-item>
        </el-form>



      </el-drawer>

    </div>





  </div>
</template>






<script>
import { get } from "@/utils/request";
import { findByPage, saveOrUpdate, changeStatus, changeStatusBatch } from "@/api/hurdles.js";




export default {
  data() {
    return {

      batchData: [],
      //登记校验
      ruleForm: {
        hName: '',
        hMax: '',
        hEnable: '',
        // fhName: '',
        hFenceId: "",
        // delivery: false,
        hDesc: '',
        hTime: '',

      },
      rules: {
        hName: [
          { required: true, message: '请输入栏圈名称', trigger: 'blur' },
        ],
        hMax: [
          { required: true, message: '请输入栏圈容量', trigger: 'blur' },
        ],
        hEnable: [
          { required: true, message: '请选择栏圈状态', trigger: 'blur' }
        ],
        hFenceId: [
          { required: true, message: '请选择所属栏舍', trigger: 'blur' }
        ],
        hDesc: [
          { required: true, message: '请输入栏圈描述', trigger: 'blur' }
        ],
        hTime: [
          { required: true, message: "请选择检疫时间", trigger: "blur" },
        ],
      },










      input: '',

      options: [{
        value: '30',
        label: '30',
      }],
      value: '',

      options2: [{
        value2: '隔离舍',
        label2: '隔离舍'
      }, {
        value2: '育成舍',
        label2: '育成舍'
      }, {
        value2: '保育舍',
        label2: '保育舍'
      }],
      value2: '',

      options3: [{
        value3: '可用',
        label3: '可用'
      }, {
        value3: '禁用',
        label3: '禁用'
      }],
      value3: '',
      options4: [
        {
          value: '隔离舍',
          label: '隔离舍',
        },
        {
          value: '育成舍',
          label: '育成舍',
        },
        {
          value: '保育舍',
          label: '保育舍',
        },
      ],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        state: '禁用',
        description: '一号'

      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        state: '禁用',
        description: '二号'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        state: '禁用',
        description: '三号'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        state: '禁用',
        description: '四号'
      }],



      total: 0,
      // 搜索表单数据参数
      searchParams: {
        //栏圈名称
        hName: "",
        //栏舍容量
        hMax: "",
        //栏舍名称
        fhName: "",
        //是否可用
        hEnable: "",

        managerFenceHouse: {},
      },

      pageParams: {
        pageNum: 1,
        pageSize: 10,
      },
      //抽屉可见性
      drawer: false,


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
    //复选表框
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => {
        return {
          hId: item.hId,
          hEnable: item.hEnable
        }
      });
    },


    //批量修改状态
    tochangeStatusBatch() {
      if (this.multipleSelection.length > 0) {
        this.$confirm("此操作将修改栏舍状态", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            let res = await changeStatusBatch(this.multipleSelection);
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
              message: "已取消修改",
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "请选择要修改的数据",
        });
      }
    },




    //修改状态
    async tochange(row) {
      this.$confirm("此操作将修改栏舍状态", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await changeStatus(row.hEnable, row.hId);
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
            message: "已取消修改",
          });
        });
    },




    async findBatch() {
      let res = await get("/fenceHouse/queryAll");
      console.log(res);
      // res.data是批次数组
      this.batchData = res.data;
    },

    //取消
    toCancel() {
      this.resetForm("ruleForm");
      this.drawer = false;
    },
    //重置
    // resetForm(formName) {
    //   // 重置表单数据，重置表单验证
    //   this.$refs[formName].resetFields();
    // },


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
      // 重置图片的显示
      // 重置表单数据，重置表单验证


      this.$refs[formName].resetFields();
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

    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.imageUrl = row.grImg;
      this.drawer = true;
      // console.log(row);
    },

    toAdd() {

      this.ruleForm = {

        hName: '',
        hMax: '',
        hEnable: '',
        // fhName: '',
        hFenceId: "",
        // delivery: false,
        hDesc: '',
        hTime: '',


      };

      this.drawer = true;
    },


    // 搜索按钮
    toSearch() {
      // 重置页码为1，再查询数据
      this.pageParams.pageNum = 1;
      this.init();
    },
    //获取数据
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

    this.findBatch();
    this.init();

  },
  mounted() { }
};
</script>
<style scoped>
.first {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}

.first>* {
  margin-left: 10px;
}

.page-div {
  text-align: right;
}
</style>