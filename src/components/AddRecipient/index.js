import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

import './index.css'

export default class AddRecipient extends React.Component {
    render() {
        return <div>
            <h3 className="addRecipient__title">Add recipient</h3>
            <form className="addRecipient__form">
                <Input
                    name="email"
                    type="email"
                    label="Email"
                    required={true}
                    className="addRecipient__input"
                    placeholder="johndoe@gmail.com"/>
                <Input
                    name="name"
                    label="Name"
                    required={true}
                    placeholder="John Doe"
                    className="addRecipient__input"/>
                <Button
                    type="submit"
                    className="addRecipient__button"
                    title="Add email"/>
            </form>
        </div>
    }
}
