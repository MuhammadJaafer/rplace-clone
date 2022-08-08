import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, db, GoogleProvider } from "../firebase/config";

export const useSinginWithGoogle = () => {
  const signin = async () => {
    const res = await signInWithPopup(auth, GoogleProvider);
    const credential = GoogleAuthProvider.credentialFromResult(res);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = res.user;

    return user;
  };
  return { signin };
};
