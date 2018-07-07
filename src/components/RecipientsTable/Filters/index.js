import React from 'react';

import SimpleButton from '../../common/SimpleButton';
import * as constants from '../constants';

export default props => <div className={props.className}>
    <SimpleButton
        title="Show all"
        className={props.activeFilter === constants.ALL_RECIPIENTS ? '_active' : ''}
        onClick={() => props.setFilter(constants.ALL_RECIPIENTS)}/>
    <SimpleButton
        title="Show sent"
        className={props.activeFilter === constants.SENT ? '_active' : ''}
        onClick={() => props.setFilter(constants.SENT)}/>
    <SimpleButton
        title="Show unset"
        className={props.activeFilter === constants.UNSENT ? '_active' : ''}
        onClick={() => props.setFilter(constants.UNSENT)}/>
</div>
