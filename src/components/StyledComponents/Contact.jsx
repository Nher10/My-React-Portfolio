import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Contact = styled(NavLink)`
    color:${props => props.click ? props.theme.body : props.theme.text};
    position: absolute;
    text-transform: uppercase;
    font-size: 1rem;
    top: 2rem;
    right: calc(1rem + 2vw);
    text-decoration: none;
    z-index: 1;
    cursor-pointer;
`
export default Contact;