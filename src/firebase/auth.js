import { auth } from './firebase';
import { signInWithPopup } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

export const doSignInWithGoogle = async ()=>{
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup();

    return result
}

export const doSignOut = () => {
    return auth.signOut();
}