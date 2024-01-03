<!--
 * @Author: WangChuDongDong 126376386+WangChuDongDong@users.noreply.github.com
 * @Date: 2023-12-29 17:07:14
 * @LastEditors: WangChuDongDong 126376386+WangChuDongDong@users.noreply.github.com
 * @LastEditTime: 2024-01-03 16:18:39
 * @FilePath: \briup-pts-simple\src\pages\TnimalMange\Index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 动物管理界面 -->
<template>
  <div>
    <div class="qrcode" ref="qrCodeUrl" v-show='false'>
    </div>
    <!-- 操作行 -->
    <div class="options-div">
      <el-button type="primary" round @click="toAdd" style="margin-left: 16px;">添加</el-button>

      <el-button type="danger" @click="toBatchDelete" round>批量删除</el-button>

      <!-- aHealthy -->
      <el-select style="width:120px" v-model="searchParams.aHealthy" clearable placeholder="健康状况">
        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <!-- aGender -->
      <el-select style="width:120px" v-model="searchParams.aGender" clearable placeholder="性别">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>

      <el-button type="text" @click="toSearch">搜索</el-button>
    </div>

    <!-- 表格 -->

    <div>
      <el-table ref="multipleTable" :data="tableData" border style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column prop="" type="selection" width="55">
        </el-table-column>

        <!-- 序号 -->
        <el-table-column label="序号" type="index" width="50">
        </el-table-column>

        <!-- 编号 -->
        <el-table-column prop="aAnimalId" label="编号" width="280">
        </el-table-column>

        <el-table-column prop="url" label="二维码" width="95" height="95">
          <template slot-scope="scope">
            <el-image :src="scope.row.url" :preview-src-ruleForm="[...scope.row.url]"></el-image>
          </template>
        </el-table-column>

        <el-table-column prop="aWeight" label="体重" width="95" align="center">
          <template slot-scope="scope">{{ scope.row.aWeight }}KG</template>
        </el-table-column>

        <!-- 性别 -->
        <el-table-column prop="aGender" label="性别" width="70" align="center">
        </el-table-column>

        <!-- 健康状态 -->
        <el-table-column prop="aHealthy" label="健康状态" width="85" align="center">
        </el-table-column>

        <!-- 过程状态 -->
        <el-table-column prop="aStatus" label="过程状态" width="85" align="center">
        </el-table-column>

        <!-- 疫苗接种状态 -->
        <el-table-column prop="aInoculate" label="疫苗接种状态" width="120" align="center">
        </el-table-column>

        <!-- 所属批次 -->
        <el-table-column prop="aBatchId" label="所属批次" width="280">
        </el-table-column>

        <!-- 所属栏圈 -->
        <el-table-column prop="managerFenceHouse,managerHurdles" label="所属栏圈" width="155" align="center">
          <template slot-scope="scope"><el-tag>
              {{ scope.row.managerFenceHouse }}-{{ scope.row.managerHurdles }}
            </el-tag>
          </template>
        </el-table-column>

        <!-- 购入时间 -->
        <el-table-column prop="aTime" label="购入时间">
        </el-table-column>

        <!-- 操作 -->
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </div>


    <!-- 分页功能 -->
    <div class="page-div">
      <el-pagination background :current-page.sync="pageParams.pageNum" :page-sizes="[3, 5, 10, 20]"
        :page-size.sync="pageParams.pageSize" layout="total, prev, pager, next, sizes" :total="total">
      </el-pagination>
    </div>

    <!-- 抽屉 -->
    <el-drawer title="添加动物信息" :size="drawerWidth" :visible.sync="drawer" direction="rtl" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm" margin="10px">

        <div class="options-drawer">
          <!-- 初始体重 -->
          <el-form-item label="初始体重(KG)" prop="aWeight">
            <el-input v-model="ruleForm.aWeight"></el-input>
          </el-form-item>

          <!-- 性别 -->
          <el-form-item label="性别" prop="aGender">
            <el-radio-group v-model="ruleForm.aGender">
              <el-radio label="雌性"></el-radio>
              <el-radio label="雄性"></el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 健康 -->
          <el-form-item label="健康状态" prop="aHealthy">
            <el-radio-group v-model="ruleForm.aHealthy">
              <el-radio label="健康"></el-radio>
              <el-radio label="生病"></el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 疫苗 -->
          <el-form-item label="疫苗接种状态" prop="aInoculate">
            <el-radio-group v-model="ruleForm.aInoculate">
              <el-radio label="接种"></el-radio>
              <el-radio label="未接种"></el-radio>
            </el-radio-group>
          </el-form-item>

          <!-- 所属批次 -->
          <el-form-item label="所属批次" prop="aBatchId">
            <el-select v-model="ruleForm.aBatchId" placeholder="所属批次">
              <el-option v-for="item in BatchData" :key="item.bSerialId" :label="item.bDesc"
                :value="item.bSerialId"></el-option>
            </el-select>
          </el-form-item>

          <!-- 所属栏圈 -->
          <el-form-item label="所属栏圈" prop="aHurdlesId">
            <el-select v-model="ruleForm.aHurdlesId" placeholder="所属栏圈">
              <el-option v-for="item in HurdleData" :key="item.hId" :label="item.hName" :value="item.hId"></el-option>
            </el-select>
          </el-form-item>

          <!-- 购入时间 -->
          <el-form-item label="购入时间" prop="grTime">
            <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期" v-model="ruleForm.aTime"
              style="width: 100%;"></el-date-picker>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
            <el-button @click="toCancel()">取消</el-button>
          </el-form-item>
        </div>
      </el-form>
    </el-drawer>


  </div>
</template>

<script>
import { TfindByPage, AbatchDelete, AdeleteById, AsaveOrUpdate, AFindById } from '@/api/animal.js';
import { get } from '@/utils/request';
import QRCode from "qrcodejs2";
export default {
  data() {
    return {//data开始

      qrCodeText: "",
      multipleSelection: [],

      total: 0,
      // 抽屉的可见性
      drawer: false,
      HurdleData: [],
      BatchData: [],
      drawerWidth: '40%',

      // 新增功能
      ruleForm: {
        // 动物编号
        aAnimalId: "",
        // 初始体重
        aWeight: "",
        // 性别
        aGender: "",
        // 健康状态
        aHealthy: "",
        // 疫苗接种状态
        aInoculate: "",
        // 所属批次
        aBatchId: "",
        // 所属栏圈
        aHurdlesId: "",
        // 购入时间
        aTime: ""
      },

      rules: {
        aWeight: [
          { required: true, message: "请输入初始体重", trigger: "blur" },
        ],

        // 单点选择
        aGender: [
          { required: true, message: "请选择性别", trigger: "change" },
        ],
        aHealthy: [
          { required: true, message: "请选择健康状态", trigger: "change" },
        ],
        aInoculate: [
          { required: true, message: "请选择疫苗接种状态", trigger: "change" },
        ],

        // 输入框选择
        aBatchId: [
          { required: true, message: "请选择所属批次", trigger: "change" },
        ],
        aHurdlesId: [
          { required: true, message: "请选择所属栏圈", trigger: "blur" },
        ],
        aTime: [
          {
            required: true,
            message: "请选择购入时间",
            trigger: "change",
          },
        ],
      },

      option: [
        {
          value: "健康",
          label: "健康"
        }, {
          value: "生病",
          label: "生病"
        }
      ],
      options: [{
        value: "雌性",
        label: "雌性"
      }, {
        value: "雄性",
        label: "雄性"
      }],



      // 查询表单参数
      searchParams: {
        // 性别
        aGender: '',
        // 健康状态
        aHealthy: '',
      },

      // 查询分页参数
      pageParams: {
        pageNum: 1,
        pageSize: 10,
      },

      tableData: [],
      value: '',

    };//data结束
  },
  computed: {},
  watch: {
    pageParams: {
      deep: true,
      handler() {
        this.init();
      }
    }
  },

  // methods
  methods: {


    // 单个删除
    async handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          let res = await AdeleteById(row.aAnimalId);
          if (res.code == 200) {
            //提示用户
            this.$notify.success({
              title: "成功",
              message: res.message,
            });
            //刷新数据
            this.init();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
      // console.log(row);
    },


    //重置表单
    resetForm(formName) {
      //重置表单数据,重置表单验证
      this.$refs[formName].resetFields();
    },

    // 操作行搜索框
    toSearch() {
      this.pageParams.pageNum = 1;
      this.init();
    },


    // 操作行添加信息按钮
    toAdd() {
      this.findHurdle();
      this.findBatch();

      this.drawer = true;
    },

    async findHurdle() {
      let res = await get("/hurdle/queryAllEnable");
      console.log(res);
      // res.data是批次数组
      this.HurdleData = res.data;
    },
    async findBatch() {
      let res = await get("/batch/queryAll");
      console.log(res);
      // res.data是批次数组
      this.BatchData = res.data;
    },


    // 确定按钮
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        // 表单通过验证
        if (valid) {
          // 获取用户输入的数据，发送给后台进行保存。保存成功后，刷新表格数据，提示用户保存成功，隐藏抽屉。
          // 用户输入的数据this.ruleForm
          let res = await AsaveOrUpdate(this.ruleForm);
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


    //取消
    toCancel() {
      this.resetForm("ruleForm");
      this.drawer = false;
    },


    // 表格选择
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.aAnimalId);
    },

    // 获取数据到表格
    async init() {
      let temp = {
        ...this.searchParams,
        ...this.pageParams,
      };
      for (let key in temp) {
        if (!temp[key]) {
          delete temp[key];
        }
      }
      let res = await TfindByPage(temp);
      console.log(res.data.list);
      console.log(res.data.total);

      this.tableData = res.data.list;
      this.total = res.data.total;
      this.tableData.forEach((item, index) => {
        // 假设每个item都有一个唯一的animalId属性  
        let animalId = item.aAnimalId;
        let qrCodeText = `http://124.223.22.76/briup-pts-simple-source/index.html?animalId=${animalId}`;
        this.qrCodeText = qrCodeText; // 更新全局的qrCodeText属性，以便于在所有地方使用  
        item.url = this.bindQRCode(animalId); // 直接将animalId作为参数传递给bindQRCode方法  
      });
    },
    //修改：设置表单数据 展示抽屉
    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.drawer = true;
      // console.log(row);
    },
    //批量删除 判断用户有没有选择数据，如果选择了数据 询问用户确认删除吗 确认则执行
    toBatchDelete() {
      //
      if (this.multipleSelection.length > 0) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        })
          .then(async () => {
            let res = await AbatchDelete(this.multipleSelection);
            if (res.code == 200) {
              //提示用户
              this.$notify.success({
                title: "成功",
                message: res.message,
              });
              //刷新数据
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
    // 抽屉相关方法
    handleClose(done) {
      done();
    },

    bindQRCode(animalId) {
      let qrCodeImage = new QRCode(this.$refs.qrCodeUrl, {
        text: `http://124.223.22.76/briup-pts-simple-source/index.html?animalId=${animalId}`, // 使用传递的animalId来生成二维码的URL  
        width: 200,
        height: 200,
        colorDark: "#333333", // 二维码颜色    
        colorLight: "#ffffff", // 二维码背景色    
        correctLevel: QRCode.CorrectLevel.L // 容错率，L/M/H    
      });
      return qrCodeImage._oDrawing._elCanvas.toDataURL("image/png");
    },
    // 其他方法...    
  },

  created() {
    this.init();
  },

  mounted() { }
};
</script>
<style scoped>
.options-div {
  display: flex;
  justify-content: end;
  padding-right: 10px;
  margin: 10px;
}

.options-drawer {
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-top: 50px;
}

.options-div>* {
  /* 选择所有子代 > 子代 *所有*/
  margin-left: 10px;
}

.page-div {
  text-align: right;
}
</style>