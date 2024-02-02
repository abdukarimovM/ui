<template>
    <header>
        <div class="container mx-auto">
            <div class="flex justify-between pt-[20px]">
                <div class="flex items-center gap-8">
                    <h1 class="font-bold text-[35px]">Logo</h1>
                    <button class="bg-blue-900 flex items-center h-[50px] text-[16px] w-[150px] text-white rounded-[6px]"><i class='bx bx-menu mr-2 text-[24px] ml-1'></i>All Categories</button>
                </div>
                <div class="flex items-center w-full ml-[50px] mr-[100px]"> 
                    <input type="text" class="w-full h-[50px] border-blue-900 border-[2px] rounded-l-[8px] p-2" placeholder="Search">
                    <button class="bg-blue-900 text-[16px] h-[50px] rounded-r-[8px] text-white w-[80px]">Search</button>
                </div>
                <div class="flex items-center gap-8">
                    <router-link to="/basket"><i class='hover:text-blue-900 bx bx-cart text-[30px] text-center text-gray-500' ><p class="text-[17px]">Basket</p></i></router-link> 
                    <router-link to="/favorites"><i class='hover:text-blue-900 bx bx-heart text-[30px] text-center text-gray-500' ><p class="text-[17px]">Favorites</p></i></router-link>
                </div>
            </div>
            
            
            <div>
                
            </div>
        </div>
    </header>
</template>

<script >
    
</script>

<style lang="scss" scoped>

</style>