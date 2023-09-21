import React, { useState } from 'react'

export default function TextForm(props) {
    // you can only update the useState value by using the setText variable 
    // text is used to retrive the value of text variable/useState
    const [text, setText] = useState('');
    const handleUpClick = () => {
        console.log("handleUpClick called");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const synth = window.speechSynthesis;
    var voice = window.speechSynthesis.getVoices();
    const speakText = () => {
        let msg = new SpeechSynthesisUtterance(text);
        msg.voice = voice[10];
        // debugger;
        synth.speak(msg);
        // console.log(msg.voice);
        // console.log(voices);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    return (
        <div className="mb-3">
            <h1 className={`text-${props.Mode === 'light' ? 'dark' : 'light'}`}>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className="my-2 btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
            <button className="my-2 btn btn-primary mx-2" onClick={speakText}>Speak Text</button>

        </div>
    )
}
