import createPersistedState from "vuex-persistedstate"; 
import * as Cookies from "js-cookie"; 
//import cookie from "cookie";
//import SecureLS from "secure-ls";
//  const ls = new SecureLS({ isCompression: false });
/*
export default ({ store, req }) => { 
    createPersistedState({
        paths: ["example","auth"],
        
        storage: {
            //getItem: (key) => ls.get(key),
            //setItem: (key, value) => ls.set(key, value),
            //removeItem: (key) => ls.remove(key)
            
            getItem: (key) => {

                // See https://nuxtjs.org/guide/plugins/#using-process-flags
                
                //if (process.server) { 
                //    const parsedCookies = cookie.parse(req.headers.cookie);
                //    return parsedCookies[key];
                //} else { 
                //    return Cookies.get(key); 
                //}
                
                return Cookies.get(key);
            },
            
            // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON. 
            setItem: (key, value) => 
                Cookies.set(key, value, { 
                    expires: 1, secure: true
                }), 
            removeItem: (key) => Cookies.remove(key)
            
         } 
    })(store); 
};
*/
