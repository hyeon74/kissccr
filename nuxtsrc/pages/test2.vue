<template>
      <v-card>
      <v-btn autoresize @click="test">
        test
        </v-btn>
       <v-img max-width="700" :src="this.imgurl1"></v-img><br/>
       <v-img max-width="700" :src="this.imgurl2"></v-img><br/>
       <v-img max-width="700" :src="this.imgurl3"></v-img><br/>
       <v-img max-width="700" :src="this.imgurl4"></v-img><br/>
       <v-img max-width="700" :src="this.imgurl5"></v-img><br/>

      </v-card>
</template>
<script>
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default {
    data() {
    return {
      text: 'wwww',
      url: '',
      imgurl1: '',
      imgurl2: '',
      imgurl3: '',
      imgurl4: '',
      imgurl5: '',

    }
  },
  mounted() {
    this.getImgUrl('images/kissccr/kisslte01.JPG')
 
    this.getImgUrl('images/kissccr/kisslte02.JPG', this.imgur11)
    this.getImgUrl('images/kissccr/kisslte03.JPG', this.imgur11);
    this.getImgUrl('images/kissccr/kisslte04.JPG', this.imgur11);
    this.getImgUrl('images/kissccr/kisslte05.JPG', this.imgur11);
  },
  methods: {
    async test() {
      const { data } = await this.$axios.get(
        'http://localhost:5000/memi-nuxt/us-central1/abc'
      )
      console.log(data)
      this.text = data
    },
    async getImgUrl(img){
      let starsRef = ref(getStorage(), img);
      let fname = await getDownloadURL(starsRef);
      if(img.indexOf('kisslte01') > 0)
        this.imgurl1 = fname
      else if(img.indexOf('kisslte02') > 0)
        this.imgurl2 = fname
      else if(img.indexOf('kisslte03') > 0)
        this.imgurl3 = fname
      else if(img.indexOf('kisslte04') > 0)
        this.imgurl4 = fname
      else if(img.indexOf('kisslte05') > 0)
        this.imgurl5 = fname
      
      //return fname
    },
  }
}
</script>