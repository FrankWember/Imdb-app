import Link from "next/link";
import React from "react";

const menuItem = (title, address, Icon) => {
  return (
    <div>
      <Link>
        <p className="">{title}</p>
      </Link>
    </div>
  );
};

export default menuItem;
