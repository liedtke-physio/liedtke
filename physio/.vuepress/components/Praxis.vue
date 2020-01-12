<template>
  <Gallery :images="images"/>
</template>
<script>
  const count = 11;

  export default {
    name: 'Praxis',
    computed: {
      images() {
        return [...Array(count)].map((_, i) => ({
          src: './images/praxis/img_' + (i + 1) + '.jpg'
        }))
      }
    }
  }
</script>