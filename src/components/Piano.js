import React from 'react';
import { Key } from './Key';
import './Piano.css'

class Piano extends React.Component {
    render () {
        return (
            <div className='piano'>
                <Key />
                <Key />
                <Key />
                <Key />
            </div>
        )
    }
}

export {Piano}