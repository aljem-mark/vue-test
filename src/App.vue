<template>
  <div id="app">
    <Header />
    <About />
    <Featured />
    <Adopting />
    <Appointment />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import About from '@/components/About'
import Featured from '@/components/Featured'
import Adopting from '@/components/Adopting'
import Appointment from '@/components/Appointment'
import Footer from '@/components/Footer'


export default {
  components: {
    Header,
    About,
    Featured,
    Adopting,
    Appointment,
    Footer
  }
}
</script>

<style lang="scss">

* {
  @apply font-poppins text-common-black;
}

a {
  @apply font-fjalla-one;
}

.btn {
  @apply inline-block uppercase text-xl text-white py-3 px-8 bg-red-500 rounded shadow;
}

.title {
  @apply text-6xl font-bold leading-tight;
}

</style>
