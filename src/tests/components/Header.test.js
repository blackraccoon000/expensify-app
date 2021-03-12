import React from "react"
import { shallow } from "enzyme"
// import ReactShallowRenderer from "react-test-renderer/shallow"
import Header from "../../components/Header.js"

test("should render Header component correctly",() => {
  const wrapper = shallow(<Header/>)
  // expect(wrapper.find("h1").length).toBe(1)
  // expect(wrapper.find("h1").text()).toBe("Expensify")
  // console.log(wrapper.find("h1").text())
  expect(wrapper).toMatchSnapshot()
  // expect(toJSON(wrapper)).toMatchSnapshot()

  // const renderer = new ReactShallowRenderer
  // renderer.render(<Header />)
  // const result = renderer.getRenderOutput()
  // expect(result).toMatchSnapshot()
})