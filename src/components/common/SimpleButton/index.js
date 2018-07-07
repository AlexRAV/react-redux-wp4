import React from 'react';

import './index.css';

export default props => <button onClick={props.onClick} className={`simpleButtonComponent ${props.className}`}>{props.title}</button>
