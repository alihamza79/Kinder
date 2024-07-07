import { collections } from "../collections";
import { databaseId, databases } from "../config";
import { ID } from "appwrite";

const db = {};

collections.forEach((col) => {
  db[col.name] = {
    create: async (payload, id = ID.unique()) =>
      await databases.createDocument(databaseId, col.id, id, payload),

    update: async (id, payload) =>
      await databases.updateDocument(databaseId, col.id, id, payload),

    get: async (id) => await databases.getDocument(databaseId, col.id, id),

    list: async (queries) =>
      await databases.listDocuments(databaseId, col.id, queries),

    delete: async (id) =>
      await databases.deleteDocument(databaseId, col.id, id),
  };
});

export default db;

// const getCollectionIdByName = async (collectionName) => {
//   try {
//     const collections = await databases.listCollections(databaseId);
//     const collection = collections.collections.find(
//       (col) => col.name === collectionName
//     );
//     if (!collection) {
//       throw new Error(`Collection with name ${collectionName} not found`);
//     }
//     return collection.$id;
//   } catch (error) {
//     console.error("Error fetching collection ID by name:", error);
//     throw error;
//   }
// };

// export const addDocument = async (collectionName, data) => {
//   try {
//     const collectionId = await getCollectionIdByName(collectionName);
//     const response = await databases.createDocument(
//       databaseId,
//       collectionId,
//       "unique()",
//       data
//     );
//     console.log("Document added successfully:", response);
//     return response;
//   } catch (error) {
//     console.error("Error adding document:", error);
//     throw error;
//   }
// };

// export const getDocument = (collectionName, id) => {
//   return databases.getDocument(databaseId, collectionName, id);
// };

// export const getAllDocuments = async (collectionName) => {
//   try {
//     const collectionId = await getCollectionIdByName(collectionName);
//     const response = await databases.listDocuments(databaseId, collectionId);
//     console.log("Documents fetched successfully:", response);
//     return response.documents;
//   } catch (error) {
//     console.error("Error fetching documents:", error);
//     throw error;
//   }
// };

// export const updateDocument = (collectionName, id, data) => {
//   return databases.updateDocument(databaseId, collectionName, id, data);
// };

// export const fetchDocumentsWithQuery = (collectionName, fieldName, value) => {
//   return databases.listDocuments(databaseId, collectionName, [
//     Query.equal(fieldName, value),
//   ]);
// };

// export const deleteDocument = (collectionName, id) => {
//   return databases.deleteDocument(databaseId, collectionName, id);
// };

// export const getDocumentByField = async (collectionName, fieldName, value) => {
//   const documents = await databases.listDocuments(databaseId, collectionName, [
//     Query.equal(fieldName, value),
//   ]);
//   if (documents.documents.length > 0) {
//     return documents.documents[0]; // Assuming you want the first matching document
//   }
//   return null; // Return null if no matching document is found
// };
