import React from 'react';
import {connect} from "react-redux";

import Filters from './Filters';
import Table from './Table';
import SimpleButton from '../common/SimpleButton';
import * as constants from './constants';
import {
    changeSelectedRecipients, deleteRecipientsRequest, fetchRecipientsRequest,
    updateRecipientRequest
} from "../../actions/recipients";

import './index.css';

class RecipientTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeFilter: constants.ALL_RECIPIENTS
        }
    }

    componentDidMount() {
        this.props.fetchRecipients();
    }

    setFilter(filter) {
        this.setState({activeFilter: filter});
    }

    onSend(recipient) {
        this.props.updateRecipient({
            ...recipient,
            status: true
        });
    }

    deleteRecipients() {
        this.props.deleteRecipients(this.props.selectedRecipients);
    }

    onCheckboxClick(recipient) {
        if(this.props.selectedRecipients.includes(recipient.id)) {
            this.props.changeSelectedRecipients(this.props.selectedRecipients.filter(id => id !== recipient.id));
        }
        else {

            this.props.changeSelectedRecipients([].concat(this.props.selectedRecipients, recipient.id));
        }
    }

    render() {
        return <div className={this.props.className}>
            <div className="recipientTable__container-header">
                <Filters activeFilter={this.state.activeFilter}
                         setFilter={this.setFilter.bind(this)}/>
                <SimpleButton
                    onClick={this.deleteRecipients.bind(this)}
                    title="Delete selected recipients"/>
            </div>
            <Table className="recipientTable__container-table"
                   activeFilter={this.state.activeFilter}
                   onSend={this.onSend.bind(this)}
                   selected={this.props.selectedRecipients}
                   onCheckboxClick={this.onCheckboxClick.bind(this)}
                   data={this.props.recipientList}/>
        </div>
    }
}

const mapStateToProps = state => {
    return {...state.recipients};
};

const mapDispatchToProps = dispatch => {
    return {
        fetchRecipients: () => {
            dispatch(fetchRecipientsRequest())
        },
        updateRecipient: data => {
            dispatch(updateRecipientRequest(data))
        },
        deleteRecipients: data => {
            dispatch(deleteRecipientsRequest(data))
        },
        changeSelectedRecipients: data => {
            dispatch(changeSelectedRecipients(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipientTable)
