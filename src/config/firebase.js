import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABnuAZYrWjk1C3OayzVUlqKdDmxqtHKk8",
  authDomain: "subscriptions-tracker-dce65.firebaseapp.com",
  databaseURL: "https://subscriptions-tracker-dce65.firebaseio.com",
  projectId: "subscriptions-tracker-dce65",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
