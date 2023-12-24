import React from "react";
import { shallow } from "enzyme";
import Tasks from "./tasks";

describe("Tasks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Tasks />);
    expect(wrapper).toMatchSnapshot();
  });
});
