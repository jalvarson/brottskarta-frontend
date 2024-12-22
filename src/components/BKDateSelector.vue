<script lang="ts" setup>
import moment from 'moment'
import { ref, computed, onMounted, onUnmounted, defineEmits } from 'vue'

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const modelValue = ref<string | null>(null)
const options = ref<{ value: string; label: string }[]>([])

const selectedLabel = computed(() => {
  const selectedOption = options.value.find((opt) => opt.value === modelValue.value)
  return selectedOption ? selectedOption.label : null
})

const generateLast7Days = () => {
  const days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag']
  const result = []

  for (let i = 0; i < 7; i++) {
    const date = moment().subtract(i, 'days')
    const dayName = days[date.day()]
    const formattedDate = date.format('D MMMM') // e.g., "22 december"

    result.push({
      value: date.toISOString(),
      label: `${dayName}, ${formattedDate}${i === 0 ? ' (idag)' : ''}`,
    })
  }

  options.value = result
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: { value: string; label: string }) => {
  if (option.value !== modelValue.value) {
    modelValue.value = option.value
    emit('update:modelValue', option.value)
  }
  isOpen.value = false
}

// Outside click handler
const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target as HTMLElement
  const customSelect = document.querySelector('.custom-select')
  if (customSelect && !customSelect.contains(target)) {
    isOpen.value = false
  }
}

onMounted(() => {
  generateLast7Days()

  // Automatically select the first option if no value is selected
  if (!modelValue.value && options.value.length > 0) {
    modelValue.value = options.value[0].value
    emit('update:modelValue', options.value[0].value)
  }

  document.addEventListener('click', handleOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick)
})
</script>

<template>
  <div class="custom-select">
    <div class="select-display" @click="toggleDropdown" :aria-expanded="isOpen">
      {{ selectedLabel }}
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
  width: 280px;
}

.select-display {
  user-select: none;
  @include titleMedium;
  color: $primary;
  padding: 8px 12px;
  border: 1px solid $on-surface-opaque;
  border-radius: 8px;
  cursor: pointer;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.select-display::after {
  content: '';
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid $primary;
  display: inline-block;
  margin-left: 10px;
  transition: transform 0.2s ease;
  transform: rotate(0deg);
}

.select-display[aria-expanded='true']::after {
  transform: rotate(180deg);
}

.dropdown {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  border: 1px solid $surface-variant;
  border-radius: 8px;
  background: $surface;
  max-height: 350px;
  overflow-y: auto;
  z-index: 10;
}

.dropdown li {
  @include bodyLarge;
  color: $on-surface;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  transition:
    background-color 0.2s ease,
    color 0.2s ease;
}

.dropdown li.selected {
  background-color: $secondary-container;
  color: $on-secondary-container;
  font-weight: 700;
}

.dropdown li:hover {
  background-color: $surface-container;
}

.dropdown li.active {
  background-color: red;
  color: $on-surface;
  font-weight: 700;
  outline: none;
}

.dropdown li.active:hover {
  background-color: red;
  color: $on-surface;
}
</style>
