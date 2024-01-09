import axios from "axios";
import { tradingview_web } from "../../../Constant";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(200).json({ err: "invalid request" });

  const username = req.query.s;
  let r = [];

  //   tradingview_web.scriptIds.forEach(async function (id, i) {
  for (let i = 0; i < tradingview_web.scriptIds.length; i++) {
    let id = tradingview_web.scriptIds[i];
    id = id.replace(/\s/g, "");
    console.log("add ... ", id, username);
    try {
      const URL = "https://www.tradingview.com/pine_perm/add/";
      const us = await axios.post(
        URL,
        {
          username_recip: username,
          pine_id: `PUB;${id}`,
        },
        {
          headers: {
            //   "User-Agent
            //     "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.75 Safari/537.36",
            accept: "application/json, text/javascript, */*; q=0.01",
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Origin: "https://www.tradingview.com",
            //   Refer:
            //     "https://www.tradingview.com/script/ldDtpVw7-HTI-Hiubris-Trend-Indicator-1-4/",
            "X-Requested-With": "XMLHttpRequest",
            //   Authority: "www.tradingview.com",
            "Access-Control-Allow-Origin": "*",
            //   "Access-Control-Allow-Headers":
            //     "Content-Type, Authorization, X-Requested-With",
            Cookie: `cookiePrivacyPreferenceBannerProduction=notApplicable; cookiesSettings={"analytics":true,"advertising":true}; _ga=GA1.2.1919076691.1665405462; _gid=GA1.2.1935234837.1671368309; _sp_ses.cf1a=*; g_state={"i_l":1,"i_p":1671455043401}; theme=dark; device_t=MUtNeTowLHdtdDI6MQ.8OvR7Ve4nbBrueFRdfPd_F7kMFXRcUbGRxMarVYYung; sessionid=${tradingview_web.sessionId}; etg=5fd4ffe4-2278-48ff-a088-7906be0f1636; cachec=5fd4ffe4-2278-48ff-a088-7906be0f1636; png=5fd4ffe4-2278-48ff-a088-7906be0f1636; tv_ecuid=5fd4ffe4-2278-48ff-a088-7906be0f1636; _sp_id.cf1a=fac826df-f914-48bb-b54d-dccd1879f5f4.1664371720.12.1671447948.1671399850.d61b1ebf-b1c8-44f7-8dc1-7a32b363ef9f`,
          },
        }
      );

      let s = us.data;
      console.log(s);
      r.push({ [id]: s });
    } catch (err) {
      console.error("err -- ", err.message);
    }
  }

  res.status(200).json({ name: username, r });
}
