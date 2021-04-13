import { Component } from "react";
import './booking.css'
import moment from "moment";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";

import Button from '../button/button'

class Booking extends Component {
    BLOCKED_DATES = [
      moment().add(10, "days"),
      moment().add(11, "days"),
      moment().add(12, "days")
    ];
  
    constructor() {
      super();
      this.state = {
        // focusedInput: null,
        startDate: moment(),
        endDate: moment().add(1, "days"),
        fullscreen: false,
        direction: "left",
        dateFormat: "DD-MM-YYYY",
        small: false,
        block: false,
        orientation: "horizontal",
        numMonths: 1,
        minimumNights: 1
      };

      this.handleDatesChange = this.handleDatesChange.bind(this);
      this.handleFocusChange = this.handleFocusChange.bind(this);
    //   this.handleChangeFullscreen = this.handleChangeFullscreen.bind(this);
    //   this.handleChangeDirection = this.handleChangeDirection.bind(this);
    //   this.handleChangeDateFormat = this.handleChangeDateFormat.bind(this);
    //   this.handleIsDayBlocked = this.handleIsDayBlocked.bind(this);
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
  
    // handleChangeFullscreen() {
    //   this.setState({ fullscreen: !this.state.fullscreen });
    // }
  
    // handleChangeDirection(e) {
    //   this.setState({ direction: e.target.value });
    // }
  
    // handleChangeDateFormat(e) {
    //   this.setState({ dateFormat: e.target.value });
    // }
  
    // handleIsDayBlocked(day) {
    //   return this.BLOCKED_DATES.filter(d => d.isSame(day, "day")).length > 0;
    // }
  
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
            displayFormat={this.state.dateFormat}
            hideKeyboardShortcutsPanel={true}
            numberOfMonths={1}
            minimumNights={1}
          />
          <Button>RESERVAR</Button>
          {/*<br />
          <br />
          <h4>Options</h4>
          <div>
            <label>
              <input
                type="checkbox"
                value={true}
                checked={this.state.fullscreen}
                onChange={this.handleChangeFullscreen}
              />{" "}
              Fullscreen (when picker focused)
            </label>
          </div>
          <br />
          <div>
            Anchor Direction:{" "}
            <label>
              <input
                type="radio"
                name="direction"
                value="left"
                checked={this.state.direction === "left"}
                onChange={this.handleChangeDirection}
              />{" "}
              Left
            </label>{" "}
            <label>
              <input
                type="radio"
                name="direction"
                value="right"
                checked={this.state.direction === "right"}
                onChange={this.handleChangeDirection}
              />{" "}
              Right
            </label>
          </div>
          <br />
          <div>
            Calendar Orientation:{" "}
            <label>
              <input
                type="radio"
                name="orentation"
                checked={this.state.orientation === "horizontal"}
                onChange={() => {
                  this.setState({ orientation: "horizontal" });
                }}
              />{" "}
              Horizontal
            </label>{" "}
            <label>
              <input
                type="radio"
                name="orentation"
                checked={this.state.direction === "vertical"}
                onChange={() => {
                  this.setState({ orientation: "vertical" });
                }}
              />{" "}
              Vertical
            </label>
          </div>
          <br />
          <div>
            <label>
              Date Format:{" "}
              <input
                type="text"
                value={this.state.dateFormat}
                onChange={this.handleChangeDateFormat}
              />
            </label>
          </div>
          <br />
          <div>
            <label>
              <input
                type="checkbox"
                value={true}
                checked={this.state.small}
                onChange={() => {
                  this.setState({ small: !this.state.small });
                }}
              />{" "}
              Small
            </label>
          </div>
          <br />
          <div>
            <label>
              <input
                type="checkbox"
                value={true}
                checked={this.state.block}
                onChange={() => {
                  this.setState({ block: !this.state.block });
                }}
              />{" "}
              Block
            </label>
          </div>
          <br />
          <div>
            <label>
              <input
                type="number"
                value={this.state.numMonths}
                onChange={e => {
                  this.setState({ numMonths: e.target.value });
                }}
              />{" "}
              Number of Months
            </label>
          </div>
          <br />
          <div>
            <label>
              <input
                type="number"
                value={this.state.minimumNights}
                onChange={e => {
                  this.setState({ minimumNights: e.target.value });
                }}
              />{" "}
              Min Nights
            </label>
            </div>*/}
        </div>
      );
    }
}

export default Booking