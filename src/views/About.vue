<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TextRender />
  </div>
</template>

<script>
// @ is an alias to /src
import TextRender from '@/components/TextRender'

export default {
  name: 'About',
  components: {
    TextRender
  }
}
</script>
