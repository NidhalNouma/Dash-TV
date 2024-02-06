import React, { Fragment } from "react";
import { useRouter } from "next/router";

import Sidenav from "./Sidenav";
import TvWidjit from "./TvWidjet";
import RightNav from "./RightNav";

function Index({ children, page }) {
  const router = useRouter();
  return (
    <Fragment>
      <TvWidjit />
      <main className=" flex max-w-full mx-auto w-full">
        <Sidenav page={page} />
        <section className="flex grow mt-8">
          <div className="text-white mb-4 flex flex-col h-full grow">
            {children}
          </div>
          <div className="md:block hidden">
            <RightNav />
          </div>
        </section>
      </main>
    </Fragment>
  );
}

export default Index;
