<template>
    <section>
        <div class="container mx-auto flex mt-[20px]">
            <div class="h-[430px] w-[1200px]"> 
                <swiper
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :loop="true"
                    :pagination="{
                    clickable: true,
                    }"
                    :autoplay="{
                        delay: 2500,
                        disableOnInteraction: false,
                    }"
                    :navigation="true"
                    :modules="modules"
                    class="swiper_1"
                >
                    <swiper-slide class="swiper-slide_1"><img src="../../public/assets/img/iphone_1.webp" class="rounded-[10px]" alt=""></swiper-slide>
                    <swiper-slide class="swiper-slide_1"><img src="../../public/assets/img/iphone_1.webp" class="rounded-[10px]" alt=""></swiper-slide>
                    <swiper-slide class="swiper-slide_1"><img src="../../public/assets/img/iphone_1.webp" class="rounded-[10px]" alt=""></swiper-slide>
                    <swiper-slide class="swiper-slide_1"><img src="../../public/assets/img/iphone_1.webp" class="rounded-[10px]" alt=""></swiper-slide>
                    <swiper-slide class="swiper-slide_1"><img src="../../public/assets/img/iphone_1.webp" class="rounded-[10px]" alt=""></swiper-slide>
                </swiper>
            </div>
            <div class="w-[315px] ml-[20px]">
                <div class="flex text-[20px] justify-between">
                    <h1 class="font-bold">Product of the day</h1>
                    <p class="text-red-600 font-bold">24:00:00</p>
                </div>                
               <swiper
                    :spaceBetween="30"
                    :centeredSlides="true"
                    :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                    }"
                    :modules="modules"
                    class="mySwiper"
                     >
                    <swiper-slide>
                        <div>
                            <div class="w-full flex justify-center mt-[30px]">
                                <img src="../../public/assets/img/phone_2.jpeg" alt="">
                            </div>
                            <h2 class="font-bold text-[18px] mt-[20px]">1 400 000</h2>
                            <p class="text-[15px] mt-[10px]">This is simple Phone <br> 12/256GB black</p>
                            <div class="mt-[25px] flex gap-4">
                                <button class="bg-red-600 text-[15px] rounded-[8px] text-white w-[120px] h-[40px] hover:bg-red-500">Basket</button>
                                <i class='hover:text-red-600 bx bx-heart text-[30px] text-center text-gray-400'></i>  
                                <i class='hover:text-blue-900 bx bx-bar-chart-alt text-[30px] text-center text-gray-400'></i>  
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="w-full flex justify-center mt-[30px]">
                                <img src="../../public/assets/img/phone_3.avif" alt="">
                            </div>
                            <h2 class="font-bold text-[18px] mt-[20px]">1 400 000</h2>
                            <p class="text-[15px] mt-[10px]">This is simple Phone <br> 12/256GB black</p>
                            <div class="mt-[25px] flex gap-4">
                                <button class="bg-red-600 text-[15px] rounded-[8px] text-white w-[120px] h-[40px] hover:bg-red-500">Basket</button>
                                <i class='hover:text-red-600 bx bx-heart text-[30px] text-center text-gray-400'></i>  
                                <i class='hover:text-blue-900 bx bx-bar-chart-alt text-[30px] text-center text-gray-400'></i>  
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div>
                            <div class="w-full flex justify-center mt-[30px]">
                                <img src="../../public/assets/img/phone_3.avif" alt="">
                            </div>
                            <h2 class="font-bold text-[18px] mt-[20px]">1 400 000</h2>
                            <p class="text-[15px] mt-[10px]">This is simple Phone <br> 12/256GB black</p>
                            <div class="mt-[25px] flex gap-4">
                                <button class="bg-red-600 text-[15px] rounded-[8px] text-white w-[120px] h-[40px] hover:bg-red-500">Basket</button>
                                <i class='hover:text-red-600 bx bx-heart text-[30px] text-center text-gray-400'></i>  
                                <i class='hover:text-blue-900 bx bx-bar-chart-alt text-[30px] text-center text-gray-400'></i>  
                            </div>
                        </div>
                    </swiper-slide>
               </swiper>
            </div>
        </div>
    </section>
</template>

<script >
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../../public/assets/css/swiper.css';

// import required modules
import {Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};


</script>

<style lang="css" scoped>

</style>