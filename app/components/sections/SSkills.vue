
<template>
  <SectionContainer :title="data.title" section-id="skills" :description="data.description">
    <div class="grid grid-cols-3 gap-10 sm:grid-cols-4 place-items-stretch">
    <div v-for="(skill, index) in data.skills" :key="index" class="text-center">
      <ColorScheme placeholder="...">
        <template v-if="colorMode.value === 'dark'">
          <UIcon :name="skill.icon" class="text-7xl"/>
        </template>
        <template v-else>
          <UIcon :name="skill['icon-dark']" class="text-7xl"/>
        </template>
      </ColorScheme>
      <p class="text-sm">{{ skill.name }}</p>
    </div>
  </div>
  </SectionContainer>
</template>
<script setup lang="ts">
const colorMode = useColorMode()

const {data} = await useAsyncData('skills', () => queryContent('/sections/skills').findOne())
</script>
