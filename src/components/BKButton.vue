<script setup lang="ts">
interface ButtonProps {
  label?: string
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'red'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'text' | 'outline' | 'contained'
  prependIcon?: string
  appendIcon?: string
  disabled?: boolean
  loading?: boolean
}
withDefaults(defineProps<ButtonProps>(), {
  size: 'medium',
  color: 'primary',
  type: 'button',
  variant: 'contained',
  disabled: false,
  loading: false,
})
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button-wrapper"
    :class="[`button-wrapper--${size}`, `button-wrapper--${color}`, `button-wrapper--${variant}`]"
  >
    <slot name="prependIcon">
      <font-awesome-icon
        v-if="prependIcon"
        :icon="prependIcon"
        class="input-wrapper__prepend-icon"
      />
    </slot>

    <slot>{{ label }}</slot>
    <slot name="appendIcon">
      <font-awesome-icon v-if="appendIcon" :icon="appendIcon" class="input-wrapper__prepend-icon" />
    </slot>
  </button>
</template>

<style scoped lang="scss">
.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    color 0.3s;
}
.button-wrapper--small {
  height: 36;
  padding: 4px 8px;
  @include labelMedium;
}

.button-wrapper--medium {
  height: 44px;
  padding: 8px 16px;
  @include labelLarge;
}

.button-wrapper--large {
  height: 48px;
  padding: 12px 24px;
  @include labelLarge;
}

.button-wrapper--primary {
  background-color: $primary;
  color: $on-primary;
}

.button-wrapper--red {
  background-color: $tertiary;
  color: $on-tertiary;
}

.button-wrapper--text {
  background-color: transparent;
  color: $primary;
  border: none;
}

.button-wrapper--outline {
  background-color: transparent;
  color: $primary;
  border: 1px solid $primary;
}

.button-wrapper--contained {
  background-color: $primary;
  color: $on-primary;
  border: none;
}

.input-wrapper__prepend-icon {
  margin-right: 8px;
}
</style>
