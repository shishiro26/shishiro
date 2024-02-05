import React from "react";
import Image from "next/image";

const Social = () => {
  return (
    <div>
      <Image
        src={"/svgs/github.svg"}
        alt="github"
        width={24}
        height={24}
        className="m-1"
      />
    </div>
  );
};

export default Social;
