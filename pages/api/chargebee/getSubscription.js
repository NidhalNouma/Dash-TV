import { getSubscriptionByEmail } from "../../../db/membership";

export default async function handler(req, res) {
  //   console.log("req..", req.query);
  if (req.method === "GET") {
    const { email } = req.query;

    const r = await getSubscriptionByEmail(email);
    // console.log(r.data.list);
    if (r) return res.status(200).json(r);
  }

  return res.status(200).json({});
}
