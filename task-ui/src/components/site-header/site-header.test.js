import React from "react";
import { shallow } from "enzyme";
import SiteHeader from "./site-header";

describe("SiteHeader", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SiteHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
