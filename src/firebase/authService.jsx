// src/firebase/authService.js

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
  confirmPasswordReset,
} from 'firebase/auth';
import { app } from '../config/firebase'; // Adjust the path to your Firebase config

const auth = getAuth(app);

/**
 * Registers a new user with email and password, then updates their profile with a display name.
 * @param {string} username - The display name of the user.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<UserCredential>} - The user credential object.
 */
export async function registerUser(username, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;
  await updateProfile(user, {
    displayName: username,
  });
  localStorage.setItem('authToken', user.accessToken);
  return userCredential;
}

/**
 * Signs in a user with email and password.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<UserCredential>} - The user credential object.
 */
export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem('authToken', userCredential.user.accessToken);
    return userCredential;
  } catch (error) {
    throw error;
  }
};

/**
 * Signs out the current user.
 * @returns {Promise<void>}
 */
export const signOutUser = () => {
  localStorage.removeItem('authToken');
  return signOut(auth);
};

/**
 * Sets up an authentication state observer and gets user data.
 * @param {function} callback - The callback function to handle auth state changes.
 * @returns {Unsubscribe} - A function to unsubscribe the listener.
 */
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

/**
 * Retrieves the currently signed-in user.
 * @returns {User | null} - The user object if logged in, otherwise null.
 */
export function getCurrentUser() {
  const user = auth.currentUser;
  return user || null;
}

/**
 * Checks if a user is authenticated.
 * @returns {Promise<boolean>} - Resolves to true if authenticated, else false.
 */
export const checkAuth = () => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(!!user);
    });
  });
};

/**
 * Sends a password recovery email to the specified email address.
 * @param {string} email - The user's email address.
 * @returns {Promise<void>}
 */
export const sendPasswordRecoveryEmail = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error; // Propagate the error to be handled by the caller
  }
};

/**
 * Confirms the password reset with the given code and new password.
 * @param {string} oobCode - The out-of-band code from the password reset email.
 * @param {string} newPassword - The new password to set.
 * @returns {Promise<void>}
 */
export const confirmPasswordResetFunc = async (oobCode, newPassword) => {
  try {
    await confirmPasswordReset(auth, oobCode, newPassword);
  } catch (error) {
    throw error;
  }
};
