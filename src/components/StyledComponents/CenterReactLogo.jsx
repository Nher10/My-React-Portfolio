import styled, { keyframes } from "styled-components";

const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`

const CenterReactLogo = styled.button`
  position: absolute;
  top: ${props => props.click ? '85%' : '50%'};
  left: ${props => props.click ? '92%' : '50%'};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

&:hover{
    filter: drop-shadow(0 0 2em #646cffaa);
}

&>:first-child{
    animation: ${rotate} infinite 10s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'}
    padding-top: 1rem;
}

@media only screen and (max-width: 50em) {
  top: ${(props) => (props.click ? "90%" : "50%")};
  left: ${(props) => (props.click ? "90%" : "50%")};
  width: ${(props) => (props.click ? "80px" : "150px")};
  height: ${(props) => (props.click ? "80px" : "150px")};
}
@media only screen and (max-width: 30em) {
  width: ${(props) => (props.click ? "40px" : "150px")};
  height: ${(props) => (props.click ? "40px" : "150px")};
}
`
export default CenterReactLogo
