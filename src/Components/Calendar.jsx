import { useState, useEffect } from 'react';
import { Frame, Header, ButtonGroup, Button, ArrowLeft, ArrowRight, Body, Day } from './styles';
import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import { icevent } from "../api/icevent/index";

const Calendar = () => {
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [myCalendarID, setMyCalendarID] = useState(105); //664 test calendar widget, 105 Defi Calendar
  const [events, setEvents] = useState([]);
  const [hasEvents, setHasEvents] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const weekTitles = DAYS_OF_THE_WEEK.map((d, index) => (<Day key={index} IsWeekTitle='true' >{d}</Day>));
  const getDates = (currDate) => {
    const currMonthArray = Array.from(Array(moment(currDate).daysInMonth()), (dt, index) => moment(currDate).startOf('month').add(index, 'd').format('YYYYMMDD'));
    const startDay = moment(currDate).startOf('month').day();
    const preMonthArray = startDay ? Array.from(Array(startDay), (dt, index) => moment(currDate).subtract(1, 'M').endOf('month').subtract(index, 'd').format('YYYYMMDD')).reverse() : [];
    const nextMonthArray = Array.from(Array(6 - moment(currDate).endOf('month').day()), (dt, index) => moment(currDate).add(1, 'M').startOf('month').add(index, 'd').format('YYYYMMDD'));
    return [...preMonthArray, ...currMonthArray, ...nextMonthArray];
  }
  const [dates, setDates] = useState(getDates(selectedDate));
  const dateLst = dates.map(dt => {
    return (
      <Day
        key={dt}
        isToday={moment(new Date()).format('YYYYMMDD') == dt}
        isSelected={moment(selectedDate).format('YYYYMMDD') == dt}
        isCurrMonth={moment(dt).month() == moment(selectedDate).month()}
        onClick={() => moment(dt).month() == moment(selectedDate).month() && setSelectedDate(moment(dt).toDate())}
      >
        {moment(dt).date()}
      </Day>
    )
  });

  const fetchEvents = (s, e) => {
    icevent.getCalendarEvents(BigInt(myCalendarID), s.unix(), e.unix(), BigInt(1)).then(es => {
      // let orderedEvents = es.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0))
      const pevents = parseEvents(es);
      setEvents(pevents);
    });
  }

  useEffect(() => {
    setDates(getDates(selectedDate));
    fetchEvents(moment(dates[0]), moment(dates[dates.length - 1]));
  }, [selectedDate]);

  return (
    <Frame>
      <Header>
        <div>
          {moment(selectedDate).format("MMM YYYY")}
        </div>
        <ButtonGroup>
          <Button onClick={() => setSelectedDate(moment(selectedDate).subtract(1, 'month').toDate())}><ArrowLeft /></Button>
          <Button onClick={() => setSelectedDate(moment(selectedDate).add(1, 'month').toDate())}><ArrowRight /></Button>
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