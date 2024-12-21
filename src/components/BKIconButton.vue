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
  height: 40px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  &:hover {
    background-color: $surface-container-high;
  }
  &:active {
    background-color: $surface-container-highest;
  }
}

.button-container__icon {
  font-size: 20px;
  color: $on-surface;
}
</style>
