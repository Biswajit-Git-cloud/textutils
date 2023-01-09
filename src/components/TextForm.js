import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleUpClick=()=>{
        // console.log("HandleUpClick is clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }

    const handleLoClick=()=>{
        // console.log("HandleLoClick is clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }

    const handleOnChange=(event)=>{
        // console.log("handleOnChange is clicked");
        setText(event.target.value);
    }

    const handleCopy=(event)=>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }

    const handleExtraSpaces=(event)=>{
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    // Declare a new state variable, which we'll call "count"
  const [text, setText] = useState("");

  return (
    <>
    <div className="containers" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === 'dark'?'#ab8787':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length>0?text.split(" ").length:0} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in textbox above to preview it here..."}</p>
    </div>
    </>
  )
}
