<!--
 * @Description: 用户管理
 * @Author: cj
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
        <!-- 卡片 -->
        <div>
            <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                            class="image">
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