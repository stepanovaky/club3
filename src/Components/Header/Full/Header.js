import React from "react";
import Logo from "../Parts/Logo/Logo";
import Bar from "../Parts/Page Links/Bar";
import JoinUsButton from "../Parts/Buttons/JoinUsButton";
import Menu from "../Parts/Menu/Menu";

function Header() {
  return (
    <div className="header w100per">
      <div className="header-container">
        <nav>
          <Logo />
          <Bar />
          <JoinUsButton />
          <Menu />
        </nav>
      </div>
    </div>
  );
}

export default Header;
