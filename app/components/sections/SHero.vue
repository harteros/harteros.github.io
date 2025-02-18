<template>
  <div class="min-h-[calc(100vh-var(--header-height))] flex flex-col justify-center items-center gap-7 text-center py-8">
    <h1 class="text-4xl md:text-6xl">
      <span class="text-primary-500">{{ data?.intro }}</span>
      {{ data?.name }}
    </h1>
    <h2 class="text-4xl md:text-6xl">
      {{ data?.tagline }}
    </h2>
    <p class="whitespace-pre-line max-w-3xl">
      {{ data?.description }}
    </p>
    <div class="flex gap-2">
      <NuxtLink
        v-for="(social, index) in data?.social"
        :key="index"
        :to="social.url"
        target="_blank"
      >
        <UIcon
          :name="social.icon"
          class="text-4xl"
        />
      </NuxtLink>
    </div>
    <div class="flex gap-9">
      <UButton
        variant="solid"
        :to="data?.contact.url"
        class="mt-4 px-8 py-3"
        :icon="data?.contact.icon"
        target="_blank"
      >
        {{ data?.contact.button }}
      </UButton>
      <UButton
        variant="solid"
        :to="data?.resume.url"
        class="mt-4 px-8 py-3"
        :icon="data?.resume.icon"
        target="_blank"
      >
        {{ data?.resume.button }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('home', () => queryCollection('hero').first())
</script>
