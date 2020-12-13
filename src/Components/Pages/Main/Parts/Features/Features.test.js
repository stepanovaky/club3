import React from "react";
import Features from "./Features";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Features />);
});
