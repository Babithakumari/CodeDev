const Output = ({srcDoc,setSrcDoc}) =>{
    return (
        <div className="pane output-container">
        <iframe 
        title="output" 
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        width="100%"
        height="100%"/>
        </div>
    )
}
export default Output