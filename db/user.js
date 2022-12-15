import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { firebaseConfig } from "../Constant";
const collName = "users";

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export async function addNewUser(
  userId,
  email,
  displayName,
  metadata,
  photoURL
) {
  console.log("Adding new user ...");

  try {
    const existUser = await getUser(userId);
    if (existUser) return existUser;

    const docRef = await setDoc(
      doc(db, collName, userId),
      {
        tradingViewUserName: displayName,
        active: true,
        email,
        displayName,
        metadata: { ...metadata },
        photoURL,
        created_at: serverTimestamp(),
      }
      // { merge: true }
    );

    console.log("Document written with: ", docRef);
    const r = await getUser(userId);
    return r;
  } catch (e) {
    console.error("Error adding document: ", e);
    return null;
  }
}

export async function getUser(id) {
  const docRef = doc(db, collName, id);
  const docSnap = await getDoc(docRef);

  console.log("Getting user ...", id);

  if (docSnap.exists()) {
    const user = docSnap.data();
    return { id, ...user };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function updateUserData(id, key, value) {
  console.log("Update user data ... ", id);
  const msgDoc = doc(db, collName, id);

  await updateDoc(msgDoc, {
    [key]: value,
  });

  const nwh = await getUser(id);
  return nwh;
}

export async function updateUserTVuserName(id, value) {
  console.log("Update user tvuserName ... ", id);
  const msgDoc = doc(db, collName, id);

  await updateDoc(msgDoc, {
    tradingViewUserName: value,
  });

  const nwh = await getUser(id);
  return nwh;
}
