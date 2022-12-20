import axios from "axios";
import { useEffect, useState } from "react";

export const SearchTVUserName = () => {
  const [usernames, setUserNames] = useState([]);

  async function search(username) {
    const URL = "/api/tv/search";

    try {
      const r = await axios.get(URL, {
        withCredentials: false,
        headers: {},
        params: {
          s: username,
        },
      });

      setUserNames(r.data.r);
    } catch (err) {
      console.error(err);
    }
  }

  return { usernames, search };
};
