import React from "react"
import { LoginPage } from "../../components/LoginPage"
import { shallow } from "enzyme"

let wrapper, startLoginDispatcher

beforeEach(()=>{
  startLoginDispatcher = jest.fn()
  wrapper = shallow(<LoginPage startLoginDispatcher={startLoginDispatcher}/>)
})

it("should render LoginPage Component", () => {
  expect(wrapper).toMatchSnapshot()
})

it("should call startLogin on button click", () => {
  wrapper.find("button").simulate("click")
  expect(startLoginDispatcher).toHaveBeenCalled()
})