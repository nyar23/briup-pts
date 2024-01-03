<template>
    <div>
        <h3>watch监听器</h3>
        用户名:<input type="text" v-model="username">
        {{ username }}
        <br>
        分页数据:{{ pageParams }}
        <button @click="pageParams.pageNum++">修改页码</button>
        <button @click="pageParams.pageSize += 10">修改每页条数</button>

        <h3>组件的使用</h3>
        <MyCom></MyCom>
    </div>
</template>

<script>
import MyCom from '@/components/MyCom/index.vue';
export default {
    components: {
      MyCom,  
    },
    data() {
        return {
            username: "",
            pageParams: {
                pageNum: 1,
                pageSize: 10
            }
        };
    },
    watch: {
        username() {
            console.log(this.username);
        },
        pageParams: {
            handler() {
                console.log(this.pageParams)
            },
            deep: true,
        }
    },
    computed: {},
    methods: {},
    created() { },
    mounted() { }
};
</script>
<style scoped></style>