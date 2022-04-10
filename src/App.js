// import './App.css';
import { Switch, Route, useLocation} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from './components/Theme';
import GlobalStyles from './globalStyles/GlobalStyles';
import { AnimatePresence } from 'framer-motion';
import Sound from './subComponents/Sound';

//content
//import MainContent from './content/MainContent';

//components
import MainComponent from './components/MainComponent';
import ServicePage from './components/ServicePage';
import SkillsPage from './components/SkillsPage';
import WorkPage from './components/WorkPage';
import AboutPage from './components/AboutPage';


function App() {
  const location = useLocation()

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={DarkTheme}>
        <Sound />
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path="/" component={MainComponent} />
            <Route exact path="/service" component={ServicePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/skill" component={SkillsPage} />
            <Route exact path="/work" component={WorkPage} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </>
  )
}

export default App;
