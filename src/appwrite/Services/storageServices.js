import { buckets } from "../buckets";
import { storage } from "../config"; // Ensure you have initialized Appwrite client and storage service
import { ID } from "appwrite";

const storageServices = {};

buckets.forEach((bucket) => {
  storageServices[bucket.name] = {
    createFile: async (file, id = ID.unique()) =>
      await storage.createFile(bucket.id, id, file),

    deleteFile: async (id) => await storage.deleteFile(bucket.id, id),

    getFile: async (id) => await storage.getFile(bucket.id, id),

    getFileDownload: async (id) => await storage.getFileDownload(bucket.id, id),

    getFilePreview: async (id) => await storage.getFilePreview(bucket.id, id),

    getFileView: async (id) => await storage.getFileView(bucket.id, id),

    listFiles: async (queries) => await storage.listFiles(bucket.id, queries),

    updateFile: async (id, file) =>
      await storage.updateFile(bucket.id, id, file),
  };
});

export default storageServices;
