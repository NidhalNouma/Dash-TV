import "../styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect, Fragment } from "react";
import { checkUser } from "../db/sign";

import { UserCC, GetFullUser, checkMembership } from "../hooks/UserHook";

import LoadingPage from "../features/LoadingPage";

function MyApp({ Component, pageProps }) {
  const { fullUser, getFullUser, setFullUser, load } = GetFullUser();
  const router = useRouter();

  useEffect(() => {
    const { pathname } = router;
    console.log(fullUser);
    if (fullUser) {
      if (
        pathname === "/" ||
        pathname === "/signin" ||
        pathname === "/signup" ||
        pathname === "/forget-password"
      ) {
        const mem = checkMembership(fullUser);
        if (mem.active) router.push("/tradingview");
        else router.push("/membership");
      }
    } else if (!fullUser) {
      if (
        pathname !== "/signin" &&
        pathname !== "/signup" &&
        // pathname !== "/" &&
        pathname !== "/forget-password"
        // "/" !== landingUrl
      )
        router.push("/signin");
    }
  }, [fullUser]);

  return (
    <Fragment>
      <Head>
        <title>Trustedsignals</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {load ? (
        <LoadingPage />
      ) : (
        <UserCC value={{ fullUser, getFullUser, setFullUser }}>
          <Component {...pageProps} />
        </UserCC>
      )}
    </Fragment>
  );
}

export default MyApp;
