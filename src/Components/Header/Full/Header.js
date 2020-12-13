import React, { useState } from "react";
import Logo from "../Parts/Logo/Logo";
import Bar from "../Parts/Page Links/Bar";
import JoinUsButton from "../Parts/Buttons/JoinUsButton";
import Menu from "../Parts/Menu/Menu";
import Dropdown from "../Parts/Dropdown/Dropdown";

function Header() {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div className="header w100per">
      <div className="header-container">
        <nav>
          <Logo />
          <Bar />
          <div className="right-bundle">
            <JoinUsButton />
            <Menu click={toggleVisibility} />
          </div>
        </nav>
        <Dropdown click={toggleVisibility} visible={visible} />
      </div>
    </div>
  );
}

export default Header;
