import React from 'react';

export default function TextUtils(props) {
  return (
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}> 
      <div className="accordion-item">
      <strong><h1>About TextUtils</h1></strong>
      <div className="accordion-body">
        <strong>We provide free tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as remove duplicate characters, empty lines, text sorter and many others. Check the current features below and feel free to recommend a new feature by contacting us.</strong> 
      </div>
    
  </div>
    </div>
  );
}
