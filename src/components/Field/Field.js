import React from 'react';
import { Input } from 'semantic-ui-react';

const field = (props) => {
  return (
    <div className="base-form__input">
      <p className="base-form__label">{props.label}</p>
      <Input
        onChange={props.inputChanged}
        placeholder={props.placeholder}  
      />
    </div>
  );
}

export default field;