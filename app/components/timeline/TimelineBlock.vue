<template>
  <div class="relative">
    <!--  marker on timeline-->
    <div class="absolute border-2 border-primary-500 p-2 rounded-full shadow-md left-2 top-3.5 md:left-1/2 -ml-2 bg-white dark:bg-gray-900"/>
    <div :class="['flex ml-10 md:ml-0', isEven ? 'md:justify-start' : 'md:justify-end']">
      <div
          :class="[
              // content block
              'relative w-full md:w-5/12 rounded-lg p-4 shadow-md min-h-32 bg-gray-50 dark:bg-gray-800 border border-gray-50 dark:border-gray-800',
              // content block pointer
              'before:absolute before:w-4 before:h-4 before:rotate-45 max-md:before:-left-1 before:-z-10 before:border',
              // pointer style
              'before:bg-gray-50 before:dark:bg-gray-800 before:border-gray-50 before:dark:border-gray-800',
           isEven ? 'md:before:-right-1' : 'md:before:-left-1'
           ]"
      >
        <div class="flex gap-2">
          <UIcon :name="type === 'work' ? 'i-tabler-briefcase' : 'i-tabler-school'" class="text-2xl"/>
          <h1 class="text-lg font-semibold text-gray-700 dark:text-gray-200 align-middle">
            {{ title }}
          </h1>
        </div>
        <h2  class="text-lg text-primary-500 dark:text-primary-400 mt-2">
          {{ subtitle }}
        </h2>
        <p class="text-gray-700 dark:text-gray-200 mt-2">
          {{ description }}
        </p>
        <p :class="['text-sm text-gray-600 dark:text-gray-300 mt-2 md:absolute top-0 w-full md:text-lg', isEven ? 'md:left-[140%] md:text-start' : 'md:right-[140%] md:text-end']">
          {{ startDate }} - {{ endDate}}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  type: 'work' | 'education',
  title: string,
  subtitle?: string,
  description: string,
  startDate: string,
  endDate: string,
  isEven: boolean,
}>();
</script>
