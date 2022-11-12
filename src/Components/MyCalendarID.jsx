import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { icevent } from "../api/icevent/index";

const MyCalendarID = (props) => {
    const [helperText, setHelperText] = useState('');
    const [calendarID, setCalendarID] = useState('');

    const calendarExists = (cid) => {
        icevent.getCalendar(parseInt(cid)).then(rcals => {
            rcals["ok"] ? props.setCalendarID(calendarID) : setHelperText(rcals["err"]);
        })
    };

    const handleClose = () => {
        setCalendarID('');
    };

    const handleConfirm = () => {
        calendarID && calendarExists(calendarID);
    };

    const handleChange = (event) => {
        setCalendarID(event.target.value);
    };

    return (
        <div>
            <Dialog open={props.open} onClose={handleClose}>
                <DialogTitle>Request Calendar</DialogTitle>
                <DialogContent>
                    <TextField
                        error={!!helperText}
                        autoFocus
                        type="number"
                        margin="dense"
                        id="calendarID"
                        label="Calendar ID"
                        fullWidth
                        variant="standard"
                        defaultValue={calendarID}
                        helperText={helperText}
                        onChange={handleChange}
                        onE
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleConfirm}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default MyCalendarID;