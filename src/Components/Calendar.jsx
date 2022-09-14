import { useState, useEffect } from 'react';

// import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Item } from './styles';

import moment from 'moment';
import parseEvents from "../components/utils/parseEvents";
import { icevent } from "../api/icevent/index";

const Calendar = () => {
  const MIN_WIDTH = 240;
  // const ITEM_WIDTH = FRAME_WIDTH / 11;
  const DAYS_OF_THE_WEEK = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const [myCalendarID, setMyCalendarID] = useState(105); //664 test calendar widget, 105 Defi Calendar
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(moment(new Date()).format('YYYYMMDD'));
  const [currMonth, setCurrMonth] = useState(moment(new Date()).format("YYYYMM"));
  const [selectedDateEvents, setSelectedDateEvents] = useState([]);

  const [dates, setDates] = useState([]);

  const fetchEvents = (startDate, endDate) => {
    icevent.getCalendarEvents(BigInt(myCalendarID), startDate.unix(), endDate.unix(), BigInt(1)).then(es => {
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
    // setDates(currMonthArray);
    // return [moment(currMonth).startOf('month').format('YYYYMMDD'), moment(currMonth).endOf('month').format('YYYYMMDD')];
  }

  const dateEvents = dates.map(date => {
    return {
      'date': date,
      'events': events.filter(es => moment(es.start).format('YYYYMMDD') == date)
    };
  });

  const handleSelectDate = (dateEvent) => {
    setSelectedDateEvents(dateEvent.events);
    const selectDate = dateEvent.date;
    setSelectedDate(selectDate);
    handleChangeMonth(moment(selectDate).month() - moment(currMonth).month());
  }

  const handleChangeMonth = (Num) => {
    const newMonth = moment(currMonth).add(Num, 'month').format('YYYYMM');
    newMonth && setCurrMonth(newMonth);
  }

  const weekTitles = DAYS_OF_THE_WEEK.map((d, index) => (
    <Grid key={index} xs={1} sm={1} md={1}>
      <Item isTitle={true} >
        <Typography
          variant='body1'
          sx={{ fontWeight: 'fontWeightBold' }}
        >{d}</Typography>
      </Item>
    </Grid>
  ));

  const dateLst = dateEvents.map(dtevt => {
    return (
      <Grid key={dtevt.date} xs={1} onClick={() => handleSelectDate(dtevt)}>
        <Item
          isToday={moment(new Date()).format('YYYYMMDD') == dtevt.date}
          isSelected={selectedDate == dtevt.date}
        >
          <Stack alignItems="center">
            <Typography
              variant='body1'
              sx={{ fontWeight: (moment(dtevt.date).format('YYYYMM') == currMonth) ? 'fontWeightBold' : 'fontWeightRegular', }}
            >
              {moment(dtevt.date).date()}
            </Typography>
            {dtevt.events.length > 0 && <FiberManualRecordIcon color='secondary' sx={{ fontSize: 6 }} />}
          </Stack>
        </Item>
      </Grid >
    )
  });

  const eventLst = selectedDateEvents.map(evt => {
    return (
      <div key={evt.id}>
        <Divider />
        <ListItemButton disableGutters alignItems='flex-start'>
          <ListItemText primary={
            <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={1}>
              <Typography variant='body2' >{moment(evt.start).format('h:mm')}</Typography>
              <Typography variant='body2' noWrap>{evt.title}</Typography>
            </Stack>
          } />
        </ListItemButton>
      </div>
    )
  });

  useEffect(() => {
    const [startDate, endDate] = getDates();
    fetchEvents(moment(startDate), moment(endDate));
  }, [currMonth]);

  return (
    <Stack sx={{ width: MIN_WIDTH }}>
      <Stack direction='row'>
        <Typography variant='h6' sx={{ flexGrow: 1 }} paddingLeft={1} >{moment(currMonth).format("MMM YYYY")}</Typography>
        <IconButton aria-label="arrow-back" color="primary" size="small" onClick={() => { handleChangeMonth(-1) }}>
          <ArrowBackIosNewIcon fontSize="small" />
        </IconButton >
        <IconButton aria-label="arrow-forward" color="primary" size="small" onClick={() => { handleChangeMonth(1) }}>
          <ArrowForwardIosIcon fontSize="small" />
        </IconButton>
      </Stack>

      <Stack direction='row'>
        <Grid container columns={7} minWidth={MIN_WIDTH}>
          {weekTitles}
          {dateLst}
        </Grid>
      </Stack>
      <List>
        {eventLst}
      </List>
    </Stack >
  );
}

export default Calendar;