
<template>
    <!-- Swiper -->
    <div class="focus">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href=""><img src="@/assets/img/u=174651498,1955415196&fm=253&fmt=auto&app=138&f=JPEG.webp"
                            alt=""></a>
                    <p>小狗</p>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="@/assets/img/u=2232023758,3962203133&fm=253&fmt=auto&app=138&f=JPEG.webp"
                            alt=""></a>
                    <p>关爱动物</p>
                </div>
                <div class="swiper-slide">
                    <a href=""><img src="@/assets/img/u=3822517053,1678234878&fm=253&fmt=auto&app=120&f=JPEG.webp"
                            alt=""></a>
                    <p>傻鸟</p>
                </div>

            </div>
            <!-- Add Pagination -->
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
    </div>
</template>

<script>
import Swiper from "swiper"
import '../../../node_modules/swiper/css/swiper.min.css'

export default {
    mounted() {
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        })
    }
};
</script>


<style scoped>
body {
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    padding: 0;
    width: 750px;
    margin: 200px auto;
}

.swiper-container {
    width: 600px;
    height: 500px;
    /* color: aqua; */
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    /* color: brown; */
    /* background: #fff; */
    flex-direction: column;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    transition: 300ms;
    transform: scale(0.8);
    opacity: .5;
}

/*当前选中的图片*/
.swiper-slide-active,
.swiper-slide-duplicate-active {
    transform: scale(1);
    z-index: 999;
    opacity: 1;
}

.swiper-slide a {
    width: 338px;
    height: 376px;
}

.swiper-slide a img {
    width: 100%;
    height: 100%;
}

.swiper-slide p {
    width: 338px;
    font-size: 25px;
    margin-top: 24px;
    color: #169aca;
}

.focus {
    position: relative;
}

.swiper-button-next,
.swiper-button-prev {
    position: absolute;
    top: 50%;
    width: calc(var(--swiper-navigation-size)/ 44 * 27);
    height: var(--swiper-navigation-size);
    margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);
    z-index: 10;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(184, 179, 188)
}
</style>
