<template>
    <div>
        <div id="main2" style="width: 250px; height: 250px;margin-top: 0px;"></div>
    </div>
</template>
 
<script>
import * as echarts from "echarts";
import { get } from '@/utils/request';

export default {

    data() {
        return {
            keys: [],
            values: []
        }
    },

    async mounted() {
        var chartDom = document.getElementById('main2');
        var myChart = echarts.init(chartDom);
        var option;

        let res = await get('/analysis/indexCount');
        // console.log(res.data);
        this.keys = Object.keys(res.data);
        // console.log(this.keys);
        for (let key in res.data) {
            if (res.data.hasOwnProperty(key)) {
                this.values.push(res.data[key]);
            }
        }

        console.log(this.values);

        option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    // name: 'Access From',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: 20,
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: 300, name: '差评' },
                        { value: 800, name: '中评' },
                        { value: 12681, name: '好评' },
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    }
};
</script>