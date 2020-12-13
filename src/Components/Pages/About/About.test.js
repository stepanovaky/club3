import React from "react";
import About from "./About";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<About />);
});
