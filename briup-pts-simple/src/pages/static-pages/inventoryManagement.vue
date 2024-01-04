<!--
 * @Description: 库存管理页面
 * @Author: yjc
-->
<template>
    <div class="base">
        <div>
            <!-- 搜索栏 -->
            <div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="库存查询" name="first">
                        <div>
                            <div class="first">
                                <el-button type="primary" icon="el-icon-edit" circle>登记</el-button>
                                <el-button type="danger" icon="el-icon-delete" circle>删除</el-button>
                                <el-input style="width: 130px;" placeholder="请输入货物名称" v-model="input" clearable> </el-input>
                                <el-select style="width: 130px;" v-model="value" placeholder="请选择蔬菜或水果" clearable>
                                    <el-option v-for="item in options" :key="item.value" :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-button icon="el-icon-search" circle></el-button>

                            </div>



                        </div>
                        <el-table :data="tableData" style="width: 100%">
                            <el-table-column type="expand">
                                <template slot-scope="props">
                                    <el-form label-position="left" inline class="demo-table-expand">
                                        <el-form-item label="货物名称">
                                            <span>{{ props.row.name }}</span>
                                        </el-form-item>
                                        <el-form-item label="所属仓库">
                                            <span>{{ props.row.shop }}</span>
                                        </el-form-item>
                                        <el-form-item label="货物 ID">
                                            <span>{{ props.row.id }}</span>
                                        </el-form-item>
                                        <el-form-item label="仓库 ID">
                                            <span>{{ props.row.shopId }}</span>
                                        </el-form-item>
                                        <el-form-item label="货物分类">
                                            <span>{{ props.row.category }}</span>
                                        </el-form-item>
                                        <el-form-item label="仓库地址">
                                            <span>{{ props.row.address }}</span>
                                        </el-form-item>
                                        <el-form-item label="货物描述">
                                            <span>{{ props.row.desc }}</span>
                                        </el-form-item>
                                        <el-form-item label="货物库存">
                                            <span>{{ props.row.weight }}</span>
                                        </el-form-item>
                                    </el-form>
                                </template>
                            </el-table-column>
                            <el-table-column label="货物批次 ID" prop="id">
                            </el-table-column>
                            <el-table-column label="货物名称" prop="name">
                            </el-table-column>
                            <el-table-column label="所属仓库" prop="shop">
                            </el-table-column>

                        </el-table>
                        <!-- 分页 -->
                        <div class="block">
                            <el-pagination background layout="prev, pager, next" :total="30">
                            </el-pagination>
                        </div>

                    </el-tab-pane>



                    <el-tab-pane label="库存预警" name="second">

                        <div>
                            <el-table :data="inventory" @row-click="handleRowClick">
                                <el-table-column prop="name" label="货物名称"></el-table-column>
                                <el-table-column prop="spec" label="仓库"></el-table-column>
                                <el-table-column prop="unit" label="单位"></el-table-column>
                                <el-table-column prop="quantity" label="库存数量"></el-table-column>
                                <el-table-column prop="check" label="检查">
                                    <el-button @click="checkInventory">检查库存</el-button>
                                </el-table-column>
                            </el-table>

                        </div>
                        <!-- 分页 -->
                        <div class="red">
                            <el-pagination background layout="prev, pager, next" :total="30">
                            </el-pagination>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>









<script>
export default {
    data() {
        return {
            inventory: [
                { name: '百色正宗芒果', spec: '一号仓库', unit: 'kg', quantity: 3000 },
                { name: '南乡鸭', spec: '二号仓库', unit: 'kg', quantity: 1000 },
                { name: '荔浦芋', spec: '三号仓库', unit: 'kg', quantity: 2000 },
                { name: '沙田柚', spec: '一号仓库', unit: 'kg', quantity: 5000 },
                { name: '永福罗汉果', spec: '一号仓库', unit: 'kg', quantity: 5000 },
                // 其他商品数据...  
            ],
            currentQuantity: 0,
            warningLevel: 0, // 预警值，如库存数量的 50% 




            input: '',

            options: [{
                value: '蔬菜',
                label: '蔬菜'
            }, {
                value: '水果',
                label: ''
            }, {
                value: '肉类',
                label: '肉类'
            }
            ],
            value: '',

            tableData: [{
                id: '12987122',
                name: '百色正宗芒果',
                category: '水果',
                desc: '核小肉厚、肉质嫩滑、纤维少、口感清甜爽口',
                address: '上海市普陀区真北55路',
                shop: '一号仓库',
                shopId: '10333',
                weight: '3000kg'

            }, {
                id: '12987123',
                name: '南乡鸭',
                category: '肉类',
                desc: '皮薄、皮下脂肪少，肉呈红色，切面有光泽   ',
                address: '上海市普陀区真北56路',
                shop: '二号仓库',
                shopId: '10334',
                weight: '1000kg'
            }, {
                id: '12987124',
                name: '荔浦芋',
                category: '蔬菜',
                desc: '营养丰富、肉质酥软、味道芬芳',
                address: '上海市普陀区真北57路',
                shop: '三号仓库',
                shopId: '10335',
                weight: '2000kg'
            }, {
                id: '12987125',
                name: '沙田柚',
                category: '水果',
                desc: '果肉脆嫩,非常多汁',
                address: '上海市普陀区真北55路',
                shop: '一号仓库',
                shopId: '10333',
                weight: '5000kg'
            }, {
                id: '12987126',
                name: '永福罗汉果',
                category: '水果',
                desc: '果肉多汁、细滑、鲜爽，口感清甜适中',
                address: '上海市普陀区真北55路',
                shop: '一号仓库',
                shopId: '10333',
                weight: '5000kg'
            }]






        };
    },
    computed: {},
    methods: {
        handleRowClick(row, column, event) {
            this.currentQuantity = row.quantity;
        },
        checkInventory() {
            if (this.currentQuantity < this.warningLevel) {
                this.$notify({
                    title: '库存预警',
                    message: `当前库存量低于${this.warningLevel}%`,
                    type: 'warning'
                });
            } else {
                this.$notify({ message: '当前库存量正常' });
            }
        }

    },
    created() { },
    mounted() {

    }
};
</script>
<style scoped>
.base {
    width: 100%;
    height: 500px;
    /* background-color: aqua; */
    background-image: url(../../assets/background.jpg);
}

.first {
    display: flex;
    justify-content: flex-end;
    padding-right: 10px;
}

.first>* {
    margin-left: 10px;
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

.block {
    text-align: right;
}

.red {
    text-align: right;
}
</style>