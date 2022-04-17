import Vue from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

/*
const config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId,
}
*/

export default function({ store, redirect }) {
  if (!firebase.apps.length) firebase.initializeApp()

  Vue.prototype.$auth = firebase.auth()

  Vue.prototype.$db = firebase.firestore()
  Vue.prototype.$db.settings({
    timestampsInSnapshots: true
  })

  firebase.auth().onAuthStateChanged(user => {
    store.commit('setUser', user)
  })

  Vue.prototype.$imageUrl = async function(imageUrl) {
    const storage = getStorage();
    const starsRef = ref(storage, imageUrl);
    
    console.log("############root:" + starsRef.root);
    console.log("############root:" + starsRef.fullPath);
    console.log("############root:" + starsRef.name);
    console.log("############root:" + starsRef.bucket);
    console.log("############root:parent:" + starsRef.parent);
    console.log("############root:parent:" + getMetadata(starsRef));

    console.log("############ref:" + imageUrl);

    
    console.log("############ref:" + imageUrl);

     const imgUrl = await getDownloadURL(starsRef)
                  .then((url) => {
                    return url;
                  })
                  .catch((error) => {
                    return "error";
                  });
    console.log("############imgUrl:" + imgUrl);          
    return imgUrl;
  }
  
}
