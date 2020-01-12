<template>
  <Gallery :images="images"/>
</template>
<script>
  const names = ['Ute', 'Nadine', 'Vanessa', 'Anika', 'Ines'];

  export default {
    name: 'Team',
    computed: {
      images() {
        return names.map(name => ({
          src: './images/team/' + name.toLowerCase() + '.jpg',
          caption: name
        }))
      }
    }
  }
</script>