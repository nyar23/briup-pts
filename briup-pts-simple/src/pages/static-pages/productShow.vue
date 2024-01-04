<!--
 * @Description: 产品展示页面
 * @Author: hd
-->

<template>
    <div>

        <!-- 导航栏 -->
        <div class="options-div">

            <div style="font-size: 30px; margin-left: 50px; color: green; font-family: sans-serif;">
                <i class="el-icon el-icon-pear"></i>
                <span>特色农产品销售</span>
            </div>



            <el-menu :default-active="activeIndex" class="custom-menu" mode="horizontal" @select="handleSelect"
                style="width:900px">
                <div class="container">
                    <el-input class="input" placeholder="请输入内容" style="width: 300px; height: 40px; border: solid 2px red;
                     margin-right: 0; border-right: none;"></el-input>
                    <el-button type="primary" icon="el-icon-search" style="width: 100px; height: 40px; border: solid 2px rgba(223, 4, 4, 0.932);
                     background-color: rgba(223, 4, 4, 0.932); margin-left: 0; border-left: none;">搜索</el-button>
                </div>
                <div class="menu-items-right">
                    <el-menu-item index="1">客服中心</el-menu-item>
                    <el-menu-item index="2">购物车</el-menu-item>
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">订单管理</el-menu-item>
                    <el-menu-item index="5">商品分类</el-menu-item>
                </div>
            </el-menu>
        </div>

        <!-- 走马灯 -->
        <div>
            <el-carousel :interval="4000" type="card" height="500px">
                <el-carousel-item v-for="(item, index) in images" :key="index">
                    <div>
                        <img :src="item.imageUrl" alt="" :style="{ width: '100%', height: 'auto' }">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <span class="title">
            <h1>精品推荐</h1>
        </span>


        <div class="product-grid">
            <div class="product">
                <img src="https://www.mroyal.cn/upload/191030101015999.jpg"
                    alt="Product Image">
                <h3>山东精品油桃</h3>
                <p>颗颗大果,又甜又脆</p>
                <p>12.99/3斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>19.99元/20斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.qXnnOBADnHYVOeTtFSYPjQHaEh?w=317&h=193&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>山东烟台苹果</h3>
                <p>颗颗来自山东原产地</p>
                <p>19.99元/5斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://tse4-mm.cn.bing.net/th/id/OIP-C.j6Sux0fgPYqnpuuHjRO2wQHaFH?w=275&h=190&c=7&r=0&o=5&pid=1.7"
                    alt="Product Image">
                <h3>正宗百色芒果</h3>
                <p>百色果农陆江发亲手种植</p>
                <p>$19.99</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>
        </div>
           
    </div>
</template>
<script>
export default {
    data() {
        return {
            input: "",


            images: [
                { imageUrl: 'http://8.134.137.44:7002/images/2024041704354903308.jpg' },
                { imageUrl: 'http://8.134.137.44:7002/images/2024041704354936974.jpg' },
                { imageUrl: 'http://8.134.137.44:7002/images/2024041704354954394.jpg' },
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
    margin: 20px;
    /* 菜单项默认靠右 */
}

.menu-items-right {
    display: flex;
    align-items: center;
    /* 菜单项垂直居中 */
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

.container {
    display: flex;
    margin-right: 200px;
}

.title {  
  text-align: center; /* 居中标题文本 */  
  color: #333; /* 标题文本颜色 */  
  font-size: 20px; /* 标题文本大小 */  
  font-weight: bold; /* 标题文本加粗 */  
  margin-bottom: 10px; /* 标题下方边距 */  
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
    margin: 20px;
}

.product-grid .product {
    border: 1px solid #ccc;
    padding: 10px;
}

.product-grid .product img {
    width: 100%;
    height: auto;
}
.product-grid .product img {    
  width: 200px; /* 设置图片的宽度为200px */  
  height: 200px; /* 设置图片的高度为200px */  
  object-fit: cover; /* 保持图片的纵横比，同时填充整个元素区域 */  
} 
</style>