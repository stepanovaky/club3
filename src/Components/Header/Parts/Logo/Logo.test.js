import React from "react";
import Logo from "./Logo";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Logo />);
});
