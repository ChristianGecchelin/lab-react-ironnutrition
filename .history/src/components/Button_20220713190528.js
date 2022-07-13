import { useState } from 'react';
import { Button } from 'antd';
const ButtonShow = (props) => {
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
        <Button
          className="botonHide"
          type="primary"
          onClick={() => handleButton()}
        >
          Hide
        </Button>
      ) : (
        <Button
          className="botonHide"
          type="primary"
          onClick={() => handleButton()}
        >
          Show
        </Button>
      )}
    </div>
  );
};

export default ButtonShow;
