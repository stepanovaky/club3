import React from "react";
import JoinDesc from "./JoinDesc";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<JoinDesc />);
});
