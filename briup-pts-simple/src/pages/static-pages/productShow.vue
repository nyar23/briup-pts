<!--
 * @Description: 产品展示页面
 * @Author: hd
-->

<template>
    <div>

        <!-- 导航栏 -->
        <div class="options-div">
            <el-menu :default-active="activeIndex" class="custom-menu" mode="horizontal" @select="handleSelect">
                <el-input class="menu-input" v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
                <div class="menu-items-right">
                    <el-menu-item index="1">客服中心</el-menu-item>
                    <el-menu-item index="2">购物车</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                </div>
            </el-menu>
        </div>

        <!-- 走马灯 -->
        <div>
            <el-carousel :interval="4000" type="card" height="300px">
                <el-carousel-item v-for="(item, index) in images" :key="index">
                    <div>
                        <img :src="item.imageUrl" alt="" :style="{ width: '100%', height: 'auto' }">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            input: "",


            images: [
                { imageUrl: '' },
                { imageUrl: '' },
                { imageUrl: '' },
            ]
        };
    },
    computed: {},
    methods: {},
    created() { },
    mounted() { },
};
</script>
<style scoped>
.options-div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.custom-menu {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    /* 菜单项默认靠右 */
}

.menu-items-right {
    display: flex;
    align-items: center;
    /* 菜单项垂直居中 */
}

.menu-input {
    /* 将输入框推到左边，利用 flex 的空间分配 */
    margin: 50px;
    width: 300px;
    border: 2px red solid;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.home-container {
    height: 100%;
}
</style>