<template>
    <section>
        <div class="container mx-auto">
            <h1 class="text-[24px] font-bold mt-[60px]">Air conditioning equipment</h1>
           <div class="grid grid-cols-6 gap-6">
                <div v-for="el in AirConName">
                    <div class="w-full flex justify-center mt-[10px]">
                        <img :src="`/assets/img/${ el.img }`" alt="">
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
    </section>
</template>

<script setup>
import AirConName from '../../public/assets/js/AirCon';

</script>

<style lang="scss" scoped>

</style>