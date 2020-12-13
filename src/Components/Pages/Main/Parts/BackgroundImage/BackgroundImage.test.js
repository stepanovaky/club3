import React from "react";
import BackgroundImage from "./BackgroundImage";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<BackgroundImage />);
});
