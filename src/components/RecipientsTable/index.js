import React from 'react';

import Filters from './Filters';
import Table from './Table';
import SimpleButton from '../common/SimpleButton';
import * as constants from './constants';

import './index.css';

export default class RecipientTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: constants.ALL_RECIPIENTS
        }
    }

    render() {
        return <div className={this.props.className}>
            <div className="recipientTable__container-header">
                <Filters activeFilter={this.state.activeFilter}
                         setFilter={filter => this.setState({activeFilter: filter})}/>
                <SimpleButton
                    title="Delete selected recipients"/>
            </div>
            <Table className="recipientTable__container-table"/>
        </div>
    }
}
