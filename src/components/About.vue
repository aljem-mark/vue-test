<template>
  <div class="about" id="about-component">
    <div class="max-w-5xl w-9/12 mx-auto">
      <div class="mb-16">
        <h2 class="about__title title">Only heroes - adopt.</h2>
        <p class="text-2xl"><span class="font-bold">Not all heroes wear capes!</span> Saving the world is not a job that is only<br />
        exclusive to comic heroes in new york..<br />
        Now, you can do your part with one paw at a time.</p>
      </div>
      <div class="about__cards">
        <div v-for="(card, index) in cards" :key="index" class="about__cards-item">
          <img :src="card.image" :alt="card.title">
          <div class="mt-10 px-8">
            <h3 class="about__cards-title">{{ card.title }}</h3>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      cards: [
        {
          image: "images/graphic_01.png",
          title: "True Companionship",
          description: "Opening your doors to your new furry friend brings a wholesome new meaning to friendship.",
        },
        {
          image: "images/graphic_02.png",
          title: "Fulfilling Role",
          description: "The major side effect of being there for furry friend is feeling very rewarded when they purr!",
        },
        {
          image: "images/graphic_03.png",
          title: "Loving Community",
          description: "You will be part of a huge and growing community of adopters, worldwide, to share your experiences!",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.about {
  @apply pt-20 pb-32 text-center;
}

.about__title {
  @apply text-red-500 mb-12;
}

.about__cards {
  @apply flex;
}

.about__cards-item {
  @apply flex-1;
}

.about__cards-title {
  @apply font-fjalla-one uppercase text-2xl text-common-blue-2 mb-4;
}

</style>