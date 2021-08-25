import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainScreen from './MainScreen';
import ProfileScreen from './ProfileScreen'
import RegistrationScreen from './RegistrationScreen';
import LoginScreen from './LoginScreen'


function App() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route path="/" exact={true} component={MainScreen} />
        <Route path="/register" exact={true} component={RegistrationScreen}/>
        <Route path="/login" exact={true} component={LoginScreen}/>
        <Route path="/profile" exact={true} component={ProfileScreen}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;