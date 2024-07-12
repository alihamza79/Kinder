import { account } from "../config";

export async function registerUser(username, email, password) {
  const user = await account.create("unique()", email, password, username);
  localStorage.setItem("authToken", user.$id);
  return user;
}

export const signIn = async (email, password) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    localStorage.setItem("authToken", session.$id); // Store the session ID
    return session;
  } catch (error) {
    throw error;
  }
};

export const signOutUser = async () => {
  try {
    await account.deleteSession('current');
    localStorage.removeItem("authToken");
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    const user = await account.get();
    return user;
  } catch (error) {
    throw error;
  }
};

export const checkAuth = async () => {
  try {
    await account.get(); // If this doesn't throw an error, the user is authenticated
    return true;
  } catch (error) {
    return false;
  }
};