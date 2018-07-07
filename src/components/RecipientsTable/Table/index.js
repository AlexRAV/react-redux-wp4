import React from 'react';
import ScrollArea from 'react-scrollbar';

import Button from '../../common/Button';
import Checkbox from '../../common/Checkbox';

import './index.css';

export default props => <div className={props.className}>
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
            <ScrollArea
                speed={0.8}
                horizontal={false}
                smoothScrolling={true}
                verticalScrollbarStyle={{backgroundColor: '#8a9aab'}}>
                <div className="recipientTable__row">
                    <div className="recipientTable__cell _8">
                        <Checkbox className="recipientTable__selected-checkbox" value={true} onClick={() => {console.log('click')}}/>
                    </div>
                    <div className="recipientTable__cell _29">
                        sample.email@hotmail.com
                    </div>
                    <div className="recipientTable__cell _25">
                        Viktor Kotov
                    </div>
                    <div className="recipientTable__cell _15">
                        Unsent
                    </div>
                    <div className="recipientTable__cell _23 _center">
                        <Button
                            title="Action"
                            modifier="_small"/>
                    </div>
                </div>
            </ScrollArea>
        </div>
    </div>
</div>
