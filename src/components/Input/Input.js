// import React from "react"; //? from 18 ver. this string no-need.

import './Input.css';

// export const Input = () => {
//   return (
//     <label>
//       Name: <input type="text" />
//     </label>
//   );
// };

const Input = () => {
  return (
    <label className="label-input">
      Name: <input className='field-input' type="text" />
    </label>
  );
};

export default Input;
