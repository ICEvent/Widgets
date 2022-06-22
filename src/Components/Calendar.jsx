import { useState, useEffect, useRef } from 'react';
import { Frame, Header, ButtonGroup, Button, ArrowLeft, ArrowRight, Body, Day } from './styles';
import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import { useICEvent } from "../components/Store";

const Calendar = () => {
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const mountedRef = useRef(true);
  const icevent = useICEvent();
  const [hasEvents, setHasEvents] = useState(false);
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [eventsWithoutTag, seteventsWithoutTag] = useState([]);

  const today = new Date();
  const [date, setDate] = useState(new Date());

  const weekTitles = DAYS_OF_THE_WEEK.map((d, index) => (<Day key={index} IsWeekTitle='true' >{d}</Day>));
  const getDates = (currDate) => {
    const currMonthArray = Array.from(Array(moment(currDate).daysInMonth()), (dt, index) => moment(currDate).startOf('month').add(index, 'd'));
    const startDay = moment(currDate).startOf('month').day();
    const preMonthArray = startDay ? Array.from(Array(startDay), (dt, index) => moment(currDate).subtract(1, 'M').endOf('month').subtract(index, 'd')).reverse() : [];
    const nextMonthArray = Array.from(Array(6 - moment(currDate).endOf('month').day()), (dt, index) => moment(currDate).add(1, 'M').startOf('month').add(index, 'd'));
    return [...preMonthArray, ...currMonthArray, ...nextMonthArray];
  }
  const [dates, setDates] = useState(getDates(date));
  const dateLst = dates.map((md, index) => {
    return (
      <Day
        key={index}
        isToday={md.isSame(moment(new Date()), 'day')}
        isSelected={md.isSame(moment(date), 'day')}
        isCurrMonth={md.month() == moment(date).month()}
        onClick={() => md.month() == moment(date).month() && setDate(md.toDate())}
      >
        {md.date()}
      </Day>
    )
  });

  const fetchEvents = (s, e) => {
    setLoading(true);
    icevent.getEvents(s.unix(), e.unix(), [], BigInt(1)).then(es => {
      if (mountedRef.current) {
        setLoading(false);
        let orderedEvents = es.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0))
        const pevents = parseEvents(orderedEvents);
        seteventsWithoutTag(pevents);
        setEvents(pevents);

      }
      setLoading(false);
    });
  }

  useEffect(() => {
    setDates(getDates(date));
    // fetchEvents(dates[0], dates[dates.length - 1]);
    // setHasEvents(eventsWithoutTag.length >= 0)
    return () => { mountedRef.current = false; }
  }, [date]);

  return (
    <Frame>
      <Header>
        <div>
          {moment(date).format("MMM YYYY")}
        </div>
        <ButtonGroup>
          <Button onClick={() => setDate(moment(date).subtract(1, 'month').toDate())}><ArrowLeft /></Button>
          <Button onClick={() => setDate(moment(date).add(1, 'month').toDate())}><ArrowRight /></Button>
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