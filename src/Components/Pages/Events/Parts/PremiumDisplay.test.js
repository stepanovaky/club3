import React from "react";
import PremiumDisplay from "./PremiumDisplay";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<PremiumDisplay />);
});
