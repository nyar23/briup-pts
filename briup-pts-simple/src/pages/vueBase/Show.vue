<template>
    <div>
        <!-- 控制元素的可见性 -->
        <div v-if="isLogin">原神</div>
        <div v-else>请登录</div>
        <div v-show="isLogin">启动！！！</div>
        <button @click="isLogin = true">启动！</button>
        <br>
        <div>{{ article }}</div>
        <div v-html="article"></div>

        <h3>组件的使用</h3>
        <my-com></my-com>
    </div>
</template>

<script>
import MyCom from '@/components/MyCom/index.vue';
export default {
    components: {
        "my-com":MyCom,
    },
    data() {
        return {
            isLogin: false,
            article: "<div><h3>标题</h3><span>标题</span><span>文章内容</span></div>"
        };
    },
    computed: {},
    methods: {},
    beforeCreate() {
        console.log("beforeCreate");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("beforeMount");
    },
    mounted() {
        console.log("Mouted");
    },
    beforeUpdate() {
        console.log("beforeUpdate");
    },
    updated() {
        console.log("updated");
    },
    beforeDestroy() {
        console.log("beforeDestroy");
    },
    destroyed() {
        console.log("destroyed");
    },
};
</script>
<style scoped></style>