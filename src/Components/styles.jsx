import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export const Item = (props) => (
  <IconButton
    disabled={props.isTitle}
    sx={{
      height: '2rem',
      width: '2rem',
      // alignItems: 'center', 
      backgroundColor: props.isSelected && 'primary.main',
      border: props.isToday && '1px solid royalblue',
      borderRadius: '50%',
    }}
  >
    {props.children}
  </IconButton>
);

export const EventDetail = (props) => (
  <TextField
    label={props.label}
    id={props.id}
    value={props.defaultValue}
    size='small'
    multiline
    inputProps={{ readOnly: true }}
  >
    {props.children}
  </TextField >
);