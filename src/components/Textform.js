import React,{useState} from 'react'

export default function Textform(props) {
    const [text, setText] = useState('');
    const handleUpClick=()=>{
        // console.log("Upperclick was Clicked"+text);
        let newtxt=text.toUpperCase();
        setText(newtxt)
        props.showAlert("Convert to UpperCase!","success");
    }
    const handleLoClick=()=>{
        // console.log("Upperclick was Clicked"+text);
        let newtxt=text.toLowerCase();
        setText(newtxt)
        props.showAlert("Convert to LowerCase!","success");

    }
    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handlecopy=()=>{
      console.log("copy");
      var text=document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
       props.showAlert("Copy To ClipBoard!","success");
    }

    const handleExtraSpace=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "))
       props.showAlert("Remove Extra Space!","success");
    }
  
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white'
          ,color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert UpperCase</button>
          <button className="btn btn-primary" onClick={handleLoClick}>Convert LowerCase</button>
          <button className="btn btn-primary mx-2" onClick={handlecopy}>Copy Text</button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Handle Extra Space</button>

    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 *text.split(" ").length }Minutes</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview it here"}</p>
    </div>
    </>
  )
}