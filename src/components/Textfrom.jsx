import React, { useState } from 'react'



export default function Textfrom(props) {

    const [text, setText] = useState('Enter Your Text here');  
    const handleUpperCase=()=>{
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleLowerCase=()=>{
        let newText=text.toLowerCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
   
        setText(event.target.value);
    }

    const firstWord=()=>{
        if(text.length===0){
            return 0;
        }
        else{
            return text.split(" ").length;
        }
    }
    const handleCopy=()=>{
        var txt= document.getElementById('myBox');
        txt.select();
        navigator.clipboard.writeText(txt.value);
    }


  return (
    <>
    <div className='container ' >
    


    <div className="mb-3" >
        <label htmlFor="myBox" className="form-label"><h3 style={{color:props.mode==='light'?`black`:`white`}}>{props.heading}</h3></label>
        <textarea className="form-control" id="myBox" rows="10" value={text}  onChange={handleOnChange}></textarea>
    </div>

    <button className='btn btn-primary mx-2' onClick={handleUpperCase}>Convert UpperCase</button>

    <button className='btn btn-danger mx-2' onClick={handleLowerCase}>Convert LowerCase</button>
    
    <button className='btn btn-dark mx-2' onClick={handleCopy}>Copy the Text</button>
    </div>
   

    <div className="container my-3">
        <h3 style={{color:props.mode==='light'?`green`:`white`}}>Your Text Summery: </h3>
        <p>{firstWord()} Words and {text.length} characters</p>
    </div>
    </>
  )
}
