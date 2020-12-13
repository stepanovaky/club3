import React from "react";
import OurDogs from "./OurDogs";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<OurDogs />);
});
