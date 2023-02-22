import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/StyledComponents/GlobalStyle'
import { darkTheme } from './components/Themes'
import AnimatedRoutes from './components/AnimatedRoutes'
import PreLoader from './components/PreLoading/PreLoader'

function App() {

  return (
    <>
    <PreLoader />
    <GlobalStyle />
    <ThemeProvider theme={darkTheme}>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ThemeProvider>
    </>
  )
}

export default App
