import styled, { keyframes } from "styled-components";

const animation = (percent) => keyframes`
  from { width: 0; }
  to {width: ${percent}%; }
`;

const StyledDiv = styled.div`
  width: ${(props) => props.percent}%;
  animation: ${(props) => animation(props.percent)}: 3s;
  -webkit-animation: ${(props) => animation(props.percent)} 3s;
`;

export default StyledDiv;
