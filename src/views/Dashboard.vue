<template>
    <body class="pb-[100px]">
        <Header/>
        <Header2/>
        <MainSwiper/>
        <PopCategories/>
        <AirConditioning/>
        <BestSeller/>
        <Stock/>
        <NewProduct/>
        <Cybersport/>
        <PopularBrands/>
    </body>
    <Footer/>
</template>

<script setup>
import PopCategories from '../components/PopCategories.vue';
import Header from '../components/Header.vue'
import Header2 from '../components/Header2.vue'
import MainSwiper from '../components/MainSwiper.vue';
import AirConditioning from '../components/AirConditioning.vue';
import BestSeller from '../components/BestSeller.vue';
import Stock from '../components/Stock.vue';
import NewProduct from '../components/NewProduct.vue';
import Cybersport from '../components/Cybersport.vue';
import PopularBrands from '../components/PopularBrands.vue';
import Footer from '../components/Footer.vue';

</script>

<style lang="css" scoped>
body{
    background-color: white;
}
</style>