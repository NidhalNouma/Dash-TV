import axios from "axios";
import { paddle_web } from "../../../Constant";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(200).json({ err: "invalid request" });

  const userId = req.query.userId;
  let r = { first: null, all: [] };

  try {
    const URL =
      "https://vendors.paddle.com/api/2.0/user/" + userId + "/transactions";
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

    // let s = us.data;
    // console.log(us.data);
    if (us.data?.response?.length > 0) r.first = us.data?.response[0];

    r.all = us.data?.response;
  } catch (err) {
    console.error("err -- ", err.message);
  }

  res.status(200).json(r);
}
