<template>
  <div class="gallery">
    <figure class="preview">
      <img :src="preview.src" :alt="preview.caption">
    </figure>
    <div class="thumbnails">
      <figure v-for="(image, i) in images" class="figure" @click="current = image">
        <div class="image">
          <img :src='image.src' :alt="image.caption">
        </div>
        <figcaption class="caption" v-if="image.caption">{{image.caption}}</figcaption>
      </figure>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Gallery',
    props: {
      images: Array
    },
    data() {
      return {
        current: null
      }
    },
    computed: {
      preview() {
        return this.current || this.images[0];
      }
    }
  }
</script>
<style scoped>
  .preview {
    margin: 0;
    display: flex;
    justify-content: center;
    height: 300px;
  }

  .preview img {
    height: 100%;
    width: auto;
  }

  .thumbnails {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -2px;
  }

  .figure {
    margin: 2px;
  }

  .image {
    display: block;
    width: 80px;
    height: 80px;
    overflow: hidden;
  }

  .image img {
    width: 100%;
    height: 100%;
    transition: transform 0.2s ease-in;
    object-fit: cover;
  }

  .image:hover img {
    cursor: pointer;
    transform: scale(1.3);
  }

  .caption {
    font-weight: bold;
    text-align: center;
  }
</style>