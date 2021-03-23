import React from "react"
import { LoginPage } from "../../components/LoginPage"
import { shallow } from "enzyme"

let wrapper, startLoginDispatcher, twitterLoginDispatcher, facebookLoginDispatcher

beforeEach(()=>{
  startLoginDispatcher = jest.fn()
  twitterLoginDispatcher = jest.fn()
  facebookLoginDispatcher = jest.fn()

  wrapper = shallow(<LoginPage
    startLoginDispatcher = {startLoginDispatcher}
    twitterLoginDispatcher = {twitterLoginDispatcher}
    facebookLoginDispatcher = {facebookLoginDispatcher}
  />)
})

it("should render LoginPage Component", () => {
  expect(wrapper).toMatchSnapshot()
})

it("should call startLogin on button click", () => {
  wrapper.find(".google").simulate("click")
  expect(startLoginDispatcher).toHaveBeenCalled()
})

it("should call startLogin on button click", () => {
  wrapper.find(".twitter").simulate("click")
  expect(twitterLoginDispatcher).toHaveBeenCalled()
})

it("should call startLogin on button click", () => {
  wrapper.find(".facebook").simulate("click")
  expect(facebookLoginDispatcher).toHaveBeenCalled()
})