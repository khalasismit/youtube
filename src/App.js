import './App.css';
import Main from './Main';
import SidebarMini from './SidebarMini'
import Navbar from './Navbar'
import SidebarFull from './SidebarFull';
function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app__page">
        <SidebarMini />
        <Main />
      </div>
      <SidebarFull/>
    </div>
  );
}
export default App;
