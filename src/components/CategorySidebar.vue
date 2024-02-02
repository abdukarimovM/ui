<script setup>
import { initAccordions } from "flowbite";
import { onMounted } from "vue";
import PopCategories from "../../public/assets/js/PopCategories";

onMounted(() => {
  initAccordions();
});
</script>

<template>
  <div class="mt-[5px] w-1/4">
    <div id="accordion-open" class="w-full" data-accordion="open">
      <!-- //////// -->
      <h2 id="accordion-open-heading-1">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-1"
          aria-expanded="true"
          aria-controls="accordion-open-body-1"
        >
          Category
          <svg
            data-accordion-icon
            class="w-6 h-6 rotate-180 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-1"
        class="hidden"
        aria-labelledby="accordion-open-heading-1"
      >
        <div class="pl-5 grid grid-cols-1 text-[#505050] text-[18px]">
          <h1
            v-for="el in PopCategories"
            class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-black"
          >
            {{ el.title }}
          </h1>
          <h1
            class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
          >
            See all
          </h1>
        </div>
      </div>
      <!-- ///////// -->
      <!-- ///////// -->
      <h2 id="accordion-open-heading-2">
        <button
          type="button"
          class="flex items-center justify-between w-full p-5 text-[18px] font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-2"
          aria-expanded="false"
          aria-controls="accordion-open-body-2"
        >
          Brands
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-2"
        class="hidden"
        aria-labelledby="accordion-open-heading-2"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050] text-[18px]">
            <div
              v-for="el in PopCategories"
              class="flex py-[10px] items-center justify-start gap-3"
            >
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :title="el"
              />
              <h1 :for="el" class="w-full">{{ el.title }}</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
      <!-- ////////// -->
      <!-- ////////// -->
      <h2 id="accordion-open-heading-3">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-3"
          aria-expanded="false"
          aria-controls="accordion-open-body-3"
        >
          Features
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-3"
        class="hidden"
        aria-labelledby="accordion-open-heading-3"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050] text-[18px]">
            <div
              v-for="el in PopCategories"
              class="flex py-[10px] items-center justify-start gap-3"
            >
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :title="el"
              />
              <h1 :for="el" class="w-full">{{ el.title }}</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
      <!-- ////////// -->
      <!-- ////////// -->
      <h2 id="accordion-open-heading-4">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-4"
          aria-expanded="false"
          aria-controls="accordion-open-body-4"
        >
          Price range
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-4"
        class="hidden"
        aria-labelledby="accordion-open-heading-4"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="flex py-[10px] items-center justify-between gap-3 mb-[10px]">
              <input
                type="number"
                class="p-[10px] text-[14px] w-[45%] border-[#DEE2E7] border-[1px] rounded-[10px]"
                placeholder="Minimal"
              />
              <input
                type="number"
                class="p-[10px] text-[14px] w-[45%] border-[#DEE2E7] border-[1px] rounded-[10px]"
                placeholder="Maximal"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- ////////// -->
      <!-- ////////// -->
      <h2 id="accordion-open-heading-5">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-5"
          aria-expanded="false"
          aria-controls="accordion-open-body-5"
        >
          Condition
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-5"
        class="hidden"
        aria-labelledby="accordion-open-heading-5"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              <h1 class="w-full text-[18px]">Condition1</h1>
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              <h1 class="w-full text-[18px]">Condition2</h1>
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              <h1 class="w-full text-[18px]">Condition3</h1>
            </div>
          </div>
        </div>
      </div>
      <!-- /////////// -->
      <!-- //////////// -->
      <h2 id="accordion-open-heading-6">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-6"
          aria-expanded="false"
          aria-controls="accordion-open-body-6"
        >
          Ratings
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-6"
        class="hidden"
        aria-labelledby="accordion-open-heading-6"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="text-[18px] flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              ratings1
            </div>
            <div class="text-[18px] flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />
              ratings2
            </div>
            <div class="text-[18px] flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
              />

              ratings3
            </div>
          </div>
        </div>
      </div>
      <!-- ///////////// -->
      <!-- ///////////// -->
      <h2 id="accordion-open-heading-7">
        <button
          type="button"
          class="text-[18px] flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:ring-0 border-t-[2px]"
          data-accordion-target="#accordion-open-body-7"
          aria-expanded="false"
          aria-controls="accordion-open-body-7"
        >
          Manufacturer
          <svg
            data-accordion-icon
            class="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-open-body-7"
        class="hidden"
        aria-labelledby="accordion-open-heading-7"
      >
        <div class="pl-5">
          <div class="grid grid-cols-1 text-[#505050]">
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :name="el"
              />
              <h1 class="w-full">manufacturer1</h1>
            </div>
            <div class="flex py-[10px] items-center justify-start gap-3">
              <input
                class="border-[#BDBDBD] rounded-[6px] w-[20px] h-[20px] hover:cursor-pointer"
                type="checkbox"
                :name="el"
              />
              <h1 class="w-full">manufacturer2</h1>
            </div>
            <h1
              class="w-full py-[10px] hover:cursor-pointer duration-300 hover:text-[#144184] text-[#0D6EFD]"
            >
              See all
            </h1>
          </div>
        </div>
      </div>
      <!-- //////////// -->
    </div>
  </div>
</template>

<style lang="scss" scoped></style>