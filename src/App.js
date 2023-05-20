import './App.css';
import NavBar from "./Components/NavBar";
import Editor from "./Components/Editor";
import Output from "./Components/Output";
import {useState,useEffect} from "react"

// import storage hook
import useLocalStorage from "./hooks/useLocalStorage"

function App() {

  const [HTML,setHTML] = useLocalStorage("html","")
  const [CSS,setCSS] = useLocalStorage("css","")
  const [JS,setJS] = useLocalStorage("js","")
  const [srcDoc,setSrcDoc] = useState("")

  // render srcDoc after some buffer-time, everytime Html,Css,Js is edited
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setSrcDoc(`
      <html>
        <body>${HTML}</body>
        <style>${CSS}</style>
        <script>${JS}</script>
      </html>
      `)

    },250)

    // cancel oldTimeout if new occured
    return ()=> clearTimeout(timeout)

  },[HTML,CSS,JS])

  return (
    <>
    <NavBar/>
    <hr></hr>
    <div className="pane top-pane">
    <Editor title="HTML" language="xml" value={HTML} onChange={setHTML} />
    <Editor title="CSS" language="css" value={CSS} onChange={setCSS}/>
    <Editor title="JS" language="javascript" value={JS} onChange={setJS}/>
    </div>

    <Output srcDoc={srcDoc} setSrcDoc={setSrcDoc}/>
    </>
  );
}

export default App;
