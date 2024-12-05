import {
    getFirestore,
    collection,
    addDoc,
    getDoc,
    getDocs,
    query,
    where,
    updateDoc,
    doc,
    deleteDoc,
  } from "firebase/firestore";
  import { app } from "../config/firebase"; // Ensure this is correctly imported from your Firebase setup
  import moment from "moment";
  
  const db = getFirestore(app);
  
  export const addDocument = (collectionName, data) => {
    return addDoc(collection(db, collectionName), data);
  };
  
  export const getDocument = (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    return getDoc(docRef);
  };
  
  export const getAllDocuments = (collectionName) => {
    const colRef = collection(db, collectionName);
    return getDocs(colRef);
  };
  
  export const updateDocument = (collectionName, id, data) => {
    const docRef = doc(db, collectionName, id);
    return updateDoc(docRef, data);
  };
  
  export const fetchDocumentsWithQuery = (collectionName, fieldName, value) => {
    const q = query(
      collection(db, collectionName),
      where(fieldName, "==", value)
    );
    return getDocs(q);
  };
  
  export const deleteDocument = (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    return deleteDoc(docRef);
  };
  
  
  
  
  
  // New function to get a document by a specific field value
  export const getDocumentByField = async (collectionName, fieldName, value) => {
    const q = query(
      collection(db, collectionName),
      where(fieldName, "==", value)
    );
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      return querySnapshot.docs[0]; // Assuming you want the first matching document
    }
    return null; // Return null if no matching document is found
  };