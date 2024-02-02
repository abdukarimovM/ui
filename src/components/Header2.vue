<template>
    <header class="shadow-md">
        <div class="container mx-auto">
            <div class="flex justify-between mt-[20px]">
                <div class="" v-for="el in HeaderNames">
                    <h1 class="hover:text-red-600 mb-4 text-[16px]">{{ el.title }}</h1>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import HeaderNames from "../../public/assets/js/HeaderNames.js";

</script>

<style lang="scss" scoped>

</style>