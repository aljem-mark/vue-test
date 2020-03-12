<template>
  <div class="featured" id="featured-component">
    <div class="max-w-5xl w-9/12 mx-auto">
      <h2 class="featured__title title">Hall of meows.</h2>
      <p class="featured__copy">Featured felines of the week!</p>
      <div class="featured__gallery">
        <div v-for="(galleryImage, index) in galleryImages" :key="index" class="featured__gallery-item">
          <div class="bg-white rounded p-1">
            <img :src="galleryImage" :alt="`Gallery Image ${index+1}`">
          </div>
        </div>
      </div>
      <a class="btn" href="#">Browse More</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      galleryImages: [
        "images/gallery_01.png",
        "images/gallery_02.png",
        "images/gallery_03.png",
        "images/gallery_04.png",
        "images/gallery_05.png",
        "images/gallery_06.png",
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.featured {
  background-image: url('/images/bg_hallofmeows.jpg');
  @apply bg-cover bg-center pt-20 pb-32;
}

.featured__title {
  @apply text-common-blue-2 mb-4;
}

.featured__copy {
  @apply text-common-blue text-2xl mb-4;
}

.featured__gallery {
  @apply flex flex-wrap max-w-md w-9/12 mb-4 -mx-2;
}

.featured__gallery-item {
  @apply w-1/3 mb-8 px-2;
}

</style>