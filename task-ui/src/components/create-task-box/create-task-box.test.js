import React from "react";
import { shallow } from "enzyme";
import CreateTaskBox from "./create-task-box";

describe("CreateTaskBox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CreateTaskBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
