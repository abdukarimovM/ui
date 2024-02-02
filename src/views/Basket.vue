<template>
    <Header/>
    <Header2/>
    <section class="mb-[200px]">
        <div class="container mx-auto">
            <router-link to="/"><h2 class="text-[18px] mt-[20px]">Home page</h2></router-link>
            <h1 class="text-[26px] font-bold mt-[20px]">Basket</h1>
            <div class="flex justify-between mt-[10px]">
                <div class="flex items-center gap-2">
                    <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-900">
                    <label for="default-checkbox" class="text-[18px] font-medium">Select all</label>
                </div>
                <div class="flex gap-3 text-[18px] items-center text-gray-400">
                    <i class='text-[24px] bx bx-trash'></i>
                    <p>Delete all</p>
                </div>
            </div>
            <div class="flex mt-[20px] gap-[30px]">
                <div class="grid grid-cols-1 w-3/4">
                    <hr>
                    <div v-for="el in NewProduct" class="mt-[15px]">
                        <div class="flex items-center h-full">
                            <div class="flex items-start h-full">
                                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-900 bg-gray-100 border-gray-300 rounded focus:ring-blue-900">
                            </div>
                            <div class="flex justify-center gap-4">
                                <img :src="`/assets/img/${ el.img }`" class="w-[155px] h-[120px] ml-[10px]" alt="">
                                <p class="text-[18px] mt-[20px]">{{ el.title }}</p>
                            </div>
                            <div class="rounded-[6px] flex border w-[100px] justify-between ml-[50px] p-3 text-[19px] h-[45px] items-center">
                                <i class='bx bx-minus' ></i>
                                <h1>1</h1>
                                <i class='bx bx-plus' ></i>
                            </div>
                            <div class="ml-[10px]">
                                <h2 class="font-bold text-[18px] mt-[50px] flex justify-end">{{ el.price }}</h2>
                                <div class="mt-[30px] flex gap-5">
                                    <i class='hover:text-red-600 bx bx-heart text-[24px] flex text-center text-gray-400 gap-1'><p class="text-[18px]">Favorites</p></i>  
                                    <i class='hover:text-red-600 bx bx-trash text-[24px] flex text-center text-gray-400 gap-1'><p class="text-[18px]">Delete</p></i>  
                                </div>
                            </div>
                        </div>
                        <hr class="mt-[15px]">
                    </div>  
                </div>
                <div class="w-1/4 h-[250px] rounded-[10px] border-[1px] shadow-md border-gray-300 pt-[5px] pl-[20px] pr-[20px] pb-[5px]">
                    <h1 class="font-bold text-[26px] mb-[15px] mt-[15px]">Order Details</h1>
                    <div class="flex justify-between text-[20px]">
                        <p>Product 8</p>
                        <p class="font-medium">20 800 000 sum</p>
                    </div>
                    <div class="flex justify-between mt-[15px] text-[20px]">
                        <p>Total</p>
                        <p class="font-medium">20 800 000 sum</p>
                    </div>
                    <button class="mt-[15px] bg-red-600 text-[18px] rounded-[8px] text-white w-full h-[50px] hover:bg-red-500">Basket</button>
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