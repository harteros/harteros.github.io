<template>
  <footer class="text-center flex justify-center gap-4 h-20 border-t-2  border-gray-100 dark:border-gray-900">
    <div class="flex items-center gap-4">
      <NuxtLink v-for="(social, index) in data.social" :key="index" :to="social.url" class="flex justify-center">
        <UIcon :name="social.icon" class="text-3xl"/>
      </NuxtLink>
    </div>
    <div class="content-center">{{ data.text }}</div>
  </footer>
</template>

<script setup lang="ts">
const {data} = await useAsyncData('footer', () => queryContent('footer').findOne())
</script>

