<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter'

export default {
  name: 'home',
  components: {
    Counter
  }
}
</script>
