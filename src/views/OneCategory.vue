<template>
    <Header/>
    <Header2/>
    <section class="mb-[100px]">
        <div class="container mx-auto">
            <router-link to="/"><h2 class="text-[18px] mt-[20px]">Home page</h2></router-link>
            <div class="flex justify-between">
                <h1 class="text-[26px] font-bold mt-[20px]">All laptops (540)</h1>
                <div class="flex gap-4 items-center">
                    <h1>Sort</h1>
                    <select class="p-2 outline-none bg-white border rounded-[4px] w-[200px] flex h-[45px]">
                        <option>All category</option>
                        <option>Automobiles</option>
                        <option>Clothes and wear</option>
                        <option>Home interiors</option>
                    </select>
                </div>
            </div>
            <div class="flex mt-[20px]">
                <CategorySidebar/>
                <div class="grid grid-cols-4 gap-8 ml-[40px]">
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
import CategorySidebar from '../components/CategorySidebar.vue';
import NewProduct from '../../public/assets/js/NewProduct';

</script>

<style lang="scss" scoped>

</style>