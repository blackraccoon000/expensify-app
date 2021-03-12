import React from "react"
import { shallow } from "enzyme"
import moment from "moment"
import { ExpenseListFilters } from "../../components/ExpenseListFilters"
import expenses from "../fixtures/expenses"
import {filters,altFilters} from "../fixtures/filters"

let setTextFilter, sortByDate,sortByAmount,setStartDate,setEndDate,wrapper
const startDate = moment(0).add(10,"days")
const endDate = moment(0).add(100,"days")

beforeEach(()=>{
  setTextFilter=jest.fn(),
  sortByDate=jest.fn(),
  sortByAmount=jest.fn(),
  setStartDate=jest.fn(),
  setEndDate=jest.fn()
  wrapper = shallow(<ExpenseListFilters
    filters={{filters:filters}}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    startDate={setStartDate}
    endDate={setEndDate}
  />)
})

it("should render ExpenseListFilters correctly",()=>{
  expect(wrapper).toMatchSnapshot()
})

it("should render ExpenseListFilters with alt filters correctly",()=>{
  wrapper.setProps({filters:altFilters})
  expect(wrapper).toMatchSnapshot()
})

it("should handle text change",() => {
  wrapper.find("input").simulate("change",{
    target:{
      value:"ChangeValue"
    }
  })
  expect(setTextFilter).toHaveBeenCalled()
  expect(setTextFilter).toHaveBeenLastCalledWith("ChangeValue")
})

it("should handle sortByDate change",() => {
  wrapper.setProps({
    filters: altFilters
  })
  wrapper.find("select").simulate("change",{
    target:{
      value:"date"
    }
  })
  expect(sortByDate).toHaveBeenCalled()
})

it("should handle sortByAmount change",() => {
  wrapper.find("select").simulate("change",{
    target:{
      value:"amount"
    }
  })
  expect(sortByAmount).toHaveBeenCalled()
})

it("should handle date change",() => {
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate,
    endDate
  })
  expect(setStartDate).toHaveBeenLastCalledWith(startDate)
  expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

it("should handle date focus change",() => {
  const calendarFocused = "endDate"
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused)
  expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})