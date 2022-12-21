import { Fragment, useState } from "react";
import { Button } from "react-daisyui";

export const LoadBtn = ({
  className,
  onClick,
  children,
  loadColor = "bg-primary",
  ...props
}) => {
  const [load, setLoad] = useState(false);

  return (
    <Fragment>
      {load ? (
        <div className="flex justify-center items-center gap-2 my-3 mx-3">
          <div
            class={"dot-elastic-before h-3 w-3 rounded-3xl " + loadColor}
          ></div>
          <div class={"dot-elastic h-3 w-3 rounded-3xl " + loadColor}></div>
          <div
            class={"dot-elastic-after h-3 w-3 rounded-3xl " + loadColor}
          ></div>
        </div>
      ) : (
        <Button
          {...props}
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
