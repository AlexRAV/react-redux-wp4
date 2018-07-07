import React from 'react';

import './index.css';

export default props => <div className={props.className}>
    <div className="inputComponent">
        <label className="inputComponent__label" htmlFor={props.name}>{props.label}</label>
        <input
            name={props.name}
            value={props.value}
            required={props.required}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className="inputComponent__input"
            type={props.type ? props.type : "text"}/>
    </div>
</div>
