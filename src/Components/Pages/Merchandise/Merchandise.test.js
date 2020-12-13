import React from "react";
import Merchandise from "./Merchandise";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Merchandise />);
});
