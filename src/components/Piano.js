import React from 'react';
import { Key } from './Key';
import _ from 'lodash';
import { NOTES } from '../constants/data';
import './Piano.css'

class Piano extends React.Component {
    constructor(proper) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }
    render () {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key key={index}
                note={note}
                pressedKeys={this.state.pressedKeys}/>
            )
        })
        return (
            <div className='piano'>
                {keys}
            </div>
        )
    }
}

export {Piano}