<!--<template>-->
<!--  <div>-->
<!--    <p>Times clicked: {{ count }}</p>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'index',-->
<!--  data () {-->
<!--    return {-->
<!--      count: 0-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<!--<template>-->
<!--  <div>-->
<!--    <p>Times clicked: {{ count }}</p>-->
<!--    <button>increment</button>-->
<!--  </div>-->

<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'index',-->
<!--  data () {-->
<!--    return {-->
<!--      count: 0-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>

</template>

<script>
export default {
  name: 'index',
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

</style>
