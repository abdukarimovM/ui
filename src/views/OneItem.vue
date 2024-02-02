<template>
    <Header/>
    <Header2/>
    <section class="mb-[100px]">
        <div class="container mx-auto">
            <router-link to="/"><h2 class="text-[18px] mt-[20px]">Home page</h2></router-link>
            <div class="grid grid-cols-2 gap-[100px]">
                <div class="">
                    <img src="../../public/assets/img/airC.webp" alt="">
                </div>
                <div class="mt-[20px]">
                    <div class=" flex">
                        <h1 class="w-2/3 text-[26px] font-bold">AirConditioning Hisense AS-12HR4S METQ01 LV White</h1>
                        <div class="flex gap-4 items-center ml-[40px]">
                            <i class='hover:text-red-600 bx bx-heart text-[30px] text-center text-gray-400'></i>  
                            <i class='hover:text-blue-900 bx bx-bar-chart-alt text-[30px] text-center text-gray-400'></i> 
                         </div>
                    </div>
                    <div class="ml-[60px] w-1/2 mt-[70px] rounded-[10px] border-[1px] shadow-md border-gray-300 pt-[5px] pl-[20px] pr-[20px] pb-[5px]">
                        <h1 class="font-bold text-[26px] mb-[15px]">5 371 000 sum</h1>
                        <hr>
                        <button class="mt-[15px] bg-red-600 text-[18px] rounded-[8px] text-white w-full h-[50px] hover:bg-red-500">Basket</button>
                        <button class="mt-[15px] bg-white text-[18px] rounded-[8px] border border-red-600 text-red-600 w-full h-[50px] hover:bg-gray-100">Buy in 1 click</button>
                    </div>
                </div>
            </div>
            <div class="mr-[100px]">
                <h2 class="text-[26px] font-bold">Descriptions</h2>
                <p class="text-[18px] mt-[30px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas similique eveniet non quis velit reiciendis facere ducimus hic quae illum sapiente quia eum sunt culpa ut, odit, explicabo laudantium! Non?
                Doloribus autem, perspiciatis unde fuga suscipit, non dicta recusandae eius quis est laudantium molestiae nesciunt. Corporis nisi ducimus quidem ratione id officiis, iure, iusto suscipit saepe optio fugit quam debitis.
                Ut quas mollitia provident culpa nostrum deserunt a accusamus vel nisi ducimus! Voluptas impedit voluptatem atque in, cum illum soluta, nulla aliquam voluptatibus, velit dolorem corrupti pariatur dolores incidunt provident!
                Veniam labore nam cumque. Voluptatibus, eius? Atque nisi eveniet explicabo accusantium, debitis amet repellat quo ea dolor harum excepturi dolores, aliquid corporis alias non nesciunt facere illum aliquam laudantium! Impedit.
                Deserunt aut eligendi quo. Eveniet culpa aut ducimus, explicabo alias quo impedit ipsa provident voluptate incidunt cum. Cumque, vitae rerum quos ut praesentium magni, sunt tenetur officia architecto consequuntur voluptatum.</p>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script setup>
import Header from '../components/Header.vue'
import Header2 from '../components/Header2.vue'
import Footer from '../components/Footer.vue';

</script>


<style lang="scss" scoped>

</style>