import { getSubscription } from "../../../db/membership";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { subId } = req.query;

    const r = await getSubscription(subId);
    // console.log("getting sub ,", subId, r);
    // console.log(r);
    if (r?.subscription) return res.status(200).json(r?.subscription);
  }

  return res.status(200).json({});
}
