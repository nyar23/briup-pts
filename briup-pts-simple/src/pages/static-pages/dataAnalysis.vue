<!--
 * @Description: 数据分析页面
 * @Author: sd
-->
<template>
    <div class="background" style="width: 100%; height: 100%">
        <div class="title">数据分析页面</div>
        <div class="banner1"><child-component-0></child-component-0>
        </div>
        <div class="button1"><child-component-1></child-component-1>
            <div class="a">库存数量</div>
        </div>
        <div class="button2"><child-component-2></child-component-2>
            <div class="b">好评占比</div>
        </div>
        <div class="button3"><child-component-3></child-component-3>
            <div class="c">订单数量</div>
        </div>
        <div class="button4"><child-component-4></child-component-4>
            <div class="d">新增用户数量</div>
        </div>
    </div>
</template>
 
<script>
import ChildComponent0 from '@/pages/text1/banner1.vue';
import ChildComponent1 from '@/pages/text1/button1.vue';
import ChildComponent2 from '@/pages/text1/button2.vue';
import ChildComponent3 from '@/pages/text1/button3.vue';
import ChildComponent4 from '@/pages/text1/button4.vue';


export default {
    components: {
        'child-component-0': ChildComponent0,
        'child-component-1': ChildComponent1,
        'child-component-2': ChildComponent2,
        'child-component-3': ChildComponent3,
        'child-component-4': ChildComponent4,
    },
    data() {
        return {
            childData: "传递给子组件的数据"
        }
    }
}
</script>

<style scoped>
.background {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: #f4f4f4;
    overflow-x: hidden;
    overflow-y: auto;
    opacity: 0.9;
    background-image: url(../../assets/bcg/u=2917502322\,1983535553&fm=253&fmt=auto&app=120&f=JPEG.webp);
    background-size: 100% 100%;
}

.title {
    position: absolute;
    top: 20px;
    left: 400px;
    width: 500px;
    height: 100px;
    color: rgb(173, 12, 12);
    font-size: 60px;
    text-align: center;
    font-style: italic;
    /* background-color: #1e1212; */
}

.banner1 {
    width: 1200px;
    height: 300px;
    position: absolute;
    top: 120px;
    left: 100px;
    /* background-color: #1e1212; */
    overflow-x: hidden;
    overflow-y: auto;
}

.button1 {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: 0px;
    left: 10px;
    /* background-color: #1e1212; */
    overflow-x: hidden;
    overflow-y: auto;
}

.a {
    position: absolute;
    width: 100px;
    height: 30px;
    left: 70px;
    bottom: 0px;
    /* background-color: black; */
    color: red;
    font-size: large;
    text-align: center;
    font-style: italic;
}

.b {
    position: absolute;
    width: 100px;
    height: 30px;
    left: 70px;
    bottom: 0px;
    /* background-color: black; */
    color: red;
    font-size: large;
    text-align: center;
    font-style: italic;
}

.c {
    position: absolute;
    width: 100px;
    height: 30px;
    left: 170px;
    bottom: 0px;
    /* background-color: black; */
    color: red;
    font-size: large;
    text-align: center;
    font-style: italic;
}

.d {
    position: absolute;
    width: 110px;
    height: 30px;
    left: 170px;
    bottom: 0px;
    /* background-color: black; */
    color: red;
    font-size: large;
    text-align: center;
    font-style: italic;
}

.button2 {
    width: 250px;
    height: 250px;
    position: absolute;
    bottom: 0px;
    left: 250px;
    /* background-color: #1e1212; */
    overflow-x: hidden;
    overflow-y: auto;
}

.button3 {
    width: 450px;
    height: 250px;
    position: absolute;
    bottom: 0px;
    left: 490px;
    /* background-color: #1e1212; */
    overflow-x: hidden;
    overflow-y: auto;
}

.button4 {
    width: 450px;
    height: 250px;
    position: absolute;
    bottom: 0px;
    right: 10px;
    /* background-color: #1e1212; */
    overflow-x: hidden;
    overflow-y: auto;
}
</style>