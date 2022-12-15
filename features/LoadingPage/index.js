import React from "react";

function index() {
  return (
    <div className="w-full h-full flex justify-center items-center gap-2">
      <div class="dot-elastic-before bg-primary h-6 w-6 rounded-3xl"></div>
      <div class="dot-elastic bg-primary h-6 w-6 rounded-3xl"></div>
      <div class="dot-elastic-after bg-primary h-6 w-6 rounded-3xl"></div>
    </div>
  );
}

export default index;
