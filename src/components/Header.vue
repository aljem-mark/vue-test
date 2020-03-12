<template>
  <div class="header" id="header-component">
    <div class="max-w-6xl w-9/12 mx-auto">
      <div class="flex items-center py-8">
        <div class="header-logo">
          <img class="w-48" src="images/logo.png" alt="The Catasthrophe Logo">
        </div>
        <ul class="header-nav">
          <li class="header-nav__item"><a href="#">Find a Furfriend</a></li>
          <li class="header-nav__item"><a href="#">Adopt Guide</a></li>
        </ul>
      </div>
      <div class="pt-20 pb-64">
        <div class="max-w-lg w-9/12">
          <h1 class="header__title title">Last Chance to Adopt!</h1>
          <div class="text-white text-2xl mb-6">
            timer here
          </div>
          <a class="btn" href="#appointment-component" v-smooth-scroll>Make Appointment Now</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.header {
  background-image: url('/images/bg_header1.jpg');
  @apply bg-cover bg-center;
}

.header-logo {
  @apply mr-8;
}

.header-nav {
  @apply flex;
}

.header-nav__item {
  // color: #c48801;
  @apply text-common-grey uppercase mx-8 text-xl;
}

.header__title {
  @apply text-white uppercase mb-10;
}

</style>