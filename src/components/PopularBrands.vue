<template>
    <section>
        <div class="container mx-auto">
            <div class="flex font-bold mt-[50px] justify-between">
                <h1 class="text-[24px]">Popular brands</h1>
                <h2 class="text-[18px] text-red-600">See all</h2>
            </div>
            <div class="grid grid-cols-6 gap-5 mt-[20px]">
                <div class="flex  bg-gray-100 rounded-[6px] justify-center p-[10px]" v-for="el in PopBrands">
                    <img class="w-[60px]" :src="`/assets/img/${ el.img }`" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PopBrands from '../../public/assets/js/PopularBrands';


</script>

<style lang="scss" scoped>

</style>