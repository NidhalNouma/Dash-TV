import axios from "axios";
import { paddle_web, paddle_plans } from "../../../Constant";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(200).json({ err: "invalid request" });

  const email = req.query.email;
  let r = { email, result: null };

  console.log("checking user paddle ", r);

  if (!r.result) {
    let pageCnt = 1;

    while (pageCnt > 0) {
      try {
        console.log("Checking subs page ", pageCnt);
        const URL = "https://vendors.paddle.com/api/2.0/subscription/users";
        const us = await axios.post(
          URL,
          {
            vender_id: paddle_web.venderId,
            vendor_auth_code: paddle_web.venderAuthCode,
            results_per_page: 15,
            page: pageCnt,
          },
          {
            headers: {
              "Accept-Encoding": "gzip,deflate,compress",
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          }
        );

        let s = us.data?.response;

        for (let i = 0; i < s.length; i++) {
          const e = s[i];
          if (e.user_email?.toLowerCase() === email?.toLowerCase()) {
            console.log("subs", e.user_email);
            r.result = e;
            pageCnt = 0;
          }
          // console.log("subs", e.user_email, pageCnt);
        }

        if (s?.length === 0) pageCnt = -1;
        else if (pageCnt > 0) pageCnt += 1;
      } catch (err) {
        console.error("err -- ", err.message);
        pageCnt = -2;
      }
    }
  }

  if (!r.result) {
    let pageCnt = 1;

    while (pageCnt > 0) {
      try {
        console.log("Checking trans page ", pageCnt);
        const URL =
          "https://vendors.paddle.com/api/2.0/product/" +
          paddle_plans.Lifetime +
          "/transactions";
        const us = await axios.post(
          URL,
          {
            vender_id: paddle_web.venderId,
            vendor_auth_code: paddle_web.venderAuthCode,
            page: pageCnt,
          },
          {
            headers: {
              "Accept-Encoding": "gzip,deflate,compress",
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          }
        );

        let s = us.data?.response;

        for (let i = 0; i < s.length; i++) {
          const e = s[i];
          if (e.user?.email?.toLowerCase() === email?.toLowerCase()) {
            console.log("trans", e.user.email);
            r.result = e;
            pageCnt = 0;
            break;
          }
          // console.log("trans", e.user.email, pageCnt);
        }

        if (s?.length === 0) pageCnt = -1;
        else if (pageCnt > 0) pageCnt += 1;
      } catch (err) {
        console.error("err -- ", err.message);
        pageCnt = -2;
      }
    }
  }

  res.status(200).json(r);
}
