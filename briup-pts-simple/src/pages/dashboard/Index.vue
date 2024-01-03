<template>
  <div class="background" style="width: 100%; height: 100%">
    <div class="title">智慧农业</div>
    <div class="lunbo"><child-component-0></child-component-0></div>
    <div class="right1"><child-component-1></child-component-1></div>
    <div class="right2"><child-component-2></child-component-2></div>
    <div class="right3"><child-component-3></child-component-3></div>
    <div class="right4"><child-component-4></child-component-4></div>
  </div>
</template>
 
<script>
import ChildComponent0 from '@/pages/text1/banner.vue';
import ChildComponent1 from '@/pages/text1/right1.vue';
import ChildComponent2 from '@/pages/text1/right2.vue';
import ChildComponent3 from '@/pages/text1/right3.vue';
import ChildComponent4 from '@/pages/text1/right4.vue';
// import Swiper from 'swiper';
// import 'swiper/dist/css/swiper.min.css';

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
  background-image: url(../../assets/bcg/u=4014765096,45504095&fm=253&fmt=auto&app=120&f=JPEG.webp);
  background-size: 100% 100%;
}

.lunbo {
  width: 700px;
  height: 500px;
  position: absolute;
  top: 150px;
  left: 10px;
  /* background-color: #1e1212; */
  overflow-x: hidden;
  overflow-y: auto;
}

.right1 {
  width: 320px;
  height: 250px;
  position: absolute;
  top: 0px;
  right: 320px;
  /* background-color: #1e1212; */
  overflow-x: hidden;
  overflow-y: auto;
}

.right2 {
  width: 320px;
  height: 250px;
  position: absolute;
  top: 0px;
  right: 10px;
  /* background-color: #1e1212; */
  overflow-x: hidden;
  overflow-y: auto;
}

.right3 {
  width: 700px;
  height: 250px;
  position: absolute;
  top: 230px;
  right: 0px;
  /* background-color: #1e1212; */
  overflow-x: hidden;
  overflow-y: auto;
}

.right4 {
  width: 700px;
  height: 300px;
  position: absolute;
  top: 450px;
  right: 0px;
  /* background-color: #1e1212; */
  overflow-x: hidden;
  overflow-y: auto;
}

.title {
  position: absolute;
  top: 20px;
  left: 120px;
  width: 450px;
  height: 100px;
  color: rgb(173, 12, 12);
  font-size: 60px;
  text-align: center;
  font-style: italic;
  /* background-color: #1e1212; */
}
</style>