import { Client, Account, Databases, Storage } from "appwrite";

const Endpoint = "https://cloud.appwrite.io/v1";
export const projectID = "66887083002da69658f9";
export const databaseId = "66887ffc0015cd538ebb";

const client = new Client();

client
  .setEndpoint(Endpoint) // Your Appwrite Endpoint
  .setProject(projectID); // Your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
