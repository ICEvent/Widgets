import { useState, useEffect } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CircleIcon from '@mui/icons-material/Circle';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Item } from './styles';
import EventView from './EventView';
import MyCalendarID from './MyCalendarID';

import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import { icevent } from "../api/icevent/index";

const Calendar = (props) => {
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  // const [myCalendar, setMyCalendarID] = useState(105); //664 test calendar widget, 105 Defi Calendar
  const [myCalendarID, setMyCalendarID] = useState(props.calendarID);
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYYMMDD'));
  const [currMonth, setCurrMonth] = useState(moment(selectedDate).format("YYYYMM"));
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);
  const [dates, setDates] = useState([]);
  const [eventToShow, setEventToShow] = useState(null);

  const fetchEvents = (startDate, endDate) => {
    myCalendarID && icevent.getCalendarEvents(BigInt(myCalendarID), startDate.unix(), endDate.unix(), BigInt(1)).then(es => {
      // let orderedEvents = es.sort((a, b) => a.start < b.start ? -1 : (a.start > b.start ? 1 : 0))
      // let orderedEvents = es.sort((a, b) => a.start - b.start);
      const pevents = parseEvents(es);
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

  const handleSelectDate = (dateEvent) => {
    setSelectedDateEvents(dateEvent.events);
    setSelectedDate(dateEvent.date);
    const duration = moment(dateEvent.date).month() - moment(currMonth).month();
    duration && handleChangeMonth(duration);
  }

  const handleChangeMonth = (Num) => {
    const newMonth = moment(currMonth).add(Num, 'month').format('YYYYMM');
    setCurrMonth(newMonth);
  }

  const resetToShowEvent = () => {
    setEventToShow(null);
  };

  const weekTitles = DAYS_OF_THE_WEEK.map((d, index) => (
    <Grid key={index} xs={1}>
      <Stack alignItems="center">
        <Item isTitle={true} >
          <Typography
            variant='body1'
            sx={{ fontWeight: 'fontWeightBold' }}
          >{d}</Typography>
        </Item>
      </Stack>
    </Grid>
  ));

  const dateLst = dateEvents.map(dtevt => {
    const eventFlag = dtevt.events.length > 0
      ? <CircleIcon color='secondary' sx={{ fontSize: 6, lineHeight: '1px', }} />
      : <Typography lineHeight='1px'>&nbsp;&nbsp;</Typography>;
    return (
      <Grid
        key={dtevt.date}
        xs={1}
        onClick={() => handleSelectDate(dtevt)}
      >
        <Stack alignItems="center">
          <Item
            isToday={moment(new Date()).format('YYYYMMDD') == dtevt.date}
            isSelected={selectedDate == dtevt.date}
          >
            <Typography
              variant='body1'
              sx={{ fontWeight: (moment(dtevt.date).format('YYYYMM') == currMonth) ? 'fontWeightBold' : 'fontWeightRegular', }}
            >
              {moment(dtevt.date).date()}
            </Typography>
          </Item>
          {eventFlag}
        </Stack>
      </Grid >
    )
  });

  const eventLst = selectedDateEvents.map(evt => {
    return (
      <ListItemButton
        key={evt.id}
        disableGutters
        divider
        alignItems='flex-start'
        onClick={() => setEventToShow(evt)}
      >
        <ListItemText primary={
          <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={1}>
            <Typography variant='body2' >{moment(evt.start).format('h:mm')}</Typography>
            <Typography variant='body2' noWrap>{evt.title}</Typography>
          </Stack>
        } />
      </ListItemButton>
    )
  });

  useEffect(() => {
    const [startDate, endDate] = getDates();
    fetchEvents(moment(startDate), moment(endDate));
  }, [myCalendarID, currMonth]);

  return (
    <div>
      {!myCalendarID && <MyCalendarID open={!myCalendarID} setCalendarID={setMyCalendarID} />}
      {!!eventToShow && <EventView event={eventToShow} clearEvent={resetToShowEvent} />}
      {!!myCalendarID && !eventToShow &&
        <Stack >
          <Stack direction='row'>
            <Typography variant='h6' sx={{ flexGrow: 1 }} paddingLeft={1} >{moment(currMonth).format("MMM YYYY")}</Typography>
            <IconButton aria-label="arrow-back" color="primary" size="small" onClick={() => handleChangeMonth(-1)}>
              <ArrowBackIosNewIcon fontSize="small" />
            </IconButton >
            <IconButton aria-label="arrow-forward" color="primary" size="small" onClick={() => handleChangeMonth(1)}>
              <ArrowForwardIosIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Stack direction='row'>
            <Grid container columns={7} >
              {weekTitles}
              {dateLst}
            </Grid>
          </Stack>
          <List>
            {(moment(selectedDate).isSame(currMonth, 'month')) && eventLst}
          </List>
        </Stack>}
    </div>
  );
}

export default Calendar;