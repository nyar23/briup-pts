<template>
    <div>
        <div id="main1" style="width: 250px; height: 250px;"></div>
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
        var chartDom = document.getElementById('main1');
        var myChart = echarts.init(chartDom);
        var option;

        let res = await get('/analysis/countDisease');
        // console.log(res.data);
        this.keys = Object.keys(res.data);
        // console.log(this.keys);
        for (let key in res.data) {
            if (res.data.hasOwnProperty(key)) {
                this.values.push(res.data[key]);
            }
        }

        // console.log(this.values);

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
                        { value: this.values[0], name: this.keys[0] },
                        { value: this.values[1], name: this.keys[1] },
                        { value: this.values[2], name: this.keys[2] },
                    ]
                }
            ]
        };

        option && myChart.setOption(option);
    }
};
</script>