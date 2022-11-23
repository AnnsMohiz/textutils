import React,{useState} from 'react';

export default function TextForms(props) {

  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText) 
    props.showAlert("Converted To UpperCase!","success");
   
  }
  const handleLoClick = ()=>{
     let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Converted To LowerCase!","success");
   }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const handleClickClear = ()=>
  {
    let newText = ('');
    setText(newText)
    props.showAlert("Text Cleared","success");
    
  }

  const [text, setText] = useState(''); 
  return (
    <>
<div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>   
    <h1>{props.heading}</h1>
    <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="My BOX" rows="8"></textarea>
    </div>
    <button type="button" className="btn btn-primary" onClick={handleUpClick} style={{marginRight:'5px'}}> Convert to UpperCase</button>

    <button type="button" className="btn btn-primary" onClick={handleLoClick}style = {{marginRight:'5px'}}> Convert to LowerCase</button>

    <button type="button" className="btn btn-primary" onClick={handleClickClear}> ClearText</button>
    
</div>
<div className="container my-3"style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split("").length} words and {text.length} characters</p>
            <p>{0.008 *  text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
        </div>
</>
  );


}
