import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { PunchCard } from '../src/punch-card/index';

export class PunchCardDemo extends React.PureComponent {
    render () {
        const rows = [
            {id: '1', points: [{x: 1, y: 1}, {x: 2, y: 7}, {x: 3, y: 10}]},
            {id: '2', points: [{x: 1, y: 2}, {x: 2, y: 6}, {x: 3, y: 20}]},
            {id: '3', points: [{x: 1, y: 3}, {x: 2, y: 5}, {x: 3, y: 30}]},
            {id: '4', points: [{x: 1, y: 4}, {x: 2, y: 4}, {x: 3, y: 10}]},
            {id: '5', points: [{x: 1, y: 5}, {x: 2, y: 3}, {x: 3, y: 20}]},
            {id: '6', points: [{x: 1, y: 6}, {x: 2, y: 2}, {x: 3, y: 30}]},
            {id: '7', points: [{x: 1, y: 7}, {x: 2, y: 1}, {x: 3, y: 10}]}
        ];

        return (
            <div className='punch-card-demo'>
                <PunchCard value={rows}/>
            </div>
        );
    }
}

const elem = document.getElementById('demo');
ReactDOM.render(<PunchCardDemo/>, elem);
