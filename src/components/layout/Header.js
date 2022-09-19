/** @format */

import { ModalProvider } from "components/modal/modal-context";
import React from "react";
import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = ({ props }) => {
  return (
    <>
      <ModalProvider {...props}>
        <HeaderTop></HeaderTop>
        <HeaderBottom></HeaderBottom>
      </ModalProvider>
    </>
  );
};

export default Header;
