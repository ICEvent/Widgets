import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import EventView from './EventView';

const Calendar = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventView" element={<EventView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Calendar;