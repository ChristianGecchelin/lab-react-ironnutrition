import { useState } from 'react';

const Button = () => {
  const [state, setState] = useState(false);
  return ({state?<button></button>:sad});
};

export default Button;
