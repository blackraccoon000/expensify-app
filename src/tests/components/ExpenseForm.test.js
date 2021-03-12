import React from "react"
import { shallow } from "enzyme"
import moment from "moment"
import ExpenseForm from "../../components/ExpenseForm"
import expenses from "../fixtures/expenses"

describe("ExpenseFormのTest(it)",()=>{
  it('(1) should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('(2) should render ExpenseForm correctly with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it("(3) should render error for invalid form submission", () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find("form").simulate("submit",{
      preventDefault: () => {}
    })
    expect(wrapper.state("error").length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
    // if(wrapper.find("p").length > 0) {
    //   expect(wrapper.find("p").text()).toBe("Please provide description and amount.")
    // }
  })

  it("(4) should set description on input change", () => {
    const value = "New Description"
    const wrapper = shallow(<ExpenseForm/>)

    expect(wrapper).toMatchSnapshot()
    // console.log(wrapper.find("input").at(0).props())
    // console.log(wrapper.state("description"))
    wrapper.find("input").at(0).simulate("change",{
      target: {
        value
      }
    })
    // console.log(wrapper.find("input").at(0).props())
    // console.log(wrapper.state("description"))
    expect(wrapper.state("description")).toBe(value)
    expect(wrapper).toMatchSnapshot()
  })

  it("(5) should set note on textarea change", () => {
    const value = "New Note value"
    const wrapper = shallow(<ExpenseForm/>)

    // console.log(wrapper.find("textarea").props().value)
    expect(wrapper).toMatchSnapshot()
    wrapper.find("textarea").simulate("change",{
      target:{
        value
      }
    })
    // console.log(wrapper.find("textarea").props().value)
    expect(wrapper.state("note")).toBe(value)
    expect(wrapper).toMatchSnapshot()
  })

  it("(6) should set amount if valid input", ()=>{
    const value = "23.50"
    const wrapper = shallow(<ExpenseForm/>)

    // console.log(wrapper.find("input").at(1).props())
    // console.log(wrapper.state("amount"))

    expect(wrapper).toMatchSnapshot()

    wrapper.find("input").at(1).simulate("change",{
      target:{ value }
    })
    expect(wrapper.state("amount")).toBe(value)

    // console.log(wrapper.find("input").at(1).props().value)
    expect(wrapper).toMatchSnapshot()
  })
  it("(7) should set amount if invalid input", ()=>{
    const value = "12.255"
    const wrapper = shallow(<ExpenseForm/>)

    // console.log(wrapper.find("input").at(1).props())
    wrapper.find("input").at(1).simulate("change",{
      target:{ value }
    })
    // console.log(wrapper.find("input").at(1).props())
    expect(wrapper.state("amount")).toBe("") // 何も入っていないことの確認
  })

  it("(8) should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn()

    const wrapper = shallow(<ExpenseForm
      expense = { expenses[0] }
      onSubmit = { onSubmitSpy }
    />)

    wrapper.find("form").simulate("submit",{
      preventDefault:()=>{}
    })

    // console.log(wrapper.state("amount"),wrapper.state("description"))
    // console.log(wrapper.state("error"))
    expect(wrapper.state("error")).toBe(undefined)
    const {amount,createdAt,description,note} = {...expenses[0]}
    expect(onSubmitSpy).toHaveBeenCalled()
    expect(onSubmitSpy).toHaveBeenLastCalledWith({amount,createdAt,description,note})
  })

  it("(9) should set new date on date change", () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find("SingleDatePicker").prop("onDateChange")(now)
    expect(wrapper.state("createdAt")).toEqual(now)
  })

  it("(10) should set calender focus on change", () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    // console.log(wrapper.state("calenderFocused"))
    wrapper.find("SingleDatePicker").prop("onFocusChange")({ focused })
    // console.log(wrapper.state("calenderFocused"))
    expect(wrapper.state("calenderFocused")).toBe(focused)
  })
})