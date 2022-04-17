import Vue from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/firestore'
import 'firebase/auth'
import { getStorage, ref, getDownloadURL } from "firebase/storage";

/*
const config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  projectId: process.env.VUE_APP_projectId
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

  /*
  Vue.prototype.$imageUrl = async function(imageUrl) {
    let storage = getStorage();
    let starsRef = ref(storage, imageUrl);

    //console.log("############imageUrl:" + imageUrl);
    let imgUrl = await getDownloadURL(starsRef)
                  .then((url) => {
                    return url;
                  })
                  .catch((error) => {
                    return "error";
                  });
    return imgUrl;
  }
  */

}


