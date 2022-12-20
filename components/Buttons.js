import { Fragment, useState } from "react";
import { Button } from "react-daisyui";

export const LoadBtn = ({ className, onClick, children }) => {
  const [load, setLoad] = useState(false);

  return (
    <Fragment>
      {load ? (
        <div className="flex justify-center items-center gap-2 my-6 mx-6">
          <div class="dot-elastic-before bg-primary h-3 w-3 rounded-3xl"></div>
          <div class="dot-elastic bg-primary h-3 w-3 rounded-3xl"></div>
          <div class="dot-elastic-after bg-primary h-3 w-3 rounded-3xl"></div>
        </div>
      ) : (
        <Button
          className={className}
          onClick={async () => {
            setLoad(true);
            await onClick();
            setLoad(false);
          }}
        >
          {children}
        </Button>
      )}
    </Fragment>
  );
};
