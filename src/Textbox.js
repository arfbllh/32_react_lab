import React, { useState } from "react";
import './Textbox.css'

const Textbox = () => {
  const [textboxes, setTextboxes] = useState([""]); // State to store textboxes
  const [sum, setSum] = useState(0); // State to store the sum of textboxes
  const [errMsg, setErrMsg] = useState(0);

  // Function to add a new textbox
  const addTextbox = () => {
    setTextboxes([...textboxes, ""]);
  };

  // Function to remove a textbox by index
  const removeTextbox = (index) => {
    const newTextBoxes = [...textboxes];
    newTextBoxes.splice(index, 1);
    setTextboxes(newTextBoxes);
  };

  // Function to handle textbox value change
  const handleTextboxChange = (index, value) => {
    if(!isNaN(value)){
        setErrMsg(false);
    }
    else{
        setErrMsg(true);
        console.log("Please enter number only");
    }
    const newTextBoxes = [...textboxes];
    newTextBoxes[index] = value;
    setTextboxes(newTextBoxes);

    calculateSum(newTextBoxes);
  };

  // Function to calculate sum
  const calculateSum = (textBoxes) => {
    let total = 0;
    textBoxes.forEach((value) => {
      total += parseFloat(value) || 0;
    });
    setSum(total);
  };

  return (
    <div>
      <button onClick={addTextbox}>Add</button>

      {/* Textboxes */}
      {textboxes.map((value, index) => (
        <div key={index}>
          <input
            type="text"
            value={value}
            onChange={(e) => handleTextboxChange(index, e.target.value)}
          />
          {/* Delete button */}
          
          <button onClick={() => removeTextbox(index)}>Delete</button>
          
        </div>
      ))}

      <p className={errMsg ? 'errmsg' : 'hide'}>
            Please only enter number.<br/>
          </p>

      {/* Sum */}
      <div>Total: {sum}</div>
    </div>
  );
};

export default Textbox;
