import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventView from './EventView';

const Calendar = (props) => {
  const myCalendarID = props.calerdarID;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home calendarID={myCalendarID} />} />
        <Route path="/eventView" element={<EventView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Calendar;