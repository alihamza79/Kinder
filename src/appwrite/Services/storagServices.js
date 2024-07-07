import { storage } from "../config";

export const uploadFile = async (file, path) => {
  const response = await storage.createFile("unique()", file);
  return response;
};

export const getFileURL = (fileId) => {
  return storage.getFileView(fileId);
};

export const deleteFileFromStorage = async (fileId) => {
  await storage.deleteFile(fileId);
};
