import IconButton from '@mui/material/IconButton';


// export const Frame = styled.div`
//   width: 15rem;
// `;

// export const Header = styled.h1`
//   font: 1rem sans-serif;
//   padding: 0 1.25rem 0 1.25rem;
//   display: flex;
//   justify-content: space-between;
// `;

export const Item = (props) => (
  <IconButton
    disabled={props.isTitle}
    sx={{
      height: '2rem',
      width: '2rem',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: props.isSelected && 'primary.main',
      border: !props.isTitle && props.isToday && '1px solid royalblue',
      borderRadius: '50%',
    }}
  >
    {props.children}
  </IconButton>
);

// export const Day = styled.div`
//   width: 14%;
//   line-height: 2rem;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-style: ${props => props.isCurrMonth || props.IsWeekTitle || "italic"};
//   cursor: ${props => (props.IsWeekTitle || !props.isCurrMonth) ? "default" : "pointer"};
  
//   ${(props) =>
//     props.hasEvents &&
//     css`
//       text-emphasis: filled circle crimson;
//       text-emphasis-position: under right;
//     `}

//   ${(props) =>
//     props.isToday &&
//     css`
//       border: 0.0625rem solid royalblue;
//       border-radius: 50%;
//     `}

//   ${(props) =>
//     props.isSelected &&
//     css`
//       background-color: royalblue;
//       border-radius: 50%;
//     `}
// `;
