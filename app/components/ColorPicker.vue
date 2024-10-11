<template>
  <UButton
      color="gray"
      variant="ghost"
      square
      @click="isDark = !isDark"
  >
    <template #default>
      <ColorScheme placeholder="...">
        <template v-if="colorMode.value === 'dark'">
          <UIcon name='i-tabler-moon' class="w-5 h-5" />
          <span class="sr-only">Dark Mode</span>
        </template>
        <template v-else>
          <UIcon name= 'i-tabler-sun' class="w-5 h-5" />
          <span class="sr-only">Light Mode</span>
        </template>
      </ColorScheme>
    </template>
  </UButton>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
