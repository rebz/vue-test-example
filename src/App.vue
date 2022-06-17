<template>
  <div id="app">
    App <br />
    <TestComponent v-model="count" />
  </div>
</template>

<script lang="ts">
import TestComponent from './components/TestComponent.vue'

export default {
  components: {
    TestComponent
  },
  data: () => ({
    count: 3
  })
}
</script>