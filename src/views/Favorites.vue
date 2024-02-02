<template>
    <Header/>
    <Header2/>
    <section class="mb-[100px]">
        <div class="container mx-auto">
            <router-link to="/"><h2 class="text-[18px] mt-[20px]">Home page</h2></router-link>
            <div class="flex justify-between">
                <h1 class="text-[26px] font-bold mt-[20px]">Favorites (8)</h1>
                <div class="flex gap-3 text-[18px] items-center text-gray-400">
                    <i class='text-[24px] bx bx-trash'></i>
                    <p>Delete all</p>
                </div>
            </div>
            <div class="flex mt-[20px]">
                <div class="grid grid-cols-5 gap-[50px] ml-[40px]">
                    <div v-for="el in NewProduct" class="mt-[40px]">
                        <div class="w-full flex justify-center mt-[30px]">
                            <img :src="`/assets/img/${ el.img }`" class="w-[185px] h-[150px]" alt="">
                        </div>
                        <h2 class="font-bold text-[18px] mt-[50px]">{{ el.price }}</h2>
                            <p class="text-[15px] mt-[10px]">{{ el.title }}</p>
                        <div class="mt-[25px] flex gap-4">
                            <button class="bg-red-600 text-[15px] rounded-[8px] text-white w-[120px] h-[40px] hover:bg-red-500">Basket</button>
                            <i class='hover:text-red-600 bx bx-heart text-[30px] text-center text-gray-400'></i>  
                            <i class='hover:text-blue-900 bx bx-bar-chart-alt text-[30px] text-center text-gray-400'></i>  
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header.vue'
import Header2 from '../components/Header2.vue'
import Footer from '../components/Footer.vue';
import NewProduct from '../../public/assets/js/NewProduct';

</script>

<style lang="scss" scoped>

</style>