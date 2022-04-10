<template>
      <v-card>
      <v-btn @click="test">
        test
       
      </v-btn>
       {{ this.getImgUrl('images/kissccr/kisslte01.JPG') }}
       이미지<v-img :src=url></v-img>
      </v-card>
</template>
<script>
export default {
    data() {
    return {
      text: 'wwww',
      url: ''
    }
  },
  methods: {
    async test() {
      const { data } = await this.$axios.get(
        'http://localhost:5000/memi-nuxt/us-central1/abc'
      )
      console.log(data)
      this.text = data
    },
    getImgUrl(img){
      let imgUrl = this.$imageUrl(img);
      //var imgUrl = this.$storage.getStorage().ref('images/kissccr/kisslte01.JPG');
      //return imgUrl;
      this.url=imgUrl
    }
  }
}
</script>
