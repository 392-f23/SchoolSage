import { initializeApp, getApps, getApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2w13WSmDy7yV2IFJdMkS1GhCr9zjDbF8",
  authDomain: "schoolsage-d5dd2.firebaseapp.com",
  databaseURL: "https://schoolsage-d5dd2-default-rtdb.firebaseio.com/",
  projectId: "schoolsage-d5dd2",
  storageBucket: "schoolsage-d5dd2.appspot.com",
  messagingSenderId: "971725551336",
  appId: "1:971725551336:web:2504c046f0a7470f737b5d",
};

export const getFirebase = () => {
  return !getApps().length ? initializeApp(firebaseConfig) : getApp();
};

export const getFirebaseDatabase = (firebase) => {
  return getDatabase(firebase);
};

export const getFirebaseStorage = (firebase) => {
  return getStorage(firebase);
};
