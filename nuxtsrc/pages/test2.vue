<template>
      <v-btn @click="test">
        test
      </v-btn>
</template>
<script>
export default {
    data() {
    return {
      text: 'wwww'
    }
  },
  methods: {
    async test() {
      const { data } = await this.$axios.get(
        'http://localhost:5000/memi-nuxt/us-central1/abc'
      )
      console.log(data)
      this.text = data
    }
  }
}
</script>
