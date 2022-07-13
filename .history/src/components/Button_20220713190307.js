import { useState } from 'react';
import { Button } from 'antd';
const Button = (props) => {
  const [buttonBehavior, setButtonBehavior] = useState(false);
  const handleButton = () => {
    if (buttonBehavior === false) {
      setButtonBehavior(true);
      props.setter(true);
    } else {
      setButtonBehavior(false);
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
