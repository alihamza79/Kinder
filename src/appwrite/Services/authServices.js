import { account } from "../config";

export async function registerUser(username, email, password) {
  const user = await account.create("unique()", email, password, username);
  localStorage.setItem("authToken", user.$id);
  return user;
}

export const signIn = async (email, password) => {
  const session = await account.createEmailSession(email, password);
  localStorage.setItem("authToken", session.userId);
  return session;
};

export const signOutUser = () => {
  localStorage.removeItem("authToken");
  return account.deleteSession("current");
};

export const onAuthChange = (callback) => {
  // Appwrite doesn't have onAuthStateChanged. Use localStorage and manual checks
  const authToken = localStorage.getItem("authToken");
  callback(authToken ? true : false);
};

export function getCurrentUser() {
  return account.get();
}
