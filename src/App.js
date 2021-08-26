import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen'
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen'
import Season1Section from './Season1Section';
import Season2Section from './Season2Section';
import Season3Section from './Season3Section';
import Season4Section from './Season4Section';
import SeasonSpecialSection from './SeasonSpecialSection'; 
import SeasonChristmasSpecial from './SeasonChristmasSpecial';


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route  path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen}/>
        <Route path="/login" exact={true} component={LoginScreen}/>
        <Route path="/profile" exact={true} component={ProfileScreen}/>
        <Route path="/season1" exact={true} component={Season1Section}/>
        <Route path="/season2" exact={true} component={Season2Section}/>
        <Route path="/season3" exact={true} component={Season3Section}/>
        <Route path="/season4" exact={true} component={Season4Section}/>
        <Route path="/seasonspecial" exact={true} component={SeasonSpecialSection}/>
        <Route path="/seasonxmas" exact={true} component={SeasonChristmasSpecial}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;