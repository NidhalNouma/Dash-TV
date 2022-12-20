import { createContext, useContext, useState, useEffect } from "react";
import { getUser, updateUserTVuserName, addNewUser } from "../db/user";
import { checkUser } from "../db/sign";
import { SearchTVUserName } from "./TradingViewHook";

export const UserC = createContext(null);

export const UserCC = ({ children, value }) => {
  return <UserC.Provider value={value}>{children}</UserC.Provider>;
};

export const GetUserContext = () => useContext(UserC);

// export const FullUserC = createContext(null);

// export const FullUserCC = ({ children, value }) => {
//   return <FullUserC.Provider value={value}>{children}</FullUserC.Provider>;
// };

// export const GetFullUserContext = () => useContext(FullUserC);

export const GetFullUser = () => {
  const [fullUser, setFullUser] = useState(null);
  const [load, setLoad] = useState(true);

  const getFullUser = async (userId) => {
    if (!userId) return;
    const r = await getUser(userId);
    // console.log(r);
    setFullUser(r);
  };

  useEffect(() => {
    checkUser(async (u) => {
      console.log("Checking user ...", u);
      if (!u) {
        setLoad(false);
      } else {
        let r = await getUser(u.uid);
        if (!r)
          r = await addNewUser(
            u.uid,
            u.email,
            u.displayName,
            u.metadata,
            u.photoURL
          );
        setFullUser(r);
        setLoad(false);
      }
    });
  }, []);

  return { fullUser, setFullUser, getFullUser, load };
};

export const UserTradingView = (userId, name) => {
  const [tvusername, setTVUserName] = useState(name);
  const [error, setError] = useState();
  const [edit, setEdit] = useState(name ? false : true);

  const { search, usernames } = SearchTVUserName();

  async function save(onComplete) {
    if (!tvusername) {
      setError("Fill your username");
      return null;
    }
    const r = await updateUserTVuserName(userId, tvusername, name);
    onComplete(r);
    setEdit(false);
    return r;
  }

  useEffect(() => {
    if (tvusername.length > 0 && edit) {
      search(tvusername);
    }
  }, [tvusername]);

  return { tvusername, setTVUserName, error, save, edit, setEdit, usernames };
};
