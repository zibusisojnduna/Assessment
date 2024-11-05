
import { db } from "../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";


export const addItemToFirestore = async (itemData) => {
  try {
    const itemsRef = collection(db, "items");
    const docRef = await addDoc(itemsRef, itemData); 
    console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    throw new Error(error.message); 
  }
};


export const getItemsFromFirestore = async () => {
  try {
    const itemsRef = collection(db, "items");
    const querySnapshot = await getDocs(itemsRef);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items; 
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getItemsByCategory = async (category) => {
  try {
    const itemsRef = collection(db, "items");
    const q = query(itemsRef, where("category", "==", category));
    const querySnapshot = await getDocs(q);
    let items = [];
    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });
    return items; 
  } catch (error) {
    throw new Error(error.message); 
  }
};
