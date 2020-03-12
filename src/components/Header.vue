<template>
  <div class="header-bg">
    <div class="max-w-6xl w-9/12 mx-auto">
      <div class="flex items-center py-8">
        <div class="header-logo">
          <img class="w-48" src="@/assets/images/logo.png" alt="The Catasthrophe Logo">
        </div>
        <ul class="header-nav">
          <li class="header-nav__item"><a href="">Find a Furfriend</a></li>
          <li class="header-nav__item"><a href="">Adopt Guide</a></li>
        </ul>
      </div>
      <div class="pt-20 pb-56">
        <div class="max-w-lg w-9/12">
          <h1 class="text-white text-6xl uppercase font-bold leading-tight tracking-wide mb-10">Last Chance to Adopt!</h1>
          <div class="text-white text-2xl mb-6">
            timer here
          </div>
          <a class="header-btn" href="#appointment-component">Make Appointment Now</a>
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

.header-bg {
  background-image: url('../assets/images/bg_header1.jpg');
  @apply bg-cover;
}

.header-logo {
  @apply mr-8;
}

.header-nav {
  @apply flex;
}

.header-nav__item {
  color: #c48801;
  @apply uppercase mx-8 text-xl;
}

.header-btn {
  @apply uppercase text-xl text-white py-3 px-8 bg-red-500 rounded shadow;
}

</style>