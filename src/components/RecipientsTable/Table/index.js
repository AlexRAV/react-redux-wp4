import React from 'react';
import {Scrollbars} from 'react-custom-scrollbars';

import Button from '../../common/Button';
import Checkbox from '../../common/Checkbox';
import * as constants from '../constants';

import './index.css';

export default class Table extends React.Component {
    render() {
        return <div className={this.props.className}>
            <div className="recipientTable">
                <header className="recipientTable__header">
                    <div className="recipientTable__row">
                        <div className="recipientTable__cell _8"/>
                        <div className="recipientTable__cell _29">Email</div>
                        <div className="recipientTable__cell _25">Name</div>
                        <div className="recipientTable__cell _15">Status</div>
                        <div className="recipientTable__cell _23 _center">Action</div>
                    </div>
                </header>
                <div className="recipientTable__body">
                    <Scrollbars>
                        {this.props.data
                            .filter(recipient => {
                                switch (this.props.activeFilter) {
                                    case constants.ALL_RECIPIENTS:
                                        return true;
                                    case constants.SENT:
                                        return recipient.status;
                                    case constants.UNSENT:
                                        return !recipient.status;
                                }
                            })
                            .map(recipient => {
                                return <div className="recipientTable__row" key={recipient.id}>
                                    <div className="recipientTable__cell _8">
                                        <Checkbox className="recipientTable__selected-checkbox"
                                                  value={this.props.selected.includes(recipient.id)}
                                                  onClick={() => this.props.onCheckboxClick(recipient)}/>
                                    </div>
                                    <div className="recipientTable__cell _29">
                                        {recipient.email}
                                    </div>
                                    <div className="recipientTable__cell _25">
                                        {recipient.name}
                                    </div>
                                    <div className="recipientTable__cell _15">
                                        {recipient.status ? 'Sent' : 'Unsent'}
                                    </div>
                                    <div className="recipientTable__cell _23 _center">
                                        {recipient.status ? '' : <Button
                                            title="Send"
                                            onClick={() => this.props.onSend(recipient)}
                                            modifier="_small"/>}
                                    </div>
                                </div>
                            })}
                    </Scrollbars>
                </div>
            </div>
        </div>

    }
}
