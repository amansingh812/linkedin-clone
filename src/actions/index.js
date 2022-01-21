import { auth, provider} from "../firebase";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {SET_USER} from "../actions/actionTyped.js" ;

export const setUser = (payload) => ({
    type: SET_USER,
    user : payload,
})


export function signInAPI(){
    return (dispatch) =>{
        auth
        .signInWithPopup(provider)
        .then((payload) => {
                dispatch(setUser(payload.user));
            })
            .catch((error) => alert(error.message));
    };
}

// export function getUerAuth() {
//     return (dispatch) => {
//         auth.onAuthStateChange(async (user) =>{
//             if(user) {
//                 dispatch(setUser(user));
//             }
//         });
//     };
// }

export function signOutAPI(){
    return (dispatch) => {
        auth 
            .signOut()
            .then(() =>{
                dispatch(setUser(null));
            })
            .catch((error)=>{
                console.log(error.message);
            });
    };
}