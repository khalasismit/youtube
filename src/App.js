import './App.css';
import Main from './Main';
import SidebarMini from './SidebarMini'
import Navbar from './Navbar'
import SidebarFull from './SidebarFull';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom';
function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' />
          <div className="app__page">
            <SidebarMini />
            <Main />
          </div>
        </Switch>
      </Router>
          {/* <div className="app__page">
            <SidebarMini />
            <Main />
          </div> */}
      <SidebarFull />
    </div>
  );
}
export default App;
