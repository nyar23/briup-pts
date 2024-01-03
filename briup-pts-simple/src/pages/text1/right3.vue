<template>
    <div>
        <div id="main3" style="width: 750px; height: 300px; margin-top: -50px;"></div>
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
                    data: [this.value[0], this.value[1], this.value[2], this.value[3], this.value[4], this.value[5],
                    this.value[6], this.value[7], this.value[8], this.value[9], this.value[10], this.value[11]],
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