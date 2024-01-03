<template>
  <div>
    <!-- 操作行 -->
    <div class="options-div" style="height:45px">
      <el-button style="height: 36px;" type="primary" @click="toAdd">登记</el-button>
      <el-button style="height: 36px;" type="danger" @click="toBatchDelete">批量删除</el-button>
      <el-input style="width: 120px;" placeholder="检疫机构" v-model="searchParams.grMechanism" clearable>
      </el-input>
      <el-select style="width:120px" v-model="searchParams.bQualified" clearable placeholder="检疫结果">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
      </el-select>
      <el-button type="text" @click="toSearch">搜索</el-button>
    </div>
    <!-- 表格 -->
    <div>
      <el-table :data="tableData" border style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="50">
        </el-table-column>
        <el-table-column prop="grBatchId" label="批次编号" width="180">
        </el-table-column>
        <el-table-column prop="grMechanism" label="检疫机构" width="180">
        </el-table-column>
        <el-table-column align="center" width="120" prop="grImg" label="检疫图片">
          <template slot-scope="scope">
            <el-popover placement="right" title="" trigger="hover">
              <img :src="scope.row.grImg" style="height: 200px;width: 200px">
              <img style="width:80px;height:50px;" :src="scope.row.grImg" alt="" slot="reference">
              <!-- <img src="https://img2.baidu.com/it/u=673003775,1191479950&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500" alt=""> -->
            </el-popover>
          </template>
        </el-table-column>

        <el-table-column prop="grTime" label="检疫时间">
        </el-table-column>
        <el-table-column prop="bQualified" label="检疫结果">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
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
    <el-drawer title="添加检疫登记信息" :visible.sync="drawer" :before-close="handleClose">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="批次编号" prop="grBatchId">
          <el-select v-model="ruleForm.grBatchId" placeholder="请选择批次编号">
            <el-option v-for="item in batchData" :key="bSerialId" :label="item.bDesc" :value="item.bSerialId"></el-option>

          </el-select>
        </el-form-item>
        <el-form-item label="检疫机构" prop="grMechanism">
          <el-input v-model="ruleForm.grMechanism"></el-input>
        </el-form-item>
        <el-form-item label="检疫结果" prop="bQualified">
          <el-select v-model="ruleForm.bQualified" placeholder="检疫结果">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="上传检疫图片" prop="delivery">
          <el-upload class="avatar-uploader" :action="upFileUrl" :show-file-list="false" :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="图片地址" prop="grImg">
          <el-input v-model="ruleForm.grImg"></el-input>
        </el-form-item>
        <el-form-item label="检疫时间" prop="grTime">
          <el-date-picker value-format="yyyy-MM-dd HH:mm:ss" type="datetime" placeholder="选择日期" v-model="ruleForm.grTime"
            style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button @click="toCancel()">取消</el-button>
          <el-button type="primary" @click="submitForm('ruleForm')">确认</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
  </div>
</template>

<script>
import { upFileUrl } from '@/utils/common';
import { get } from '@/utils/request';
import { findByPage, saveOrUpdate, deleteById, batchDelete } from '@/api/quarantineRegistration.js';
export default {
  data() {
    return {
      upFileUrl,
      batchData: [],
      ruleForm: {
        //结果
        "bQualified": "",
        //批次编号
        "grBatchId": "",
        //图片
        "grImg": "",
        //机构
        "grMechanism": "",
        //时间
        "grTime": ""

      },
      rules: {
        grBatchId: [
          { required: true, message: '请选择批次编号', trigger: 'change' }
        ],
        grMechanism: [
          { required: true, message: '请输入检疫机构', trigger: 'blur' },
        ],
        bQualified: [
          { required: true, message: '请选择检疫结果', trigger: 'change' }
        ],
        grImg: [
          { required: true, message: '请上传图片', trigger: 'blur' }
        ],
        grTime: [
          { required: true, message: '请选择检疫时间', trigger: 'change' }
        ],
      },
      //抽屉 的可见性
      drawer: 'false',
      //总条数
      total: 0,
      drawer: false,
      input: '',
      value: '',
      //搜索表单数据
      searchParams: {
        grMechanism: '',
        bQualified: '',
      },
      pageParams: {
        pageNum: 1,
        pageSize: 10
      },
      options: [{
        value: '合格',
        label: '合格'
      }, {
        value: '不合格',
        label: '不合格'
      }],
      tableData: [{
        date: '2016-05-02',
        name: '陆江发',
        address: '百色市普陀区金沙江路 1518 弄',
        url: 'https://img2.baidu.com/it/u=673003775,1191479950&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'
      }, {
        date: '2016-05-04',
        name: '陈杰',
        address: '玉林市普陀区金沙江路 1517 弄',
        url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F0974318b-bd86-4918-8f9c-9e2a19779006%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1706431114&t=9246f16f359a9f68eeb1356e11ecd406'
      }, {
        date: '2016-05-01',
        name: '霍东',
        address: '梧州市普陀区金沙江路 1519 弄',
        url: 'https://img1.baidu.com/it/u=3912949120,1320419963&fm=253&fmt=auto&app=138&f=JPEG?w=510&h=500'
      }, {
        date: '2016-05-03',
        name: '咕咕鸡',
        address: '贺州市普陀区金沙江路 1516 弄',
        url: 'https://img1.baidu.com/it/u=2411597274,372131597&fm=253&fmt=auto&app=138&f=JPEG?w=504&h=500'
      }],
      multipleSelection: []
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
    //批量删除 判断用户有没有选择数据，如果选择了数据，询问用户确认删除？如果确认删除，执行批量删除操作。提示用户，刷新数据
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
    //取消
    toCancel() {
      this.resetForm('ruleForm');
      this.drawer = false;
    },
    //获取未检疫的批次数据
    async findBatch() {
      let res = await get('/batch/queryAllUnquarantined');
      console.log(res);
      this.batchData = res.data;
    },
    //图片上传成功
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
      console.log(res, '==图片服务器返回的数据==');
      //将后端返回的图片URL地址保存到表单数据中
      this.ruleForm.grImg = res.data;
    },
    //图片上传之前
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isLt2M;
    },
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
            //刷新表格数据
            this.toSearch();
            //表单重置
            // this.resetForm('ruleForm');
            //隐藏抽屉
            // this.drawer = false;
            this.toCancel();
          } else {
            //失败
            this.$notify.error({
              title: '保存失败',
              message: res.message
            });
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      //重置表单数据
      this.imageUrl = '';
      //重置表单验证
      this.$refs[formName].resetFields();
    },
    toAdd() {
      //获取批次
      this.imageUrl = '',
        this.findBatch();
      this.ruleForm = {
        //结果
        "bQualified": "",
        //批次编号
        "grBatchId": "",
        //图片
        "grImg": "",
        //机构
        "grMechanism": "",
        //时间
        "grTime": ""

      };

      //显示抽屉
      this.drawer = true;
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          this.resetForm('ruleForm');
          done();
        })
        .catch(_ => { });
    },
    toSearch() {
      //重置页码为1，再查询数据
      this.pageParams.pageNum = 1;
      this.init();
    },
    handleSelectionChange(val) {
      this.multipleSelection = val.map((item) => item.grId);
    },
    //修改：设置表单数据 展示抽屉
    handleEdit(row) {
      this.ruleForm = {
        ...row,
      };
      this.imageUrl = row.grImg;
      this.drawer = true;
      // console.log(row);
    },
    async handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(async () => {
        let res = await deleteById(row.grId);
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
    //获取数据
    async init() {
      //合并对象
      let temp = {
        //...扩展运算符用来展开对象获取内部所有的属性
        ...this.searchParams,
        ...this.pageParams,
      };
      //删除属性
      for (let key in temp) {
        if (!temp[key]) {
          //删除属性
          delete temp[key];
        }
      };
      let res = await findByPage(temp);
      console.log(res.data.list);
      console.log(res.data.total);
      this.tableData = res.data.list;
      this.total = res.data.total;
      //从后端接收到的数，存到数据模型中，供页面使用

    }
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
  justify-content: flex-end;
  padding-right: 5px
}

.options-div>* {
  margin-left: 10px
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
  border-color: #409EFF;
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