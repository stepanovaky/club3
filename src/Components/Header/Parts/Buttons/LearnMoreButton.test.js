import React from "react";
import LearnMoreButton from "./LearnMoreButton";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<LearnMoreButton />);
});
