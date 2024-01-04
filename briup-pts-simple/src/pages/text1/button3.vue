<template>
    <div>
        <div id="main3" style="width: 470px; height: 300px; margin-top: -50px;"></div>
    </div>
</template>
 
<script>
import * as echarts from "echarts";
import { get } from '@/utils/request';

export default {

    data() {
        return {
            month: [],
            value: []
        }
    },

    async mounted() {

        var chartDom = document.getElementById('main3');
        var myChart = echarts.init(chartDom);
        var option;

        let res = await get('analysis/countSales');
        // console.log(res.data);
        this.month = res.data.name
        this.value = res.data.value

        option = {
            xAxis: {
                type: 'category',
                data: [this.month[0], this.month[1], this.month[2], this.month[3], this.month[4], this.month[5],
                this.month[6], this.month[7], this.month[8], this.month[9], this.month[10], this.month[11]]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [2341, 3455, 3421, 7764, 9532, 1234, 3563, 2135, 4354, 3241, 3466, 5098],
                    type: 'line'
                }
            ]
        };

        option && myChart.setOption(option);

    },

};
</script>

<style scoped>
.right1 {

    position: absolute;
    top: -10px;
    right: 0px;
    width: 600px;
    height: 300px;
}

/* ::v-deep .element.style {

    margin: -150px !important;
} */
</style>