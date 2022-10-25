/** @format */

import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { DropdownProvider } from "components/dropdown/dropdown-context";

const Header = () => {
  return (
    <>
      <DropdownProvider>
        <HeaderTop className="ht"></HeaderTop>
        <HeaderBottom className="hb"></HeaderBottom>
      </DropdownProvider>
    </>
  );
};

export default Header;
