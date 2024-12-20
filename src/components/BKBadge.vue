<script setup lang="ts">
interface BadgeProps {
  label: string
  color?: 'primary' | 'secondary' | 'secondary-dark'
  variant?: 'contained' | 'outline'
  rounded?: boolean
}

withDefaults(defineProps<BadgeProps>(), {
  color: 'primary',
  variant: 'contained',
  roundness: 'medium',
  rounded: false,
})
</script>

<template>
  <div
    class="badge-container"
    :class="[
      `badge-container--${color}`,
      `badge-container--${variant}`,
      { 'badge-container--rounded': rounded },
    ]"
  >
    <span class="badge-container__label">{{ label }}</span>
  </div>
</template>

<style scoped lang="scss">
.badge-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  @include labelMedium;
  border-radius: 6px;
}

/* Color styles */
.badge-container--primary {
  background-color: $primary;
  color: $on-primary;
}

.badge-container--secondary {
  background-color: $tertiary;
  color: $on-tertiary;
}

.badge-container--secondary-dark {
  background-color: $on-tertiary;
  color: $tertiary;
}

/* Variant styles */
.badge-container--contained {
  border: none;
}

.badge-container--outline {
  background-color: transparent;
  color: inherit;
  border: 1px solid currentColor;
}

.badge-container--rounded {
  border-radius: 50px;
}
</style>
