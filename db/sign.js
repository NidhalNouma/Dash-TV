import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updatePassword,
  updateProfile,
} from "firebase/auth";
import { firebaseConfig } from "../Constant";
import { errorMessageByCode } from "./authErrors";

import { addNewUser, getUser } from "./user";

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

export function checkUser(setUser) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      console.log("user=> . ", user);
      setUser(user);
    } else {
      setUser(null);
    }
  });
}

// export function getActiveUser(setUser) {
//   const auth = getAuth();
//   const user = auth.currentUser;

//   console.log("auth ", user);
//   if (user) setUser(user);
// }

export async function signUp(email, password, username) {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const useru = await updateProfile(userCredential.user, {
      displayName: username,
    });
    console.log("usr", user);

    let fuser = null;
    if (user) {
      fuser = await addNewUser(
        user.uid,
        user.email,
        user.displayName,
        user.metadata,
        user.photoURL
      );
    }

    // await sendEmailVerification(auth.currentUser);
    return { fuser, error: null, user };
  } catch (error) {
    console.log("SignUp error => . ", error.message);
    return {
      user: null,
      error,
      err: errorMessageByCode(error.code),
    };
  }
}

export async function signIn(email, password) {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("usr", user);
    let fuser = null;
    if (user) {
      fuser = await getUser(user.uid);
    }
    return { user, error: null, fuser };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      user: null,
      err: errorMessageByCode(error.code),
      error,
    };
  }
}

export async function continueWithGoogle() {
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);

    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    let fuser = null;
    if (user) {
      fuser = await addNewUser(
        user.uid,
        user.email,
        user.displayName,
        user.metadata,
        user.photoURL
      );
    }

    return { user, error: null, fuser };
  } catch (error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    return {
      user: null,
      err: errorMessageByCode(error.code),
      error,
    };
  }
}

export async function signOutf() {
  const auth = getAuth();
  try {
    const userCredential = await signOut(auth);
    const usr = userCredential.user;
    return { usr, user: null, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      user: null,
      err: errorMessageByCode(error.code),
      error,
    };
  }
}

export async function changePassword(password) {
  const auth = getAuth();
  const user = auth.currentUser;
  try {
    await updatePassword(user, password);
    return { user: null, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      err: errorMessageByCode(error.code),
      error,
    };
  }
}

export async function resetPassword(email) {
  const auth = getAuth();
  try {
    const reset = await sendPasswordResetEmail(auth, email);
    return { reset, error: null };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      reset: null,
      err: errorMessageByCode(error.code),
      error,
    };
  }
}
