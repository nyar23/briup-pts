<template>
    <div>双向数据绑定
        <h2>表单双向数据绑定</h2>
        {{ form }}
        <br>
        用户名:<input type="text" v-model="form.username">
        <br>
        密码:<input type="password" v-model="form.password">
        <br>
        <button @click="changeUsername">修改数据模型中的数据</button>
        <h2>属性渲染</h2>
        <div title="hello">使用固定字符串做提示</div>
        <div :title="form.username">使用数据模型中的数据做提示</div>
        <h2>列表渲染</h2>
        <div>
            <div>展示商品数据</div>
            <div class="product-container">
                <div class="product-item" v-for="item in products" :key="item.id">
                    <div>商品名字:{{ item.name }}</div>
                    <div>商品价格:{{ item.price }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // username: "tom",
            // password: ""
            form: {
                username: "tom",
                password: "",
            },
            msg: "",
            products: [{
                id: 1,
                name: "大衣",
                price: 100
            },
            {
                id: 2,
                name: "鞋子",
                price: 120,
            },
            {
                id: 3,
                name: "裤子",
                price: 1399,
            }],

        };
    },
    computed: {},
    methods: {
        changeUsername() {
            this.form.username = "bob";
        },
    },
    created() { },
    mounted() { }
};
</script>
<style scoped>
.product-container {
    height: 200px;
    width: 70%;
    display: flex;
    background-color: white;
    justify-content: space-evenly;
    margin: 0 auto;
}

.product-item {
    flex-basis: 200px;
    background-color: cyan;
    border: 1px solid #444;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
}
</style>