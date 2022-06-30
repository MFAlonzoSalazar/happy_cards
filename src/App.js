import logo from './logo.svg';
import './App.css';
import Home from "./components/home"

// it returns jsx that becomes html
function App() { // this is a component
  return (
    <div className="App"> {/*what differentiates a jsx tag and html tag is jsx is capital*/}
      <Home /> {/*this is not an html tag its jsx*/}
    </div>
  );
}

export default App;
