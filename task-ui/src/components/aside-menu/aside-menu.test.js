import React from "react";
import { shallow } from "enzyme";
import AsideMenu from "./aside-menu";

describe("AsideMenu", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AsideMenu />);
    expect(wrapper).toMatchSnapshot();
  });
});
