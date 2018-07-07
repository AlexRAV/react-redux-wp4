import React from 'react';

import './index.css';

export default props => <div className={props.className}>
    <button className={`btnComponent ${props.modifier}`} type={props.type} onClick={props.onClick}>{props.title}</button>
</div>
