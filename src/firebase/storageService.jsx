import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { app } from "../config/firebase"; // Make sure firebaseConfig is imported
import { db } from "../config/firebase";
import { deleteObject } from "firebase/storage";
const storage = getStorage(app);

export const uploadFile = (file, path) => {
  const storageRef = ref(storage, path);
  return uploadBytes(storageRef, file).then((snapshot) => {
    return getDownloadURL(snapshot.ref);
  });
};

export const getFileURL = (path) => {
  const storageRef = ref(storage, path);
  return getDownloadURL(storageRef);
};


export const deleteFileFromStorage = async (filePath) => {
  const fileRef = ref(storage, filePath);
  await deleteObject(fileRef);
};