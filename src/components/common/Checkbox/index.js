import React from 'react';

import './index.css';

export default props => <div className={props.className}>
    <button onClick={props.onClick} className={`checkboxComponent__checkbox-btn ${props.value ? '_active' : ''}`}/>
</div>
