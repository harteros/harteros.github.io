<template>
  <div :id="sectionId" class="flex flex-col justify-center gap-8 py-24 sm:py-32">
    <h1 class="text-4xl text-center">{{ title }}</h1>
    <p class="text-lg mb-8">
    <slot name="description">
      {{ description }}
    </slot>
    </p>
    <slot/>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sectionId: string,
  title: string,
  description?: string,
}>();
</script>

