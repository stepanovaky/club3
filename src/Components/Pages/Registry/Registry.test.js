import React from "react";
import Registry from "./Registry";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<Registry />);
});
