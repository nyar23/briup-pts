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
                <img src="https://www.mroyal.cn/upload/191030101015999.jpg" alt="Product Image">
                <h3>山东精品油桃</h3>
                <p>颗颗大果,又甜又脆，原生态种植绿色种植，不打农药、不打蜡、不催熟</p>
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
                <p>百色果农陆江发精心呵护100天,吃住都在果园,保证颗颗芒果品质超群</p>
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
                <p>果实个大、果形正，色泽鲜艳红润，外表光滑细腻，口味酸甜适口</p>
                <p>19.99元/5斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://ts2.cn.mm.bing.net/th?id=OIP-C.bfU0a2OaV8lqn-MTUDgRJAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                    alt="Product Image">
                <h3>庆云特产大叶香菜</h3>
                <p>植株高大，嫩株质地柔嫩，香味浓，品质好，价格便宜，性价比超高</p>
                <p>2.99元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpg/details/2023/12/20/6cc7d41a9eb248eda282460265b8e57b.jpg?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cD
                ovL2ltZy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>湖北鲜活黄鳝鱼批发</h3>
                <p>鲜活黄鳝鱼 60斤起批发 发货手段世界领先，保证到货条条鲜活</p>
                <p>36元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpg/2023/12/17/b8f69422482a4d118ad1ebf4e0a9944b.jpg?
                imageView2/2/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0
                cDovL2ltZy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>云南冬季奶油草莓</h3>
                <p>奶茶蛋糕烘焙新鲜酸甜水果现摘批发，现摘现发，价格便宜，买到就是赚到</p>
                <p>7元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpeg/head/2022/01/12/e8f6b20e1a584b6ba34d8cfe817ac4ff.jpeg?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2ltZ
                y5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>京山土鸡蛋</h3>
                <p>京山乌鸡蛋基地直供，乌骨鸡吃玉米小麦稻谷，蒸煮煎炒都为金黄</p>
                <p>265元/箱(33斤)</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpg/head/2022/10/04/1465d990cb8e4508b68bd903e0339af7.jpg?
                imageView2/2/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2l
                tZy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>对虾</h3>
                <p>中国对虾顺丰包邮 对虾青岛盐冻虾单冻虾一箱拒绝水冻冰坨虾</p>
                <p>76元/箱</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/png/head/2022/02/22/f63d3840cfb940df991803065dec48ad.png?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2l
                tZy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>小青龙龙虾</h3>
                <p>小青龙龙虾 二级冷冻小青龙越南青龙仔预制作菜烧烤自助餐食材</p>
                <p>188元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpeg/head/2022/10/21/1fef4bda7fbe46a794b3826ce871f365.jpeg?
                imageView2/2/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2lt
                Zy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>宣威火腿</h3>
                <p>宣威火腿细心、精心、用心，品质永保称心现货毛腿 火腿年限不一样价格也就不一样</p>
                <p>28元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpg/head/2022/01/11/201007875c124e92a28294c1a9a185e1.jpg?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2lt
                Zy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>精品生蚝</h3>
                <p>净化蚝 全壳三倍体精品乳山生蚝产地直发乳山生蚝实力厂家，强烈推荐商家</p>
                <p>5元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/png/head/2021/06/27/c9cd5089b6544748a65005e09e581650.png?
                imageView2/2/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2lt
                Zy5jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>放养黑山羊</h3>
                <p>努比亚山羊，山羊批发，放养黑山羊，抵抗力强，可上门看货，大小任选。</p>
                <p>900元/只</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/jpeg/head/2020/04/05/b7b912a5c73b401880c9fcd82b5f8867.jpeg?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2ltZy5jbmh
                uYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>宁夏枸杞</h3>
                <p>红枸杞，宁夏中宁枸杞，西北特产宁夏特产，宁夏枸杞500克一斤袋</p>
                <p>25元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>

            <div class="product">
                <img src="https://image.cnhnb.com/image/png/head/2020/09/10/b93a4f39ed524b73bafb1fef76699409.png?
                imageView2/0/w/650/format/jpg/ignore-error/1|imageMogr2/auto-orient|watermark/3/image/aHR0cDovL2ltZy5
                jbmhuYi5jb20vd20ucG5n/gravity/SouthEast/dx/10/dy/10/ws/0.14/wst/2" alt="Product Image">
                <h3>丹东新鲜板栗</h3>
                <p>油栗 丹东新鲜板栗菜板栗老树油栗物流到门，专业电商一件代发</p>
                <p>4.2元/斤</p>
                <div>
                    <button style="margin: 2px;">详细</button>
                    <button style="margin: 2px;">加入购物车</button>
                    <button style="margin: 2px;">购买</button>
                </div>
            </div>
        </div>

        <!-- 多快好省 -->
        <div class="parent" margin="10px">
            <div class="child"><img src="http://8.134.137.44:7002/images/2024041704358165695.png" alt=""
                    style="height: 50px; width: 50px;">
                <h3>品类齐全，轻松购物</h3>
            </div>

            <div class="child"><img src="http://8.134.137.44:7002/images/2024041704358187827.png" alt=""
                    style="height: 50px; width: 50px;">
                <h3>多仓直发，极速配送</h3>
            </div>

            <div class="child"><img src="http://8.134.137.44:7002/images/2024041704358198895.png" alt=""
                    style="height: 50px; width: 50px;">
                <h3>正品行货，精致服务
                </h3>
            </div>

            <div class="child"><img src="http://8.134.137.44:7002/images/2024041704358216334.png" alt=""
                    style="height: 50px; width: 50px;">
                <h3>天天低价，畅选无忧</h3>
            </div>

        </div>

        <!-- 页尾导航栏 -->
        <div class="parent" style="margin: 10px;">

            <div class="child">
                <h2>购物指南</h2>
                <a href="" style="margin: 10px;">购物流程</a><br>
                <a href="" style="margin: 10px;">会员介绍</a><br>
                <a href="" style="margin: 10px;">常见问题</a>
            </div>

            <div class="child">
                <h2>售后服务</h2>
                <a href="">售后政策</a><br>
                <a href="">价格保护</a><br>
                <a href="">退款说明</a><br>
                <a href="">取消订单</a>
            </div>

            <div class="child">
                <h2>支付方式</h2>
                <a href="">货到付款</a><br>
                <a href="">在线支付</a><br>
                <a href="">分期支付</a>
            </div>

            <div class="child">
                <h2>配送方式</h2>
                <a href="">上门自提</a><br>
                <a href="">配送服务查询</a><br>
                <a href="">配送费收取标准</a>
            </div>

            <div class="child">
                <h2>特色服务</h2>
                <a href="">技术支持</a><br>
                <a href=""></a>
            </div>

        </div>

        <div align="center">
            <span >关于我们  |  联系我们  |  联系客服  |  合作招商  |  商家帮助  |  营销中心  |  友情链接  |  销售联盟  |  风险监测  |  质量报告  |  隐私政策</span>
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
    text-align: center;
    /* 居中标题文本 */
    color: #333;
    /* 标题文本颜色 */
    font-size: 20px;
    /* 标题文本大小 */
    font-weight: bold;
    /* 标题文本加粗 */
    margin-bottom: 10px;
    /* 标题下方边距 */
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
    width: 200px;
    /* 设置图片的宽度为200px */
    height: 200px;
    /* 设置图片的高度为200px */
    object-fit: cover;
    /* 保持图片的纵横比，同时填充整个元素区域 */
}

.button-div {
    margin-bottom: 10px;
}

.container {
    display: flex;
    justify-content: space-between;
    /* 水平居中 */
}

.parent {
    height: 135px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.child {
    width: 150px;
    height: 150px;
    margin: 10px;
}</style>