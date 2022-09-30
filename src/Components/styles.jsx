import IconButton from '@mui/material/IconButton';

export const Item = (props) => (
  <IconButton
    disabled={props.isTitle}
    sx={{
      height: '2rem',
      width: '2rem',
      alignItems: 'flex-start',
      backgroundColor: props.isSelected && 'primary.main',
      border: props.isToday && '1px solid royalblue',
      borderRadius: '50%',
    }}
  >
    {props.children}
  </IconButton>
);
