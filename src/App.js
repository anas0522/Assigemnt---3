import './App.css';
import NavBar from './NavBar/Nav';
import About from './comp/About';
import Explore from './comp/Explore'
import AsSeenOn from './comp/AsSeenOn';
import Shop from './comp/Shop'
import Videos from './comp/Videos'
function App() {
  return (
    <div class="App">
      <header>
        <NavBar />
      </header>
      <div>
        <About />
        <Explore />
        <Shop />
        <Videos />
        <AsSeenOn />
      </div>
    </div>
  );
}

export default App;
