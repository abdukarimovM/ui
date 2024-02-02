<template>
    <footer class="bg-gray-800">
        <div class="container mx-auto">
            <div class="flex justify-between pt-[30px]">
                <div class="text-white text-[22px]">
                    <p class="text-[18px] mb-[20px]">If you have questions call this number:</p>
                    <a href="tel:+99899 084 11 11">+99899 084 11 11</a>
                    <br>
                    <a href="tel:+99895 904 11 11">+99895 904 11 11</a>
                    <div class="mt-[60px]">
                        <div class="text-white text-[34px] flex gap-6">
                            <i class='bx bxl-facebook'></i>
                            <i class='bx bxl-instagram' ></i>
                            <i class='bx bxl-telegram' ></i>
                        </div>
                        <hr class="mt-[20px]">
                        <p class="text-[18px] text-white mt-[20px]">🚚 Delivery in Uzbekistan</p>
                    </div>
                </div>
                <div>
                    <h1 class="text-white text-[26px]">Payment Methods</h1>
                    <div class="grid grid-cols-3 gap-8 h-[150px] mt-[40px]">
                        <div v-for="el in PaymentType" class="w-[100px] p-4 flex items-center justify-center rounded-[8px] h-[50px] bg-white">
                            <img :src="`/assets/img/${ el.img }`" alt="">
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-white text-[18px] mb-[10px]">Our address: <br>📍Nurafshan street 1 building</h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1177.8200813023368!2d69.23275759270773!3d41.340561678156014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8c7961eaa695%3A0x18cd6479632be9cf!2zMSBVbGl0c2EgTnVyYWZzaG9uLCBUYXNoa2VudCwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1691047138329!5m2!1sru!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div class="flex flex-col text-gray-400 text-[16px] text-center mt-[40px]">
                <hr class="border-gray-400">
                <h1 class="mt-[20px] mb-[20px]">© yaer - year    Name. All Rights Reserved.</h1>
            </div>
        </div>
    </footer>
</template>

<script setup>
import PaymentType from '../../public/assets/js/Payment';

</script>

<style lang="css" scoped>

</style>