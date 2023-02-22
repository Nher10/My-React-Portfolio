import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import styled, { ThemeProvider } from "styled-components";
import BigTitle from "./SubComponents/BigTitle";
import { darkTheme, mediaQueries } from "./Themes";
import LogoComponent from "./SubComponents/LogoComponent";
import SocialIcons from "./SubComponents/SocialIcons";
import PowerButton from "./SubComponents/PowerButton";
import ParticleComponentDark from './SubComponents/ParticleComponentDark'
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  background-color: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Ubuntu Mono', monospace;
`

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: space-evenly;
  height: 60vh;
  width: 60vw;
  margin: 10rem auto;
  z-index: 3;

  ${mediaQueries(60)`
  flex-direction: column;
  height:50h;
  width: 70vw;
`}
`;

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: space-between;
  flex: 1;
  padding: 2rem;
  background-color: ${props => props.theme.body};
  border: 1px solid ${props => props.theme.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 
  ${mediaQueries(60)`
 
  height:50%;
  
`}

`;

const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2rem;
  background-color: ${props => props.theme.body};
  border: 1px solid ${props => props.theme.text};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }


`;

const ContactForm = styled.form`
  height: 100%;
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: space-evenly;

  ${mediaQueries(60)`
  width: 60vw;
`}
`;

const Input = styled.input`
  padding: 1rem;
  background-color: ${props => props.theme.body};
  margin-bottom: 1rem;
  border: 2px solid #f2f2f2;
  border-radius: 3px;
  font-size: 1rem;
  height: 30px;

  &::placeholder {
    color: #999;
  }
  
  &:-ms-input-placeholder {
    color: ${props => props.theme.text};
  }
  
  &:focus {
    color: ${props => props.theme.text};
    outline: none;
    border-color: ${props => props.theme.text};
  }

  &:not(:placeholder-shown) {
    color: #fff;
  }
`;

const Message = styled.textarea`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${props => props.theme.body};
  border: 2px solid #f2f2f2;
  border-radius: 3px;
  font-size: 1rem;
  height: 100%;
  resize:none;

  &::placeholder {
    vertical-align: top;
  }

  &:-ms-input-placeholder {
    color: ${props => props.theme.text};
  }
  
  &:focus {
    color: ${props => props.theme.text};
    outline: none;
    border-color: ${props => props.theme.text};
  }

  &:not(:placeholder-shown) {
    color: #fff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background-color: ${props => props.theme.text};
  color: ${props => props.theme.body};
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ContactInfo = styled.div`
  height: 10vh;
  width: 30vw;
  display: flex;
  flex-direction: column;

  
`;

const Info = styled.span`
  padding-bottom: .5rem;
  color: ${props => props.theme.text};
`;

const ContactMessage = styled.p`
  color: ${props => props.theme.text};
  font-size: 1.5rem;
  
  ${mediaQueries(45)`
    font-size: 1rem;
`}
`

const ContactPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <Box
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <LogoComponent theme='dark'/>
            <SocialIcons theme='dark'/>
            <PowerButton />
            <ParticleComponentDark />
            <Container>
              <FormWrapper>
                <ContactForm>
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Message placeholder="Message" />
                  <Button type="submit">Submit</Button>
                </ContactForm>
              </FormWrapper>
              <ContactInfoWrapper>
                <ContactInfo>
                  <Info>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> La Paz, Tarlac
                  </Info>
                  <Info>
                    <FontAwesomeIcon icon={faPhone} /> 09915807187
                  </Info>
                  <Info>
                    <FontAwesomeIcon icon={faEnvelope} /> nherwinostia2@gmail.com
                  </Info>
                </ContactInfo>
                <ContactMessage>
                "Hello, thank you for taking the time to reach out to me. I'm always happy to connect with my audience and answer any questions you may have. Please feel free to fill out the form and I'll do my best to respond as quickly as possible. Thank you for your support and I look forward to hearing from you!"
                </ContactMessage>
              </ContactInfoWrapper>
            </Container>
            <BigTitle text='CONTACT ME' top='80%' right='30%%'/>
        </Box>
    </ThemeProvider>
  )
}

export default ContactPage
