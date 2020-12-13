import React from "react";
import Dropdown from "./Dropdown";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Dropdown />);
});
