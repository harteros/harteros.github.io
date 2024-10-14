<template>
<SectionContainer :title="data.title" :description="data.description">
    <Timeline>
      <TimelineBlock
          v-for="(event, index) in timeline"
          :key="index"
          :type="event.company ? 'work' : 'education'"
          :title="event.title || event.degree"
          :subtitle="event.company || event.school"
          :description="event.description"
          :start-date="event.start_date"
          :end-date="event.end_date"
          :is-even="index % 2 === 0"
          :has-marker="event.significant"
      />
    </Timeline>
</SectionContainer>
</template>
<script setup lang="ts">
const {data} = await useAsyncData('about', () => queryContent('/sections/about').findOne())
const timeline = computed(() => {
  const experiences = [...data.value.experiences].reverse()
  const educations = [...data.value.education].reverse()
  return [...experiences, ...educations]
})
</script>
