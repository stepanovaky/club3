import React from "react";
import EnlargeImage from "./App";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<EnlargeImage />);
});
