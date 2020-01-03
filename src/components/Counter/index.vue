<template>
  <div>
    <span class="count">Times clicked: {{ count }}</span>
    <button @click="increment" class="button">Increment</button>

  </div>
</template>

<script>
export default {
  name: 'TextRender',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    }
  }
}
</script>

<style scoped>

  .button {

  }

</style>
