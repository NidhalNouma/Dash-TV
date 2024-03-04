export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,

  authDomain: "trusted-signals.firebaseapp.com",
  projectId: "trusted-signals",
  storageBucket: "trusted-signals.appspot.com",
  messagingSenderId: "1046125158444",
  appId: "1:1046125158444:web:d15791a50826b129bc7189",
  measurementId: "G-54FDFR4R05",
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
  Lifetime: process.env.NEXT_PUBLIC_PADDLE_PLAN_LIFE_TIME,
};

export function getPlanByValue(value) {
  return Object.keys(paddle_plans).find((key) => paddle_plans[key] === value);
}

export const TVIndicatorsList = [
  "ed426d6bb6564bc8b563e18a2b018638", //Teby2OlF-Trusted-Signals-V3-BOT-BETA
  "97995a3453a3496f86b6931edae4ab40", //z9mX8MzK-Trusted-Signals-V3-Overlay-BETA
  "954e0acd75764fc5948ab897bf7fe789", //kdOOJqQN-Trusted-Signals-Oscillator
  "1b8f0ea91b3848b9b7182412fc1cee43", //15HFwnmu-TS-Market-Open-Breakout
  "d5Gu2O39SRfulQwBJ9rNEdy0xgVCWJOE", //nj1aaWid-TS-Market-Scanner/
  "EGSSwvli2eFMp1lkwuO0XbLy6CgEYQ4Z", //7qXklxv7-TS-Scalper
  "ejqUf2PGhrUXdtdVD3tOEP4o4NtqkTPU", //mEQShji5-TS-Sniper-Support-Resistance/
  "2MfvkIeh3hP28GItTihVN81mGg1X3mIt", //fyrIGntk-TS-Trend-Meter
  "CAaDHDJDUi4DICn2nxKuoSETxEAP2RLa", //"pB4Uz91h-TS-S-R-Tweezers",
  "p4RJGmor1nbAQtow6cOL19DXkWtvyIPt", //"RU4dfOGH-TrustedSignals-Currency-Strength-Indicator",
  "XDFGoanwZt24TxFCSN28xUhyFSW8vAms", //"6eDf1Joz-TrustedSignals-Doji-Scalper",
  "nEC0YkGFcAzDkc4qx9uGTvLT6Q91TgN8", //"sOULLUJh-TrustedSignals-Oscillator-Divergences",
  "sOeVKRO9AJ0t2KduUC10LTQ10OLZHQ5G", //"jXfiXCih-TrustedSignals",
  "4d013637dfe6434ab09b71c658d8ae2c",
];

const lifetimeScriptIds = ["99584ca659b64853b241ee90edb7e6bc"];

export const tradingview_web = {
  sessionId: process.env.NEXT_PUBLIC_SESSION_ID_TV,
  scriptIds: TVIndicatorsList,
  lifetimeScriptIds: lifetimeScriptIds,
};
