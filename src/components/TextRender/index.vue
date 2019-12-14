<template>
  <div>
    <label>
      <input v-model="username">
    </label>
    <div v-if="error" class="error">
      {{ error}}
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      username: ''
    }
  },
  computed: {
    error () {
      return this.username.trim().length < 7
        ? 'Please enter a longer username'
        : ''
    }
  }
}
</script>

<style scoped>

</style>
