<!--
 * @Description: 用户管理
 * @Author: cj
-->
<template>
    <div style="background-image: url('http://8.134.137.44:7002/images/2024041704350162775.jpg');">
        <!-- 表头搜索 -->
        <div>
            
            <div class="options-div">
                <div class="txt-div">用户管理</div>
                <el-button type="primary">注册</el-button>
                <el-button type="danger">批量删除</el-button>
                <el-input style="width: 150px;" placeholder="请输入会员名字" clearable>
                </el-input>
                <el-button icon="el-icon-search" circle></el-button>
            </div>
        </div>
        <!-- 卡片 -->
        <div class="card-div">
            <el-row class="card-row">
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP1111</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：大嘴</div>
                        <div>电话：11111111-55</div>
                        <div>会员积分：12322</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352255878.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP2222</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：黑白双煞</div>
                        <div>电话：22222222-55</div>
                        <div>会员积分：9949</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352286658.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP3333</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：虾仁</div>
                        <div>电话：33333333-55</div>
                        <div>会员积分：9999</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352312082.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP5555</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：富贵</div>
                        <div>电话：55555555-55</div>
                        <div>会员积分：11999</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352350073.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
            <el-row class="card-row">
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP6666</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：炽焰</div>
                        <div>电话：66666666-55</div>
                        <div>会员积分：7879</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352633114.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP7777</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：来福</div>
                        <div>电话：77777777-55</div>
                        <div>会员积分：21999</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352406379.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP8888</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：旺财</div>
                        <div>电话：88888888-55</div>
                        <div>会员积分：92919</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352436438.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
                <el-col :span="6">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>会员编号：SVIP9999</span>
                            <el-button style="float: right; padding: 3px 0" type="text">管理</el-button>
                        </div>
                        <div>名字：平安</div>
                        <div>电话：99999999-55</div>
                        <div>会员积分：89899</div>
                        <img style="width: 250px;height: 250px;"
                            src="http://8.134.137.44:7002/images/2024041704352463371.jpeg" alt="">
                        <div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>

        <!-- 分页 -->
        <div >
            <div class="block">
                <el-pagination  @size-change="handleSizeChange" @current-change="handleCurrentChange"
                    :current-page="currentPage4" :page-sizes="[8, 16, 32, 64]" :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper" :total="400">
                </el-pagination>
            </div>
        </div>
    </div>
    <!-- 抽屉 -->
</template>

<script>
export default {
    data() {
        return {

        };
    },
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style scoped>
.options-div {
    display: flex;
    justify-content: end;
    padding: 10px;
    opacity: 1
}

.options-div>* {
    /* 选择所有子代 > 子代 *所有*/
    margin-left: 10px;
}

.card-row>* {
    padding: 20px;
}

.block{
     display: flex;
    justify-content: end;
    opacity: 1;
}
.card-div {
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.5); /* 设置背景颜色为半透明 */
  opacity: 1;
}

.txt-div{
    color: white;
    font-family: Arial, sans-serif;
  font-size: 30px;
  font-weight: bold;
}
</style>