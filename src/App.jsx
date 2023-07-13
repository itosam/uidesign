import Home from "./components/Home";
import Services from "./components/Services";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="App">
      <Cursor />
      <Home />
      <hr className="Line" />
      <Services />
    </div>
  );
}

export default App;
