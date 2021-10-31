import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);

    // get auth and provider 
    const auth = getAuth();
    const provider = new GoogleAuthProvider();


    // handle google sing in 
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, provider);
    }

    // user  sign out 
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
            setLoading(false);
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }
    //on auth state change 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser({});
                setLoading(false);
            }

        });
    }, []);

    return {
        handleGoogleSignIn,
        user,
        handleSignOut,
        loading,
        setLoading,
        setUser

    }
};

export default useFirebase;