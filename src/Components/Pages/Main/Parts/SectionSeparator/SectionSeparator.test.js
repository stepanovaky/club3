import React from "react";
import SectionSeparator from "./SectionSeparator";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<SectionSeparator />);
});
