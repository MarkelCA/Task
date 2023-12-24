import React from "react";
import { shallow } from "enzyme";
import Aside from "./aside";

describe("Aside", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Aside />);
    expect(wrapper).toMatchSnapshot();
  });
});
