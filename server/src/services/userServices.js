
import { db } from "../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";


export const addUserToFirestore = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email: user.email,
      name: user.displayName || "Unknown",
      createdAt: new Date(),
    });
  } catch (error) {
    throw new Error(error.message); 
  }
};


export const getUserFromFirestore = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    if (userDoc.exists()) {
      return userDoc.data(); 
    } else {
      throw new Error("No user found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
