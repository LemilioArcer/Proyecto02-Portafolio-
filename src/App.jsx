import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Navbar>
        <Hero />
      </Navbar>
    </>
  );
}

export default App;