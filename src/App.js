import './App.css';
import NavBar from "./Components/NavBar";
import Card from "./Components/Card";
import Output from "./Components/Output"

function App() {
  return (
    <>
    <NavBar/>
    <div className="window">
    <Card title="HTML" logo="html5"/>
    <Card title="CSS" logo="css3-alt"/>
    <Card title="JS" logo="js"/>
    </div>
    <Output/>
    </>
  );
}

export default App;
