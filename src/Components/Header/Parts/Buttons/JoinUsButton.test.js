import React from "react";
import JoinUsButton from "./JoinUsButton";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<JoinUsButton />);
});
