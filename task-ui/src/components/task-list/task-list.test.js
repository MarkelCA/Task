import React from "react";
import { shallow } from "enzyme";
import TaskList from "./task-list";

describe("TaskList", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaskList />);
    expect(wrapper).toMatchSnapshot();
  });
});
