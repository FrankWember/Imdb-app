import React from "react";
import { IoHomeOutline } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/ai";

const Header = () => {
  return;
  <>
    <div className="">
      <MenuItem title="home" address="/" Icon={IoHomeOutline} />
      <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      <div>Header</div>
    </div>
  </>;
};

export default Header;
