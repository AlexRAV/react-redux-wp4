import React from 'react';
import {connect} from 'react-redux';

import Input from '../common/Input';
import Button from '../common/Button';
import {addRecipientRequest} from '../../actions/recipients';

import './index.css'

class AddRecipient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            name: ''
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault();

        this.props.addNewRecipient({
            email: this.state.email,
            name: this.state.name
        });

        this.setState({
            email: '',
            name: ''
        })
    }

    render() {
        return <div>
            <h3 className="addRecipient__title">Add recipient</h3>
            <form className="addRecipient__form" onSubmit={this.handleSubmit.bind(this)}>
                <Input
                    name="email"
                    type="email"
                    label="Email"
                    required={true}
                    value={this.state.email}
                    className="addRecipient__input"
                    placeholder="johndoe@gmail.com"
                    onChange={this.handleChange('email')}/>
                <Input
                    name="name"
                    label="Name"
                    value={this.state.name}
                    required={true}
                    placeholder="John Doe"
                    className="addRecipient__input"
                    onChange={this.handleChange('name')}/>
                <Button
                    type="submit"
                    className="addRecipient__button"
                    title="Add email"/>
            </form>
        </div>
    }
}

const mapStateToProps = state => {
    return {...state.recipients};
};

const mapDispatchToProps = dispatch => {
    return {
        addNewRecipient: data => {
            dispatch(addRecipientRequest(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipient)
