<script setup lang="ts">
interface ButtonProps {
  onPress?: () => void
  icon?: string
}

defineProps<ButtonProps>()
</script>

<template>
  <button type="button" class="button-container" @click="onPress">
    <slot name="icon">
      <font-awesome-icon :icon="icon" class="button-container__icon" />
    </slot>
  </button>
</template>

<style scoped lang="scss">
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  width: 40px;
  cursor: pointer;
  background-color: transparent;
}

.button-container__icon {
  width: 24px;
  height: 24px;
  color: $on-surface;
}
</style>
