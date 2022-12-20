import axios from "axios";
import { paddle_web } from "../../../Constant";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(200).json({ err: "invalid request" });

  const email = req.query.email;
  let r = { email, result: null };

  try {
    const URL = "https://vendors.paddle.com/api/2.0/subscription/users";
    const us = await axios.post(
      URL,
      {
        vender_id: paddle_web.venderId,
        vendor_auth_code: paddle_web.venderAuthCode,
        // results_per_page: 10,
      },
      {
        headers: {
          "Accept-Encoding": "gzip,deflate,compress",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
      }
    );

    let s = us.data?.response;

    s?.forEach((e) => {
      if (e.user_email === email) {
        r.result = e;
      }
    });
  } catch (err) {
    console.error("err -- ", err.message);
  }

  res.status(200).json(r);
}