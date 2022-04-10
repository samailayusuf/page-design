import Hero from './components/Hero';
import Houses from './components/Houses';
import NavBar from './components/NavBar'
import Services from './components/Services'
import Articles from './components/Articles'
import Brand from './components/Brand';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Houses/>
      <Services/>
      <Articles/>
      <Brand/>
    </div>
  );
}

export default App;
