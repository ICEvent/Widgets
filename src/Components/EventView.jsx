import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import moment from 'moment';

import { EventDetail } from './styles';

const EventView = (props) => {
    const evt = props.event;
    const date = moment(evt.start).format('YYYY/MM/DD') + ' ~ ' + moment(evt.end).format('YYYY/MM/DD');

    return (
        <Stack spacing={2}>
            <Stack direction='row'>
                <IconButton aria-label="arrow-back" color="primary" size="small" onClick={props.clearEvent}>
                    <ArrowBackIosNewIcon fontSize="small" />
                </IconButton >
                <Typography variant='h6' sx={{ flexGrow: 1 }} paddingLeft={1} >Event</Typography>
            </Stack>
            <Box sx={{ p: 1, }}>
                <EventDetail label="Title" id="title" defaultValue={evt.title} />
                <EventDetail label="Date(Start ~ End)" id="date" defaultValue={date} />
                <EventDetail label="Location" id="location" defaultValue={evt.location.url} />
                <EventDetail label="Description" id="description" defaultValue={evt.description} />
            </Box>

        </Stack >
    )
}

export default EventView;