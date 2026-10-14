<template>
  <div class="c-page">
    <UiHeader />
    <main>
      <slot />
    </main>
    <UiFooter />
  </div>
</template>

<style lang="scss">
.c-page {
  min-height: 100dvh;
}
</style>
