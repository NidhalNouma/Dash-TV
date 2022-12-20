import axios from "axios";

export default async function handler(req, res) {
  const username = req.query.s;
  let r = [];

  try {
    const URL = "https://www.tradingview.com/username_hint";
    const us = await axios.get(URL, {
      //   withCredentials: false,
      headers: {
        // "Content-Type": "application/json;charset=UTF-8",
        accept: "*/*",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-Requested-With",
        // "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
        //   "User-Agent":
        //     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36",
      },
      params: {
        s: username,
      },
    });

    // console.log(username, us.data);
    r = us.data;
  } catch (err) {
    console.error(err);
  }

  res.status(200).json({ name: username, r });
}
