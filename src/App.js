import './App.css';
import Main from './Main';
import SidebarMini from './SidebarMini'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="app__page">
      <SidebarMini />
      <Main/>
      </div>
    </div>
  );
}

export default App;
