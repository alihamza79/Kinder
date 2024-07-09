import { collections } from "../collections";
import { databaseId, databases } from "../config";
import { ID } from "appwrite";
import storageServices from "./storageServices";

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
