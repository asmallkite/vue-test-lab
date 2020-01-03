<template>
  <div @click="toggleClick">
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
    },
    toggleClick () {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style scoped>

  .button {

  }

</style>
