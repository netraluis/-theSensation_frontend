import { Component } from "react";
import './booking.css'
import moment from "moment";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import Button from '../button/button'

class Booking extends Component {
    constructor() {
      super();
      this.state = {
        startDate: moment(),
        endDate: moment().add(1, "days"),
      };

      this.handleDatesChange = this.handleDatesChange.bind(this);
      this.handleFocusChange = this.handleFocusChange.bind(this);
    }
  
    componentDidMount(){
        let nodeStart = document.createElement("SPAN");  
        let textNodeStart = document.createTextNode('Entrada')
        nodeStart.appendChild(textNodeStart)
        document.getElementsByClassName('DateInput_1')[0].appendChild(nodeStart)
      

        let nodeEnd = document.createElement("SPAN");  
        let textNodeEnd = document.createTextNode('Salida')
        nodeEnd.appendChild(textNodeEnd)
        document.getElementsByClassName('DateInput_1')[1].appendChild(nodeEnd)

    }
    handleDatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate });
    }
  
    handleFocusChange(focusedInput) {
      this.setState({ focusedInput });
    }
  
    onClick = () =>{
      const startDate = this.state.startDate.format('YYYY-MM-DD')
      const endDate = this.state.endDate.format('YYYY-MM-DD')
      this.props.history.push(`/booking-room/${startDate}/${endDate}`)
      
    }
    render() {
      return (
        <div className="booking">
          <DateRangePicker
            startDate={this.state.startDate} // momentPropTypes.momentObj or null,
            startDateId="unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.state.endDate} // momentPropTypes.momentObj or null,
            endDateId="unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.handleDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.handleFocusChange} // PropTypes.func.isRequired,
            displayFormat={"DD-MM-YYYY"}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={1}
            minimumNights={1}
          />
          <Button onClick={this.onClick}>RESERVAR</Button>
        </div>
      );
    }
}

export default Booking