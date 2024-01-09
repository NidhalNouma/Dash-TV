import { getSubscriptionsList } from "../../../db/membership";

export default async function handler(req, res) {
  //   console.log("req..");
  if (req.method === "GET") {
    //   const { id } = req.query;

    const r = await getSubscriptionsList();
    // console.log(r.data.list);
    if (r) return res.status(200).json(r);
  }

  return res.status(200).json({});
}
