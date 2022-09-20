/** @format */

import { ModalProvider } from "components/modal/modal-context";
import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = ({ props }) => {
  return (
    <>
      <ModalProvider {...props}>
        <HeaderTop className="ht"></HeaderTop>
        <HeaderBottom className="hb"></HeaderBottom>
      </ModalProvider>
    </>
  );
};

export default Header;
