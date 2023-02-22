import styled from "styled-components";
import { motion } from "framer-motion";

const Icons = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    bottom: 0;
    left: 2rem;

    z-index: 3;

&>*:not(:last-child) {
    margin: 0.5rem 0;
}
`
export default Icons;