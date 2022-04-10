export default function({ store, redirect, route }) {

    console.log("@@@@@@store.state.user:" + store.state.user); 
    console.log("@@@@@@route.path:" +route.path);
    
    if (!store.state.user && route.path !== '/auth/signIn'){
      //return redirect('/auth/signIn')
    }
}