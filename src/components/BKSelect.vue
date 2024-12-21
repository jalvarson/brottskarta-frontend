<script lang="ts" setup>
import { ref, computed, defineProps, defineEmits } from 'vue'

// Props
const props = defineProps({
  options: {
    type: Array as () => { value: string | number; label: string }[],
    required: true,
  },
  modelValue: {
    type: [String, Number, null],
    default: null,
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
})

// Emits
const emit = defineEmits(['update:modelValue'])

// State
const isOpen = ref(false)

// Computed properties
const selectedLabel = computed(() => {
  const selectedOption = props.options.find((opt) => opt.value === props.modelValue)
  return selectedOption ? selectedOption.label : null
})

// Methods
const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: { value: string | number; label: string }) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}
</script>

<template>
  <div class="custom-select">
    <div class="select-display" @click="toggleDropdown" :aria-expanded="isOpen">
      {{ selectedLabel || placeholder }}
    </div>
    <ul v-if="isOpen" class="dropdown">
      <li
        v-for="option in options"
        :key="option.value"
        :class="{ selected: option.value === modelValue }"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.custom-select {
  position: relative;
  width: 320px;
}

.select-display {
  padding: 10px;
  border: 1px solid $on-surface;
  border-radius: 6px;
  cursor: pointer;
  background: transparent;
}

.dropdown {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid $surface-variant;
  border-radius: 4px;
  background: $surface;
  max-height: 350px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown li {
  padding: 10px;
  cursor: pointer;
}

.dropdown li.selected {
  background-color: $surface;
  color: white;
}

.dropdown li:hover {
  background-color: $surface-variant;
}
</style>
