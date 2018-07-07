import React from 'react';
import {hot} from 'react-hot-loader';

import AddRecipient from './AddRecipient';
import RecipientTable from './RecipientsTable';

import './App.css';

class App extends React.Component {
    render() {
        return <div className="main">
            <div className="main__helper" style={{width: '77px'}}/>
            <div className="main__wrapper">
                <AddRecipient/>
                <RecipientTable className="main__table"/>
            </div>
        </div>
    }
}

export default hot(module)(App);
