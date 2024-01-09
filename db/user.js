import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getSubscriptionsList } from "./membership";
import axios from "axios";
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
        tradingViewUserName: "",
        active: true,
        email,
        displayName,
        metadata: { ...metadata },
        photoURL,
        paddleId: "",
        subscription_id: "",
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
    let user = docSnap.data();

    let paddle = null;
    let chargeBee = null;
    // if (!user.paddleId) {
    //   paddle = await axios.post("/api/subs/getmail?email=" + user.email);
    //   paddle = paddle?.data;

    //   if (paddle.result) {
    //     let paddleId = paddle.result.user_id;
    //     if (!paddleId) paddleId = paddle.result?.user?.user_id;
    //     if (paddleId) {
    //       const cid = await updateUserData(id, "paddleId", paddleId, false);
    //     }

    //     const subId = paddle.result?.subscription_id;
    //     if (subId) {
    //       const cid = await updateUserData(id, "subscription_id", subId, false);
    //     }
    //   }
    // } else {
    if (user.subscription_id) {
      paddle = await axios.post("/api/subs/" + user.subscription_id);
      paddle = { result: paddle.data, email: user.email };
    } else if (user.paddleId) {
      paddle = await axios.post("/api/subs/user?userId=" + user.paddleId);
      paddle = { result: paddle.data?.first, email: user.email };
    }
    if (user.chargeBeeSubscriptionId) {
      chargeBee = await axios.get(
        "/api/chargebee/sub?subId=" + user.chargeBeeSubscriptionId
      );
      chargeBee = chargeBee?.data;
    }
    // }

    return { id, ...user, paddle: paddle, chargeBee };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function checkPaddleSubs(id) {
  const docRef = doc(db, collName, id);
  const docSnap = await getDoc(docRef);

  console.log("Checking user paddle subs ...", id);

  if (docSnap.exists()) {
    let user = docSnap.data();

    let paddle = null;
    if (!user.paddleId) {
      paddle = await axios.post(
        "https://ssrtrustedsignals-3nfnn26ppa-uc.a.run.app/api/subs/getmail?email=" +
          user.email,
        {},
        { headers: { "Access-Control-Allow-Origin": "*" } }
      );
      // paddle = await axios.post("/api/subs/getmail?email=" + user.email);
      paddle = paddle?.data;

      if (paddle.result) {
        let paddleId = paddle.result.user_id;
        if (!paddleId) paddleId = paddle.result?.user?.user_id;
        if (paddleId) {
          const cid = await updateUserData(id, "paddleId", paddleId, false);
        }

        const subId = paddle.result?.subscription_id;
        if (subId) {
          const cid = await updateUserData(id, "subscription_id", subId, false);
        }
      }
    }

    return { id, ...user, paddle: paddle };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function checkChargeBeeSubs(id) {
  const docRef = doc(db, collName, id);
  const docSnap = await getDoc(docRef);

  console.log("Checking user chargebee subs ...", id);

  let selectChargeBee = null;
  if (docSnap.exists()) {
    let user = docSnap.data();

    let chargeBee = null;
    if (!user.chargeBee) {
      chargeBee = await axios.get("/api/chargebee/getSubscriptions");
      // paddle = await axios.post("/api/subs/getmail?email=" + user.email);
      chargeBee = chargeBee?.data;
      // console.log(chargeBee);

      let subscription = null;

      for (let i = 0; i < chargeBee.length; i++) {
        const sub = chargeBee[i];
        if (sub?.customer.email)
          if (sub.customer.email === user.email) {
            subscription = sub;
          }
      }

      if (subscription) {
        const cic = await updateUserData(
          id,
          "chargeBeeCustomerId",
          subscription.customer.id,
          false
        );
        const cis = await updateUserData(
          id,
          "chargeBeeSubscriptionId",
          subscription.subscription.id,
          false
        );

        selectChargeBee = subscription;
      }

      // if (paddle.result) {
      //   let paddleId = paddle.result.user_id;
      //   if (!paddleId) paddleId = paddle.result?.user?.user_id;
      //   if (paddleId) {
      //     const cid = await updateUserData(id, "paddleId", paddleId, false);
      //   }

      //   const subId = paddle.result?.subscription_id;
      //   if (subId) {
      //     const cid = await updateUserData(id, "subscription_id", subId, false);
      //   }
      // }
    }

    return {
      id,
      ...user,
      FullchargeBee: selectChargeBee,
      chargeBee: selectChargeBee?.subscription,
    };
  } else {
    console.log("No such document!");
    return null;
  }
}

export async function updateUserData(id, key, value, getUser = true) {
  console.log("Update user data ... ", id);
  const msgDoc = doc(db, collName, id);

  await updateDoc(msgDoc, {
    [key]: value,
  });

  if (getUser) {
    const nwh = await getUser(id);
    return nwh;
  } else return true;
}

export async function updateUserTVuserName(id, value, oldValue) {
  console.log("Update user tvuserName ... ", id);
  const msgDoc = doc(db, collName, id);

  if (oldValue) {
    console.log("Removing old tv username ... ", oldValue);
    const a = await axios.post("/api/tv/remove?s=" + oldValue);
    console.log(a);
  }

  if (value) {
    console.log("Adding new tv username ... ", value);
    const a = await axios.post("/api/tv/add?s=" + value);
    console.log(a);
  }

  await updateDoc(msgDoc, {
    tradingViewUserName: value,
  });

  const nwh = await getUser(id);
  return nwh;
}
