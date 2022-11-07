import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

const MyCalendarID = (props) => {
    const [calendarID, setCalendarID] = useState('');

    const handleClose = () => {
        setCalendarID('');
    };

    const handleConfirm = () => {
        calendarID && props.setCalendarID(calendarID);
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
                        autoFocus
                        type="number"
                        margin="dense"
                        id="calendarID"
                        label="Calendar ID"
                        fullWidth
                        variant="standard"
                        defaultValue={calendarID}
                        helperText="Put your Calendar"
                        onChange={handleChange}
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