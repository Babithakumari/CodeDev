import './App.css';
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Output from "./Components/Output"

function App() {
  return (
    <>
    <NavBar/>
    <div class="window">
    <Card/>
    <Card/>
    <Card/>
    </div>
    <Output/>
    </>
  );
}

export default App;
