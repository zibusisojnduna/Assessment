
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const signUp = async (username, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, username, password);
    return userCredential.user; 
  } catch (error) {
    throw new Error(error.message); 
  }
};


export const signIn = async (username, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, username, password);
    return userCredential.user; 
  } catch (error) {
    throw new Error(error.message);
  }
};


export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};
