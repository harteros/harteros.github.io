<template>
<!--  fixed header on top -->
  <header class="z-10 sticky top-0 left-0 right-0 bg-white dark:bg-gray-950">
    <UContainer class="h-[var(--header-height)]">
      <div class="flex justify-between items-center h-full">
        <NuxtLink to="/">
          <AppLogo />
        </NuxtLink>
        <div class="flex items-center gap-6">
          <div class="hidden items-center gap-3 md:flex">
              <NuxtLink
                  v-for="link in navigation"
                  :key="link.title"
                  :to="link.href"
              >
                {{ link.navTitle || link.title }}
              </NuxtLink>
          </div>
          <ColorPicker />
          <UButton
              color="gray"
              variant="ghost"
              icon="i-tabler-menu-2"
              class="flex p-2 md:hidden"
              @click="changeOpen"
          />
          <USlideover v-model="isOpen">
            <div class="flex flex-col justify-between h-full py-3 px-6">
              <div class="flex flex-col">
                <UButton
                    color="gray"
                    variant="ghost"
                    icon="i-tabler-x"
                    class="self-end mb-4"
                    square
                    @click="changeOpen"
                />
              </div>
              <div class="flex flex-col">
                <UDivider class="mb-4" />
              </div>
            </div>
          </USlideover>
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
import {fetchContentNavigation} from "#imports";

const isOpen = ref(false)
const {data} = await useAsyncData('navigation', () => fetchContentNavigation('sections'))
const navigation = computed(() => data.value[0].children)
function changeOpen() {
  isOpen.value = !isOpen.value
}
</script>
