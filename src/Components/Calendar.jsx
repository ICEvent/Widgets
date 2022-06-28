import { useState, useEffect } from 'react';
import { Frame, Header, ButtonGroup, Button, ArrowLeft, ArrowRight, Body, Day } from './styles';
import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import { icevent } from "../api/icevent/index";

const Calendar = () => {
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [myCalendarID, setMyCalendarID] = useState(105); //664 test calendar widget, 105 Defi Calendar
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYYMMDD'));
  const [currMonth, setCurrMonth] = useState(moment(new Date()).format("YYYYMM"));

  const weekTitles = DAYS_OF_THE_WEEK.map((d, index) => (<Day key={index} IsWeekTitle='true' >{d}</Day>));
  const [dates, setDates] = useState([]);

  const fetchEvents = (s, e) => {
    icevent.getCalendarEvents(BigInt(myCalendarID), s.unix(), e.unix(), BigInt(1)).then(es => {
      let orderedEvents = es.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0))
      const pevents = parseEvents(orderedEvents);
      setEvents(pevents);
    });
  }
  
  const getDates = () => {
    const currMonthArray = Array.from(Array(moment(currMonth).daysInMonth()), (dt, index) => moment(currMonth).startOf('month').add(index, 'd').format('YYYYMMDD'));
    let startDay = moment(currMonth).startOf('month').day();
    const preMonthArray = startDay ? Array.from(Array(startDay), (dt, index) => moment(currMonth).subtract(1, 'M').endOf('month').subtract(index, 'd').format('YYYYMMDD')).reverse() : [];
    const nextMonthArray = Array.from(Array(6 - moment(currMonth).endOf('month').day()), (dt, index) => moment(currMonth).add(1, 'M').startOf('month').add(index, 'd').format('YYYYMMDD'));
    setDates([...preMonthArray, ...currMonthArray, ...nextMonthArray]);
    return [preMonthArray[0], nextMonthArray[nextMonthArray.length - 1]];
  }

  const dateEvents = dates.map(date => {
    return {
      'date': date,
      'events': events.filter(es => moment(es.start).format('YYYYMMDD') == date)
    };
  });

  const dateLst = dateEvents.map(dtev => {
    return (
      <Day
        key={dtev.date}
        isToday={moment(new Date()).format('YYYYMMDD') == dtev.date}
        isSelected={selectedDate == dtev.date}
        isCurrMonth={moment(dtev.date).month() == moment(currMonth)}
        hasEvents={dtev.events.length > 0}
        onClick={() => setSelectedDate(dtev.date)}
      >
        {moment(dtev.date).date()}
      </Day>
    )
  });

  const preciousMonth = () => {
    const preMonth = moment(currMonth).subtract(1, 'month').format('YYYYMM');
    setCurrMonth(preMonth);
  }

  const nextMonth = () => {
    const nextMonth = moment(currMonth).add(1, 'month').format('YYYYMM');
    setCurrMonth(nextMonth);
  }

  useEffect(() => {
    const [startDate, endDate] = getDates();
    fetchEvents(moment(startDate), moment(endDate));
  }, [currMonth]);

  return (
    <Frame>
      <Header>
        <div>
          {moment(currMonth).format("MMM YYYY")}
        </div>
        <ButtonGroup>
          <Button onClick={preciousMonth}><ArrowLeft /></Button>
          <Button onClick={nextMonth}><ArrowRight /></Button>
        </ButtonGroup>
      </Header>
      <Body>
        {weekTitles}
        {dateLst}
      </Body>
    </Frame>
  );
}

export default Calendar;