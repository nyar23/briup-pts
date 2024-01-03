<!--
 * @Description: vue基础页面
 * @Author: Ronda
 * @Date: 2023-08-18 10:12:52
 * @LastEditors: Ronda
 * @LastEditTime: 2023-12-21 10:10:44
-->
<!-- 基本渲染{{}} -->
<template>
    <div>vue基础页面
        {{ msg }}
        <h2>基本渲染{{ }}</h2>
        <div>
            <h2>计算属性</h2>
            <!-- {{ num + 5 }} -->
            {{numShow}}
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "重炮手雷龙",
            num: 10
        };
    },
    // 计算属性
    // 写变量 
    computed: {
        numShow() {
            //js 中访问数据模型中的数据加this.,this代表当前vue实例。
            return this.num + 5;
        },
    },
    //写函数
    methods: {
        init() {
            console.log("hello");
        },
    },
    //生命周期钩子函数,可以在这里发送axios请求
    created() {
        this.init();
        console.log("created生命周期钩子函数");
     },
    //生命周期钩子函数,挂载后
    mounted() {
        console.log("mounted生命周期钩子函数");
     },
};
</script>
<style scoped></style>