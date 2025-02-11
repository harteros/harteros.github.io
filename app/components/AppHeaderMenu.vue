<template>
  <NuxtLink
    v-for="link in navigation"
    :key="link.title"
    :to="link.path"
    class="flex items-center gap-1 text-lg"
    @click="$emit('click')"
  >
    <UIcon :name="link.icon" />
    {{ link.navTitle || link.title }}
  </NuxtLink>
</template>

<script setup lang="ts">
defineEmits<{
  click: []
}>()
const { data } = await useAsyncData('navigation', () => queryCollectionNavigation('sections'))
const navigation = computed(() => data.value && data.value.length > 0 ? data.value[0].children : [])
</script>
