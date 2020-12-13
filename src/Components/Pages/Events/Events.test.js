import React from "react";
import Events from "./Events";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Events />);
});
