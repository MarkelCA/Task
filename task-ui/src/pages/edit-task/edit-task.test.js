import React from "react";
import { shallow } from "enzyme";
import EditTask from "./edit-task";

describe("EditTask", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<EditTask />);
    expect(wrapper).toMatchSnapshot();
  });
});
