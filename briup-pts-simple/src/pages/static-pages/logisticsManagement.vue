<!--
 * @Description: 物流管理页面
 * @Author: ljf
-->
<template>
    <!-- 导航页 -->
    <div class="no-margin">
        <p class="background-size">物流管理页面
            <el-button class="my-button" style="float: right;" type="info" icon="el-icon-message" circle></el-button>
            <el-button class="my-button" style="float: right;" icon="el-icon-search" circle></el-button>
        </p>

        <div class="no-margin">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="配送员管理" name="first">

                    <!-- 表格 -->
                    <el-table :data="tableData" height="500" border style="width: 100%">
                        <el-table-column prop="id" label="工号" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="people" label="性别" width="180">
                        </el-table-column>
                        <el-table-column prop="email" label="邮箱" width="180">
                        </el-table-column>
                        <el-table-column prop="ph" label="手机号" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="家庭地址">
                        </el-table-column>
                        <el-table-column prop="set" label="操作" width="180">
                            <el-button type="text">移除</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">详情</el-button>
                        </el-table-column>
                    </el-table>

                    <!-- 页码 -->
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                    </div>

                </el-tab-pane>
                <el-tab-pane label="订单处理" name="two">

                    <el-table :data="tableDataku" height="500" border style="width: 100%">
                        <el-table-column prop="id" label="订单编号" width="180">
                        </el-table-column>
                        <el-table-column prop="ph" label="订单批次" width="180">
                        </el-table-column>
                        <el-table-column prop="people" label="订单量" width="180">
                        </el-table-column>
                        <el-table-column prop="date" label="订单日期" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="该订单负责人" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="该订单仓库">
                        </el-table-column>
                        <el-table-column prop="set" label="操作" width="180">
                            <el-button type="text">移除</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">详情</el-button>
                        </el-table-column>
                    </el-table>

                    <!-- 页码 -->
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                    </div>

                </el-tab-pane>

                <el-tab-pane label="配送管理" name="four">
                    <el-table :data="tableDatapei" height="500" border style="width: 100%">
                        <el-table-column prop="id" label="配送产品名称" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="配送产品批次" width="180">
                        </el-table-column>
                        <el-table-column prop="people" label="配送出发时间" width="180">
                        </el-table-column>
                        <el-table-column prop="email" label="配送负责人" width="180">
                        </el-table-column>
                        <el-table-column prop="ph" label="配送负责人电话号码" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="配送目的地址">
                        </el-table-column>
                        <el-table-column prop="set" label="操作" width="180">
                            <el-button type="text">移除</el-button>
                            <el-button type="text">修改</el-button>
                            <el-button type="text">详情</el-button>
                        </el-table-column>
                    </el-table>

                    <!-- 页码 -->
                    <div class="block">
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100"
                            layout="total, sizes, prev, pager, next, jumper" :total="400">
                        </el-pagination>
                    </div>
                </el-tab-pane>



            </el-tabs>

        </div>
        <div></div>
        <div></div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            // 司机管理表格
            tableData: [{
                id: '001',
                people: '男',
                date: '2016-05-03',
                name: '戴弘毅',
                email: 'i7imVLxPjH@gmail.com',
                ph: '15887151245',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '江西省上饶市婺源县蚺城街道通和路32号集贤小区3栋3单元302'
            }, {
                id: '002',
                date: '2016-05-02',
                name: '朱意远',
                people: '男',
                email: 'UaWzG@gmail.com',
                ph: '16632681860',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '广东省佛山市高明区荷城街道文竹路172-2号金城港溢湾14栋1单元1003室'
            }, {
                id: '003',
                date: '2016-05-04',
                name: '苏惠',
                people: '女',
                email: '3nSY3YdmoVdjzm@gmail.com',
                ph: '15663834488',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '江西省新余市分宜县分宜镇钤山西路193号钤山雅居7-1-2003号'
            }, {
                id: '004',
                date: '2016-05-01',
                name: '邵雅志',
                people: '男',
                email: 'a6e0zgjtz@gmail.com',
                ph: '15676356281',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '湖南省郴州市北湖区涌泉街道万华路242号万华新园14栋'
            }, {
                id: '005',
                date: '2016-05-08',
                name: '印涵',
                people: '女',
                email: 'goZO2xGmI@gmail.com',
                ph: '14592885409',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '湖南省湘潭市岳塘区建设路街道兴和巷奋飞一佰小区7号楼'
            }, {
                id: '006',
                date: '2016-05-06',
                name: '杨颜',
                people: '女',
                email: 'NcfxcC@gmail.com',
                ph: '13409944621',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '河南省洛阳市偃师市槐新街道商都路五三八小区'
            }, {
                id: '007',
                date: '2016-05-07',
                name: '毛飞鹏',
                people: '男',
                email: 'hQrVKAYrY8dm@gmail.com',
                ph: '17254005769',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '黑龙江省齐齐哈尔市甘南县甘南镇建设路海澜小镇小区9栋3单元103号'
            },{
                id: '008',
                date: '2016-05-07',
                name: '傅翰采',
                people: '男',
                email: 'xIgp10D7buk1j@gmail.com',
                ph: '15926015289',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '山西省大同市平城区水泊寺街道文兴路金水南源1号楼3单元602'
            }],


            // -------------------订单管理表格----------------------
            tableDataku: [{
                id: '001',
                people: '男',
                date: '2023-12-03',
                name: '戴弘毅',
                email: 'i7imVLxPjH@gmail.com',
                ph: '2023年12月第一批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '江西省上饶市婺源县蚺城街道通和路32号集贤小区3栋3单元302'
            }, {
                id: '002',
                date: '2024-01-02',
                name: '朱意远',
                people: '男',
                email: 'UaWzG@gmail.com',
                ph: '2024年1月第一批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '广东省佛山市高明区荷城街道文竹路172-2号金城港溢湾14栋1单元1003室'
            }, {
                id: '003',
                date: '2024-01-04',
                name: '苏惠',
                people: '女',
                email: '3nSY3YdmoVdjzm@gmail.com',
                ph: '2024年1月第二批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '江西省新余市分宜县分宜镇钤山西路193号钤山雅居7-1-2003号'
            }, {
                id: '004',
                date: '2023-12-01',
                name: '邵雅志',
                people: '男',
                email: 'a6e0zgjtz@gmail.com',
                ph: '2023年12月第一批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '湖南省郴州市北湖区涌泉街道万华路242号万华新园14栋'
            }, {
                id: '005',
                date: '2023-12-08',
                name: '印涵',
                people: '女',
                email: 'goZO2xGmI@gmail.com',
                ph: '2023年12月第一批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '湖南省湘潭市岳塘区建设路街道兴和巷奋飞一佰小区7号楼'
            }, {
                id: '006',
                date: '2024-01-06',
                name: '杨颜',
                people: '女',
                email: 'NcfxcC@gmail.com',
                ph: '2024年1月第二批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '河南省洛阳市偃师市槐新街道商都路五三八小区'
            }, {
                id: '007',
                date: '2024-01-07',
                name: '毛飞鹏',
                people: '男',
                email: 'hQrVKAYrY8dm@gmail.com',
                ph: '2024年1月第二批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '黑龙江省齐齐哈尔市甘南县甘南镇建设路海澜小镇小区9栋3单元103号'
            },{
                id: '008',
                date: '2024-01-01',
                name: '傅翰采',
                people: '男',
                email: 'xIgp10D7buk1j@gmail.com',
                ph: '2024年1月第一批',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '山西省大同市平城区水泊寺街道文兴路金水南源1号楼3单元602'
            }],




            // -------------------配送管理表格----------------------
            tableDatapei: [{
                id: '百色芒果',
                // people: '男',
                people: '2023-12-04',
                name: '2023年12月第一批',
                email: '戴弘毅',
                ph: '15887151245',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '北京市朝阳区世纪大道123号'
            }, {
                id: '横县鱼生',
                people: '2024-01-02',
                name: '2024年1月第一批',
                // people: '男',
                email: '朱意远',
                ph: '16632681860',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '上海市浦东新区世纪公园路88号'
            }, {
                id: '罗城牛肉条',
                people: '2024-01-04',
                name: '2024年1月第二批',
                // people: '男',
                email: '苏惠',
                ph: '15663834488',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '广州市天河区珠江新城华明路3号'
            }, {
                id: '梧州龟苓膏',
                people: '2023-12-01',
                name: '2023年12月第一批',
                // people: '男',
                email: '邵雅志',
                ph: '15676356281',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '深圳市南山区科技园路9号'
            }, {
                id: '北海沙虫',
                people: '2024-01-02',
                name: '2024年1月第一批',
                // people: '男',
                email: '印涵',
                ph: '14592885409',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '武汉市江汉区建设大道888号'
            }, {
                id: '贺州及岑',
                people: '2024-01-05',
                name: '2024年1月第二批',
                // people: '男',
                email: '杨颜',
                ph: '13409944621',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '成都市锦江区太古里44号'
            }, {
                id: '南宁甘蔗',
                people: '2023-12-07',
                name: '2023年12月第一批',
                // people: '男',
                email: '毛飞鹏',
                ph: '17254005769',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '西安市莲湖区大雁塔路77号'
            }, {
                id: '百色荔枝',
                people: '2024-01-02',
                name: '2024年1月第一批',
                date: '男',
                email: '傅翰采',
                ph: '15926015289',
                iph: 'http://8.134.137.44:7002/images/2024041704358359899.jpg',
                address: '重庆市渝北区新牌坊一路88号'
            },],



            // -----------------------------分页---------------------------
            currentPage1: 5,
            currentPage2: 5,
            currentPage3: 5,
            currentPage4: 4,


            // -------------------------------------------------------------------

            activeName: 'first',
        };
    },
    computed: {},

    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

        // 分页
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },

    },

    created() { },
    mounted() { }
};
</script>
<style scoped>
.background-size {
    background-size: 200px 100px;
    /* 设置背景尺寸为200像素宽和100像素高 */
    background-color: rgb(7, 117, 89);
    /* 设置背景颜色 */
    font-size: 25px;
    color: #f3eeede9;
    /* 设置字体颜色为白色 */
    padding: 40px;
    /* 根据需要设置内边距 */
}

.no-margin {
    margin: 0;
    padding: 0;
}

.my-button {
    margin-right: 5px;
    /* 增加右边距 */
    margin-left: 5px;
    /* 增加左边距 */
}
</style>