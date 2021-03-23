import React from "react"
import {shallow} from "enzyme"
import { ConfModal } from "../../components/ConfModal"
import expenses from "../fixtures/expenses"

let id, historyPush, wrapper,toggleModal,startRemoveExpense

beforeEach(() => {
  id = expenses[1].id
  historyPush = jest.fn()
  toggleModal = jest.fn()
  startRemoveExpense = jest.fn()
  wrapper = shallow(<ConfModal
    id={id}
    historyPush={historyPush}
    toggleModal={toggleModal}
    startRemoveExpense={startRemoveExpense}
  />)
})

it("should render ConfModal correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

it("should handle onClick cancelBtn", () => {
    wrapper.find(".cancelBtn").prop("onClick")()
    expect(toggleModal).toHaveBeenCalled()
    expect(toggleModal).toHaveBeenLastCalledWith(undefined)
})

it("should handle onClick removeBtn", () => {
    wrapper.find(".removeBtn").prop("onClick")()
    expect(startRemoveExpense).toHaveBeenCalled()
    expect(historyPush).toHaveBeenLastCalledWith("/")
    expect(startRemoveExpense).toHaveBeenCalledWith({id})
})