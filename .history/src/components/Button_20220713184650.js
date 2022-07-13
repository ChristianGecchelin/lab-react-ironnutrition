import { useState } from 'react';

const Button = (props) => {
  const [buttonBehavior, setButtonBehavior] = useState(false);
  const handleButton = () => {
    if (buttonBehavior === false) {
      props.setter(true);
    } else {
      props.setter(false);
    }
  };
  return (
    <div>
      {buttonBehavior ? (
        <button onClick={() => handleButton()}>Hide</button>
      ) : (
        <button onClick={() => handleButton()}>Show</button>
      )}
    </div>
  );
};

export default Button;
