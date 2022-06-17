<template>
  <div class="TestComponent">
    <span class="value">{{ value }}</span>
    <button @click="incrementDogs">
      Increment
    </button>
  </div>
</template>

<script lang="ts">
export default {
  props: ['value'],
  methods: {
    incrementDogs() {
      const newValue = this.value + 1
      this.$emit('input', newValue)
    }
  }
};
</script>