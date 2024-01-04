<!--
 * @Description: cj
 * @Author: 
-->
<template>
    <div>
        <!-- 表头搜索 -->
        <div>
            <div class="options-div">
                <el-button type="primary">注册</el-button>
                <el-button type="danger">批量删除</el-button>
                <el-input style="width: 150px;" placeholder="请输入会员名字" clearable>
                </el-input>
                <el-button type="text">搜索</el-button>
            </div>
        </div>
        <!-- 表格 -->
        <div>
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>

                <el-table-column label="序号" type="index" width="48">
                </el-table-column>
                <el-table-column prop="fhTime" label="入会时间" width="200">
                </el-table-column>
                <el-table-column prop="fhId" label="会员编号" width="200">
                </el-table-column>
                <el-table-column prop="fhName" label="名字" width="150">
                </el-table-column>
                <el-table-column prop="fhName" label="电话号码" width="200">
                </el-table-column>
                <el-table-column prop="fhDesc" label="描述">
                </el-table-column>

                <el-table-column fixed="right" label="操作" width="150">
                    <template slot-scope="scope">
                        <el-button type="text" size="small">移除</el-button>
                        <el-button type="text" size="small">修改</el-button>
                        <el-button type="text" size="small">详情</el-button>
                    </template>
                </el-table-column>

            </el-table>

        </div>

        <!-- 表格 -->
        <div>

        </div>
        <!-- 分页 -->
        <div>

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
}

.options-div>* {
    /* 选择所有子代 > 子代 *所有*/
    margin-left: 10px;
}
</style>