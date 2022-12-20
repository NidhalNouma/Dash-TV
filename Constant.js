export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "trusted-signals.firebaseapp.com",
  projectId: "trusted-signals",
  storageBucket: "trusted-signals.appspot.com",
  messagingSenderId: "1046125158444",
  appId: "1:1046125158444:web:d15791a50826b129bc7189",
  measurementId: "G-54FDFR4R05",
};

export const tradingview_web = {
  sessionId: process.env.NEXT_PUBLIC_SESSION_ID_TV,
  scriptIds: process.env.NEXT_PUBLIC_SCRIPTS_IDS?.split(","),
};

export const paddle_web = {
  venderId: process.env.NEXT_PUBLIC_PADDLE_VENDOR_ID,
  venderAuthCode: process.env.NEXT_PUBLIC_PADDLE_VENDOR_AUTH_CODE,
};

export const paddle_plans = {
  "Monthly Basic": process.env.NEXT_PUBLIC_PADDLE_PLAN_MONTHLY_BASIC,
  "Monthly Pro": process.env.NEXT_PUBLIC_PADDLE_PLAN_MONTHLY_PRO,
  "Quarterly Pro": process.env.NEXT_PUBLIC_PADDLE_PLAN_QUATERLY_PRO,
  "Yearly Pro": process.env.NEXT_PUBLIC_PADDLE_PLAN_YEARLY_PRO,
  "Life Time": process.env.NEXT_PUBLIC_PADDLE_PLAN_LIFE_TIME,
};

export function getPlanByValue(value) {
  return Object.keys(paddle_plans).find((key) => paddle_plans[key] === value);
}
