<template>
    <section>
        <div class="container mx-auto">
            <div class="flex font-bold mt-[40px] justify-between">
                <h1 class="text-[24px]">Popular categories</h1>
                <h2 class="text-[18px] text-red-600">See all</h2>
            </div>
            <div class="grid grid-cols-6 gap-5 mt-[20px]">
                <div class="flex  bg-gray-100 justify-between pl-[10px] rounded-[6px] hover:bg-blue-900 hover:text-white  duration-300" v-for="el in PopCategories">
                    <h1 class="font-bold text-[16px] mt-[10px]">{{ el.title }}</h1>
                    <img class="w-[100px]" :src="`/assets/img/${ el.img }`" alt="">
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import PopCategories from '../../public/assets/js/PopCategories';


</script>

<style lang="scss" scoped>

</style>