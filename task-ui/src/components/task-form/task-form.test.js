import React from "react";
import { shallow } from "enzyme";
import TaskForm from "./task-form";

describe("TaskForm", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<TaskForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
