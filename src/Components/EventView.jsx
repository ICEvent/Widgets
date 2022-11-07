// import { useLocation, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import moment from 'moment';

import { EventDetail } from './styles';

const EventView = (props) => {
    const evt = props.event;
    // const navigate = useNavigate();
    // const location = useLocation();
    // const evt = location.state.event;
    const date = moment(evt.start).format('YYYY/MM/DD') + ' ~ ' + moment(evt.end).format('YYYY/MM/DD');
    // const redirectToHome = () => {
    //     navigate(-1);
    // };

    return (
        <Stack spacing={2}>
            <Stack direction='row'>
                <IconButton aria-label="arrow-back" color="primary" size="small" onClick={props.clearEvent}>
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton >
                <Typography variant='h6' sx={{ flexGrow: 1 }} paddingLeft={1} >Event</Typography>
            </Stack>
            <Stack spacing={2}>
                <EventDetail label="Title" id="title" defaultValue={evt.title} />
                <EventDetail label="Date(Start ~ End)" id="date" defaultValue={date} />
                <EventDetail label="Location" id="location" defaultValue={evt.location.url} />
                <EventDetail label="Description" id="description" defaultValue={evt.description} />
            </Stack>
        </Stack >
    )
}

export default EventView;