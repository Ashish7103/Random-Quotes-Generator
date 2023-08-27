import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [Firstname, setFirstName] = useState("");
  const [LastName,setLastName]=useState("")
  const [LastNameNew,setLastNameNew]=useState("")

  const handleFirstNameChange = (event) => {
    //    var NewInp= event.target.value;
    setName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    //    var NewInp= event.target.value;
    setLastName(event.target.value);
  };

  const handleClickButton = (event) => {
    event.preventDefault();

    setFirstName(name);
    setLastNameNew(LastName);
  };

  return (
    <>
    
<form onSubmit={handleClickButton}>
      <h1>Hello {Firstname} {LastNameNew}</h1>
      <input
        type="text"
        placeholder="Enter Your Firstname"
        value={name}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        placeholder="Enter Your Lasname"
        value={LastName}
        onChange={handleLastNameChange}
      />

      <button type="submit">Submit🎗️</button>
      </form>
     
    </>
  );
};

export default Form;

////////////////////////////////////////////
// controlled component
// in controlled form
// import {useState} from 'react';

// export default function  Form()  {
// 	const  [inputValue, setInputValue] =  useState('');

// 	const  handleChange = (event) => {
// 		setInputValue(event.target.value);
// 	};

// return  (
// <form>
// 	<label>Input Value:
// 	<input  type="text"  value={inputValue} onChange={handleChange} />
// 	</label>
// 	<p>Input Value: {inputValue}</p>
// </form>
// )};

// to select a option controllent component
// import { useState } from "react";

// export default function Dropdown()  {
// 	const [selectedOption, setSelectedOption] = useState("option1");

// 	const  handleDropdownChange = (event) => {
// 		setSelectedOption(event.target.value);
// 	};

// return  (
// 	<div>
// 		<label>
// 			Select an option:
// 				<select  value={selectedOption} onChange={handleDropdownChange}>
// 				<option  value="option1">Option 1</option>
// 				<option  value="option2">Option 2</option>
// 				<option  value="option3">Option 3</option>
// 			</select>
// 		</label>
// 		<p>Selected option: {selectedOption}</p>
// 	</div>
// 	);

// using checked props and conditional rendering
// import { useState } from "react";

// function Checkbox() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleChange = (event) => {
//     setIsChecked(event.target.checked);
//   };

//   return (
//     <form>
//       <label htmlFor="color">
//         <input type="checkbox" name="color" checked={isChecked} onChange={handleChange}/>
//         Blue
//       </label>

//       {isChecked && <div>Blue is selected!</div>}
//     </form>
//   );
// }

// export default Checkbox;

/////////////////////////////////////
// multiple form input in input field
// import { useState } from "react";

// export default function Form() {
//   const [formData, setFormData] = useState({name: "",email: "",message: ""});

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
//     );
// };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label>
//       <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

//       <label htmlFor="email">Email:</label>
//       <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

//       <label htmlFor="message">Message:</label>
//       <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }



// Form validation process using useState
// register
//hnadleSubmit
//error
// watch

// import React, { useState } from "react";

// const Form = () => {
//   const [currentValue, setValue] = useState("");
//   const [Error, setError] = useState(null);

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     setValue(value);
//     if (value.length < 5) {
//       const errorValue = "at least required 5 character";
//       setError(errorValue);
//     } else {
//       setError(null);
//     }
//   };
//     const handleSubmit = (event) => {
//       event.preventDefault();
//       // var regex =['A'-'Z'];
//       if(currentValue.length>=5&&currentValue.includes('@')){
//         alert("Form submitted");
//       }
//       else{
//         setError("InputValue is required atleast 5 character and @ ")
//       }
//     };
    
//     return (
//       <>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={currentValue}
//             onChange={handleInputChange}
//           ></input>
//           <p style={{color:"red",}}>{Error}</p>
//           <button type="submit" onClick={handleSubmit}>Submit!</button>
//         </form>
//       </>
//     );
  
// };
// export default Form;
