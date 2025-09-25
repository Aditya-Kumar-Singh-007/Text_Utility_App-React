import React, {useState } from "react";
import Alert  from './Alert';

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [cCount, setCount] = useState(0);
  const [wCount, setWCount] = useState(0);
  const[alert,setAlert]=useState(false);

  const onChangeHandler = (event) => {
    setText(event.target.value);
    setCount(event.target.value.length);
    setWCount(event.target.value.split(" ").filter((element)=>{return element.length!==0}).length);
  };

  const convertToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const convertToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextArea = () => {
    setText("");
    setCount(0);
  };

  const convertToUpperCaseFirstLetter = () => {
    let newText = text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
    setText(newText);
  };

  const convertToUpperCaseFirstLetterOfSentence = () => {
    let sentences = text.split(".");

    let updatedSentences = sentences.map((sentence) => {
      sentence = sentence.trim(); // remove leading/trailing spaces

      if (sentence.length > 0) {
        return (
          sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase()
        );
      }
      return "";
    });
    let newText = updatedSentences.join(". ");
    setText(newText);
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/\s+/).join(" ");
    setText(newText);
    setCount(newText.length);
    setWCount(newText.split(" ").filter((element)=>{return element.length!==0}).length);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text);
    setAlert(true);
    setTimeout(()=>{
      setAlert(false);
    },5000)
  };

  return (
    <div>
      {alert && <Alert/>}
      <div className={`mb-3 `} style={{color: props.mode==="light"?"black":"white"}} >
        <h1>{props.heading}</h1>
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label"
        ></label>
        <button disabled={text.length===0} className="btns clearText" onClick={copyToClipboard}>
          Copy to clipboard
        </button>
        <button disabled={text.length===0} className="btns clearText" onClick={clearTextArea}>
          Clear Text
        </button>
        <textarea
          className={`form-control`}
          id="exampleFormControlTextarea1"
          onChange={onChangeHandler}
          rows="8"
          placeholder="Enter Your Text..."
          value={text}
          
        ></textarea>
        <p className="countPara">
          <b>
            {wCount} Words {cCount} Character
          </b>
        </p>
        <p className="countPara">{} </p>
      </div>
      <div className="buttons">
        <button disabled={text.length===0} className="btns" onClick={convertToUpperCase}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btns" onClick={convertToLowerCase}>
          Convert To LowerCase
        </button>
        <button disabled={text.length===0} className="btns" onClick={convertToUpperCaseFirstLetter}>
          Capital First letter of Each word
        </button>
        <button disabled={text.length===0}
          className="btns"
          onClick={convertToUpperCaseFirstLetterOfSentence}
        >
          Capitalize first letter of each sentences
        </button>
        <button disabled={text.length===0} className="btns" onClick={removeExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
    </div>
  );
}
