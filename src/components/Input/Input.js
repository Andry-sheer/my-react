// import React from "react"; //? from 18 ver. this string no-need.

import './Input.css';

// export const Input = () => {
//   return (
//     <label>
//       Name: <input type="text" />
//     </label>
//   );
// };

const Input = ({ ourClass, labelName }) => {
  return (
    <label className={ourClass ?  `label-input ${ourClass}` : "label-input"} >
      {labelName} <input className='field-input' type="text" />
    </label>
  );
};

export default Input;
