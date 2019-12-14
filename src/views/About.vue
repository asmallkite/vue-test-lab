<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TextRender />
    <TextRender2 />
  </div>
</template>

<script>
// @ is an alias to /src
import TextRender from '@/components/TextRender'
import TextRender2 from '@/components/TextRender/index2'

export default {
  name: 'About',
  components: {
    TextRender,
    TextRender2
  }
}
</script>
