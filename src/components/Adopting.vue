<template>
  <div class="adopting" id="adopting-component">
    <div class="max-w-3xl w-9/12 mx-auto">
      <div class="mb-10">
        <h2 class="adopting__title title">Adopting 101</h2>
        <p class="adopting__copy">
          <span class="font-bold">Class is in session!</span> Here's a basic guide of what you would probably want to have along with you at our adoption center.
        </p>
      </div>
      <ul class="adopting__list">
        <li v-for="(list, index) in lists" :key="index" class="adopting__list-item">
          <span class="text-2xl text-common-orange uppercase font-fjalla-one mr-6">{{ list.title }}</span><span class="text-purple-300">{{ list.description }}</span>
        </li>
      </ul>
      <a class="btn" href="#">Let's Adopt</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      lists: [
        {
          title: "An open mind",
          description: "Not all furry creatures are alike!",
        },
        {
          title: "Comfortable shoes",
          description: "You'll be on your feet all day, trust us!",
        },
        {
          title: "Mobile phone",
          description: "To take pictures of your potentail furry companion, of course!",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.adopting {
  background-image: url('/images/bg_adopting101.jpg');
  @apply bg-cover bg-center pt-24 pb-56;
}

.adopting__title {
  @apply text-white mb-6;
}

.adopting__copy {
  @apply text-purple-300 text-2xl;
  span {
    color: inherit;
  }
}

.adopting__list {
  @apply mb-10;
}

.adopting__list-item {
  @apply mb-2 relative;
  &:before {
    content: url('/images/ok-24.png');
    left: -2.5rem;
    bottom: 0;
    @apply absolute;
  }
}

</style>