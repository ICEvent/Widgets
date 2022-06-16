import styled, { css } from 'styled-components';

export const Frame = styled.div`
  width: 15rem;
`;

export const Header = styled.h1`
  font: 1rem sans-serif;
  padding: 0 1.25rem 0 1.25rem;
  display: flex;
  justify-content: space-between;
`;

export const ButtonGroup = styled.div`
  display: inline-flex;
`;

export const Button = styled.div`
cursor: pointer;
`;

export const ArrowLeft = styled.i`
  border: solid dimgray;
  border-width: 0 0.125rem 0.125rem 0;
  display: inline-block;
  padding: 0.18rem; 
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

export const ArrowRight = styled.i`
  border: solid dimgray;
  border-width: 0 0.125rem 0.125rem 0;
  display: inline-block;
  padding: 0.18rem; 
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-family: sans-serif;
  font-size: small;
`;

export const Day = styled.div`
  width: 14%;
  line-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: ${props => props.isCurrMonth || props.IsWeekTitle || "italic"};
  cursor: ${props => (props.IsWeekTitle || !props.isCurrMonth) ? "default" : "pointer"};
  
  ${(props) =>
    props.isToday &&
    css`
      text-emphasis: filled circle crimson;
      text-emphasis-position: under right;
    `}

  ${(props) =>
    props.isToday &&
    css`
      border: 0.0625rem solid royalblue;
      border-radius: 50%;
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: royalblue;
      border-radius: 50%;
    `}
`;
