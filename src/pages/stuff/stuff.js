import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

const Stuff = () => {
  const [bookingArray, setBookingArray] = useState([]);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [recharge, triggerRecharge] = useState(false)

  useEffect(() => {
    const bookingFetch = [];
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/bookings/payment`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        data.data.bookings.map((element) => {
          const {
            paymentMethodId,
            room,
            startDate,
            endDate,
            _id,
            pay,
          } = element;
          console.log({ paymentMethodId, startDate, endDate, _id, pay });
          bookingFetch.push({
            title: `${room} con id ${_id}`,
            start: startDate,
            end: endDate,
            paymentMethodId,
            _id,
            pay,
            room,
          });
        });
        setBookingArray(bookingFetch);
      });
  }, [recharge]);

  const onView = () => {
    console.log("viewEv");
  };
  const onSelectEvent = ({ paymentMethodId }) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        paymentMethodId,
      }),
    };
    fetch(
      `${process.env.REACT_APP_API_URL}/api/v1/bookings/payment`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        triggerRecharge(!recharge)

      });
  };
  const onNavigate = (e, f, c) => {
    let d = new Date(calendarDate);
    if (c === "PREV") {
      d.setMonth(d.getMonth() - 1);
      setCalendarDate(d);
    }
    if (c === "NEXT") {
      d.setMonth(d.getMonth() + 1);
      setCalendarDate(d);
    }
    if (c === "TODAY") {
      setCalendarDate(new Date());
    }
  };

  return (
      <>
    <div style={{ height: 1000 }}>
      <Calendar
        localizer={localizer}
        events={bookingArray}
        step={60}
        view="month"
        views={["month"]}
        date={calendarDate}
        onNavigate={onNavigate}
        onView={onView}
        onSelectEvent={(event) => onSelectEvent(event)}
        eventPropGetter={(event, start, end, isSelected) => {
          let newStyle = {
            color: "black",
            borderRadius: "0px",
            border: "none",
          };

          if (event.room === "11") {
            newStyle.backgroundColor = "lightgreen";
          }

          if (event.room === "12") {
            newStyle.backgroundColor = "CadetBlue";
          }

          if (event.room === "13") {
            newStyle.backgroundColor = "DarkSalmon";
          }

          if (event.room === "14") {
            newStyle.backgroundColor = "DarkSlateGrey";
          }

          if (event.pay === false) {
            newStyle.border = "4px solid red";
          }

          return {
            className: "",
            style: newStyle,
          };
        }}
      />
    </div>
    <div>
        
    </div>
    </>
  );
};

export default Stuff;
