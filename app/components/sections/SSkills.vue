<template>
  <SectionContainer :title="data.title" :description="data.description">
    <div class="grid grid-cols-3 gap-10 sm:grid-cols-4">
      <div v-for="(skill, index) in data.skills" :key="index" class="text-center">
        <ClientOnly>
          <UIcon :name="colorMode.value === 'dark' ? skill.icon: skill['icon-dark']" class="w-20 h-20"/>
          <template #fallback>
            <div class="w-20 h-20"/>
          </template>
        </ClientOnly>
        <p class="text-sm font-medium">{{ skill.name }}</p>
      </div>
    </div>
  </SectionContainer>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
const {data} = await useAsyncData('skills', () => queryContent('/sections/skills').findOne())
</script>
