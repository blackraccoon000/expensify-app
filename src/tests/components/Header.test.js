import React from "react"
import { shallow } from "enzyme"
import { Header } from "../../components/Header.js"

let startLogoutDispatcher, wrapper

beforeEach(()=>{
  startLogoutDispatcher = jest.fn()
  wrapper = shallow(<Header startLogoutDispatcher={startLogoutDispatcher}/>)
})

test("should render Header component correctly",() => {
  expect(wrapper).toMatchSnapshot()
})

it("should call startLogout on button click", () => {
  wrapper.find("button").simulate("click")
  expect(startLogoutDispatcher).toHaveBeenCalled()
})