<template>
  <SectionContainer :title="data?.title">
    <template #description>
      {{ data?.description }}
      <NuxtLink
        :to="data?.portfolio.url"
        target="_blank"
        class="text-primary font-bold"
      >
        {{ data?.portfolio.text }}
      </NuxtLink>
    </template>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-3">
      <ULink
        v-for="(project, index) in data?.projects"
        :key="index"
        :to="project.url"
        target="_blank"
      >
        <UCard
          class="text-center flex h-full"
          :ui="{ body: { base: 'flex flex-col' } }"
        >
          <h1 class="text-lg mb-6">
            {{ project.title }}
          </h1>
          <div class="flex flex-col justify-between gap-4 h-full">
            <p>
              {{ project.description }}
            </p>
            <div class="flex gap-1 flex-wrap justify-center">
              <UBadge
                v-for="(tag, idx) in project.tags"
                :key="tag + idx"
              >{{ tag }}</UBadge>
            </div>
          </div>

        </UCard>
      </ULink>
    </div>
  </SectionContainer>
</template>

<script setup lang="ts">
const { data } = await useAsyncData('portfolio', () => queryCollection('portfolio').first())
</script>
