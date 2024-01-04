<template>
    <div>
        <div id="main4" style="width: 470px; height: 300px;margin-top: -50px;"></div>
    </div>
</template>
 
<script>
import * as echarts from "echarts";
import { get } from '@/utils/request';

export default {

    data() {
        return {
            name: [],
            value: []
        }
    },

    async mounted() {

        var chartDom = document.getElementById('main4');
        var myChart = echarts.init(chartDom);
        var option;

        let res = await get('/analysis/count');
        console.log(res.data);
        this.name = res.data.name
        this.value = res.data.value
        console.log(this.name);
        console.log(this.value);

        option = {
            xAxis: {
                type: 'category',
                data: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [200, 245, 547, 234, 346, 457, 583],
                    type: 'bar'
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

element.style {

    margin: -50px;
}
</style>