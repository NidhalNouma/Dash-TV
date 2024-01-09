import axios from "axios";

const URL =
  "https://" + process.env.NEXT_PUBLIC_CHARGEBEE_SITE + ".chargebee.com";
const key = process.env.NEXT_PUBLIC_CHARGEBEE_API_KEY_B;
const encodedToken = Buffer.from(key + ":").toString("base64");
const authorization = `Basic ${encodedToken}`;

export async function getHostedPage(id) {
  const purl = "/api/v2/hosted_pages/" + id;
  let r = null;
  try {
    r = await axios({
      url: purl,
      baseURL: URL,
      headers: { Authorization: authorization },
    });

    r = r.data;
  } catch (e) {
    console.log("get hosted page error => ", e);
  }

  return r;
}

export async function getSubscriptionsList() {
  let purl = "/api/v2/subscriptions/?limit=100";
  let r = [];
  let offset = "";
  let loop = true;

  //   console.log("get subscriptions list");

  try {
    while (loop) {
      if (offset.length > 0) purl = purl + "&offset=" + offset;
      const req = await axios({
        url: purl,
        baseURL: URL,
        method: "GET",
        headers: {
          Authorization: authorization,
          // "Access-Control-Allow-Origin": "*",
        },
      });

      //   console.log(
      //     req?.data?.next_offset,
      //     " . ",
      //     offset,
      //     " . ",
      //     req?.data?.list?.length,
      //     " . ",
      //     r?.length
      //   );
      if (req?.data?.list) {
        r = [...r, ...req.data.list];
      }
      if (req?.data?.next_offset && req?.data?.next_offset != offset) {
        offset = req.data.next_offset;
      } else loop = false;
    }
    // console.log("r = ", r);

    // r = r.data;
  } catch (e) {
    console.log("get subscription error => ", e.message);
  }

  return r;
}

export async function getSubscription(id) {
  const purl = "/api/v2/subscriptions/" + id;
  let r = null;

  try {
    r = await axios({
      url: purl,
      baseURL: URL,
      headers: { Authorization: authorization },
    });

    r = r.data;
  } catch (e) {
    console.log("get subscription error => ", e.message);
  }

  return r;
}

export async function deleteSubscription(id) {
  const purl = "/api/v2/subscriptions/" + id + "/cancel_for_items";
  let r = null;
  try {
    r = await axios({
      method: "POST",
      url: purl,
      baseURL: URL,
      data: {
        credit_option_for_current_term_charges: "prorate",
        nd_of_term: "false",
      },
      headers: { Authorization: authorization },
    });

    r = r.data;
  } catch (e) {
    console.log("delete subscription error => ", e.message);
  }

  return r;
}

export async function cancelSubscriptionImmidiatly(id) {
  const purl = "/api/v2/subscriptions/" + id + "/del";
  let r = null;
  try {
    r = await axios({
      method: "POST",
      url: purl,
      baseURL: URL,
      headers: { Authorization: authorization },
    });

    r = r.data;
  } catch (e) {
    console.log("delete subscription error => ", e.message);
  }

  return r;
}
