<template>
    <section>
        <div class="container mx-auto">
            <h1 class="text-[24px] font-bold mt-[60px]">Stock</h1>
            <div class="grid grid-cols-6 gap-[30px] mt-[20px]">
                <div v-for="el in StockName">
                    <img :src="`/assets/img/${ el.img }`" class="rounded-[16px] h-[220px]" alt="">
                    <p class="font-bold text-[16px] mt-[15px]">{{ el.title }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import StockName from '../../public/assets/js/Stock';

</script>

<style lang="scss" scoped>

</style>