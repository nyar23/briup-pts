<!--
 * @Description: 订单管理页面
 * @Author: ljj
-->
<template>
    <div class="title-div" style="background-image: url('http://8.134.137.44:7002/images/2024041704359427538.jpg');">订单管理页面
        <div class="all-div">
            <!-- 头部 -->
            <div class="haoa">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="未付款" name="first"></el-tab-pane>
                    <el-tab-pane label="已付款" name="second"></el-tab-pane>
                    <el-tab-pane label="已发货" name="third"></el-tab-pane>
                    <el-tab-pane label="已签收" name="fourth"></el-tab-pane>
                </el-tabs>
            </div>
            <div class="head-div">
                <el-date-picker class="input-i" v-model="value" align="right" type="date" placeholder="选择日期"
                    :picker-options="pickerOptions">
                </el-date-picker>
                <el-input placeholder="请输入关键字" v-model="input2" class="input-i">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                </el-input>
                <el-button type="primary" icon="el-icon-search">搜索</el-button>
            </div>
            <!-- 表格 -->
            <div>
                <el-table :data="tableData" style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" inline class="demo-table-expand">
                                <el-form-item label="订单编号">
                                    <span>{{ props.row.oid }}</span>
                                </el-form-item>
                                <el-form-item label="所属店铺">
                                    <span>{{ props.row.shop }}</span>
                                </el-form-item>
                                <el-form-item label="商品名称">
                                    <span>{{ props.row.pname }}</span>
                                </el-form-item>
                                <el-form-item label="店铺 ID">
                                    <span>{{ props.row.shopId }}</span>
                                </el-form-item>
                                <el-form-item label="买家ID">
                                    <span>{{ props.row.uid }}</span>
                                </el-form-item>
                                <el-form-item label="购买数量">
                                    <span>{{ props.row.quality }}</span>
                                </el-form-item>
                                <el-form-item label="实付款">
                                    <span>{{ props.row.money }}</span>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="订单编号" prop="oid">
                    </el-table-column>
                    <el-table-column label="商品名称" prop="pname">
                    </el-table-column>
                    <el-table-column label="买家ID" prop="uid">
                    </el-table-column>
                    <el-table-column label="状态" prop="zt">
                    </el-table-column>
                    <el-table-column label="下单时间" prop="otime" width="100">
                    </el-table-column>
                    <el-table-column fixed="right" label="商品图片" width="100">
                        <template slot-scope="scope">
                            <el-button @click="watchImages(scope.row)" type="text" size="small">查看</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作" width="100">
                        <template slot-scope="scope">
                            <el-button type="text" size="small">售后</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <!-- 分页 -->
            <div class="fenye">
                <el-pagination background layout="prev, pager, next" :total="1000">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: 'second',
            input1: "",
            input2: "",
            value: "",
            tableData: [{
                oid: '00001',
                shop: '江发水果店',
                pname: '百色芒果',
                shopId: 'sp00001',
                uid: '114514',
                quality: '10KG',
                money: '10$',
                otime: '2024-1-4',
                imagePath: 'http://8.134.137.44:7002/images/2024041704357874346.jpg',
                zt: '已付款',
            },
            {
                oid: '00002',
                shop: '东哥农产品专卖店',
                pname: '藤县无籽西瓜',
                shopId: 'sp00002',
                uid: '114515',
                quality: '5KG',
                money: '6.6$',
                otime: '2024-1-3',
                imagePath: 'http://8.134.137.44:7002/images/2024041704358486419.jpg',
                zt: '未付款',
            },
            {
                oid: '00003',
                shop: '北海海鲜店',
                pname: '六头黑金鲍',
                shopId: 'sp00002',
                uid: '114516',
                quality: '10KG',
                money: '9999$',
                otime: '2024-1-2',
                imagePath: 'http://8.134.137.44:7002/images/2024041704358515233.jpg',
                zt: '已签收',
            },
            {
                oid: '00004',
                shop: '贺州咕咕鸡饲料鸡旗舰店',
                pname: '批发饲料鸡',
                shopId: 'sp00003',
                uid: '114517',
                quality: '200KG',
                money: '100$',
                otime: '2024-1-1',
                imagePath: 'http://8.134.137.44:7002/images/2024041704358503164.jpg',
                zt: '已付款',
            },
            {
                oid: '00005',
                shop: '南宁烧鸭唯一指定供应商-肥羊肉鸭',
                pname: '冷冻鸭肉',
                shopId: 'sp00004',
                uid: '114518',
                quality: '1000KG',
                money: '200$',
                otime: '2023-12-31',
                imagePath: 'http://8.134.137.44:7002/images/2024041704358526983.jpg',
                zt: '已发货',
            },
            ],
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts: [{
                    text: '今天',
                    onClick(picker) {
                        picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24);
                        picker.$emit('pick', date);
                    }
                }, {
                    text: '前天',
                    onClick(picker) {
                        const date = new Date();
                        date.setTime(date.getTime() - 3600 * 1000 * 24 * 2);
                        picker.$emit('pick', date);
                    }
                }]
            },
        };
    },
    computed: {},
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        watchImages(row) {
            this.$alert('<img src="' + row.imagePath + '" width="400px" height="400px" />', '商品图片', {
                dangerouslyUseHTMLString: true,
                confirmButtonText: '关闭',
            });
        }
    },
    created() { },
    mounted() { }
};
</script>
<style scoped>
/* .haoa {
    color: bisque;
} */

.fenye {
    display: flex;
    padding: 30px;
    justify-content: center;
}

.demo-table-expand {
    font-size: 0;
}

.demo-table-expand label {
    width: 90px;
    color: #99a9bf;
}

.demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
}

.title-div {
    text-align: center;
    font-family: "微软雅黑";
    font-size: xx-large;
    padding-top: 20px;
    /* color: blue */
}

.all-div {
    padding: 50px;
}

.head-div {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
}

.input-i {
    width: 200px;
    margin-right: 10px;
}
</style>