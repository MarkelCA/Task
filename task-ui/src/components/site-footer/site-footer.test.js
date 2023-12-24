import React from "react";
import { shallow } from "enzyme";
import SiteFooter from "./site-footer";

describe("SiteFooter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SiteFooter />);
    expect(wrapper).toMatchSnapshot();
  });
});
