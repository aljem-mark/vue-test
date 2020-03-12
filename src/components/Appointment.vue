<template>
  <div class="appointment" id="appointment-component">
    <div class="max-w-3xl w-9/12 mx-auto">
      <div class="mb-8">
        <h2 class="appointment__title title">Make an Appointment</h2>
        <p class="appointment__copy">
          <span class="font-bold">Time is gold!</span> Make appointment to prevent disappointment!
        </p>
      </div>
      <div>
        <form @submit.prevent="formSubmit">
          <div class="flex -mx-2 mb-6">
            <date-picker v-model="form.dateTime" placeholder="Date & Time" class="appointment__datepicker flex-1"></date-picker>
            <v-select v-model="form.state" :options="states" placeholder="State" class="appointment__select flex-1"></v-select>
            <v-select v-model="form.branch" :options="branches" placeholder="Branch Name" class="appointment__select flex-1"></v-select>
          </div>

          <button type="submit" class="btn font-fjalla-one">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: { DatePicker },
  data: function() {
    return {
      form: {
        dateTime: null,
        state: null,
        branch: null
      },
      stateBranch: [
        {
          state: "State A",
          branches: [
            "Branch A",
            "Branch A1"
          ]
        },
        {
          state: "State B",
          branches: [
            "Branch B",
            "Branch B1",
            "Branch B2",
            "Branch B3",
          ]
        },
        {
          state: "State C",
          branches: [
            "Branch C",
          ]
        },
        {
          state: "State D",
          branches: [
            "Branch D",
            "Branch D1",
            "Branch D2",
          ]
        },
      ]
    }
  },
  computed: {
    states() {
      return this.stateBranch.map((i) => i.state)
    },
    branches() {
      let stateBranch = this.stateBranch.find((i) => i.state == this.form.state)

      if (!stateBranch) return []

      return stateBranch.branches
    }
  },
  methods: {
    formSubmit: function() {
      this.axios.post('/input.php',
        this.form,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(function(res){
        console.log(res.data);
      })
      .catch(function(error){
        console.log('FAILURE!!', error);
      });
    }
  }
}
</script>

<style lang="scss" scoped>

.appointment {
  // background-image: url('/images/bg_adopting101.jpg');
  @apply bg-orange-500 bg-cover bg-center pt-24 pb-64;
}

.appointment__title {
  @apply font-normal text-white mb-4;
}

.appointment__copy {
  @apply text-orange-300 text-2xl;
  span {
    color: inherit;
  }
}

.appointment__datepicker,
.appointment__select {
  @apply px-2;
}

</style>

<style>

.appointment__select .vs__search::placeholder,
.appointment__select .vs__dropdown-toggle,
.appointment__select .vs__dropdown-menu {
  background: white;
}

</style>