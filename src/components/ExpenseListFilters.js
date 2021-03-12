import React from "react"
import { connect } from "react-redux"
import { DateRangePicker } from "react-dates"
import { setTextFilter,sortByAmount,sortByDate, setStartDate,setEndDate } from "../actions/filters"

export class ExpenseListFilters extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      calendarFocused:null
    }
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.startDate(startDate)
    this.props.endDate(endDate)
  }
  onFocusChange = ( calendarFocused ) => {
    this.setState({ calendarFocused })
  }
  onSetTextFilter = (e) => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = (e) => {
    if(e.target.value==="date") {
      this.props.sortByDate()
    } else if (e.target.value==="amount") {
      this.props.sortByAmount()
    }
  }
  render() {
    const {filters} = this.props
    return (
      <div>
      <input type="text" value={filters.text}
        onChange = { this.onSetTextFilter }
      />
      <select
        value={filters.sortBy}
        onChange={this.onSortChange}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <DateRangePicker
        startDate={filters.startDate}
        endDate={filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        numberOfMonths={1} // 1月ごと表示
        isOutsideRange={()=>false} // 範囲外表示
        showClearDates={true} //　☓ボタン
      />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
  startDate: startDate => dispatch(setStartDate(startDate)),
  endDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
})

export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)