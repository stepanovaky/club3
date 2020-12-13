import React from "react";
import ClubEvents from "./ClubEvents";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<ClubEvents />);
});
